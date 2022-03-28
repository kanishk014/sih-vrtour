import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, userRgister } from "../../store/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {Button,ProgressBar} from 'react-bootstrap'
import ScrollButton from "../scrollToTop";
const Profile = () => {
    	const [scrollState, setScrollState] = useState(false);
			useEffect(() => {
				window.addEventListener("scroll", (e) => {
					var scroll = window.pageYOffset;
					if (scroll <= 100) {
						setScrollState(false);
					} else {
						setScrollState(true);
					}
				});
			});
    const [iImage, setiImage] = useState(null);
		const [iprogress, setIProgress] = useState(0);
	const [details, setDetails] = useState({
		name: "",
		email: "",
		phoneno: "",
		dob: "",
		userpass: "",
		gender: "",
		confirmpass: "",
	});
    const navigate=useNavigate()
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const userDataReducer = useSelector((state) => state.userDataReducer);
	const { userData, loading } = userDataReducer;
	console.log(userData);
	const id = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo"))._id:null;
	useEffect(() => {
        if(id){
		dispatch(fetchUserData(id));

        }
        else{
            navigate("/login")
        }
	}, [dispatch, id]);
    const handleCancel=()=>{
        setEdit(false)
    }
    const changeImage = () => {
			const storageRef = ref(storage, `users/${details.name}/${iImage.name}`);
			const uploadTask = uploadBytesResumable(storageRef, iImage);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const prog = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setIProgress(prog);
				},
				(error) => console.log(error),
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setDetails((prev) => {
							return { ...prev, userImage: downloadURL };
						});
					});
				}
			);
		};
	return (
		<div>
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								My Account
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<main class="site-main content-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-sm-12 col-12">
							<div class="page-content-block">
								<div class="col-md-12 rtcl-login-form-wrap">
									<h2>Profile</h2>
									{loading ? (
										<div
											class="container-fluid"
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginTop: "20px",
												marginBottom: "40x",
											}}
										>
											<img src="img/preloader.gif" alt="load" />
										</div>
									) : (
										<form
										// id="rtcl-Profile-form"
										// class="form-horizontal"
										>
											{edit && (
												<div style={{ marginTop: "20px" }}>
													<label
														htmlFor="Userimage"
														// style={{ fontSize: "18px", color: "#309255" }}
													>
														Change User Image *
													</label>
													<input
														type="file"
														id="Userimage"
														className="form-control"
														name="Instructor"
														accept=".jpg,.jpeg,.png"
														style={{ marginTop: "10px" }}
														placeholder="User image"
														onChange={(e) => {
															setiImage(e.target.files[0]);
														}}
													/>
													{iprogress > 0 && iprogress < 100 && (
														<ProgressBar
															striped
															variant="success"
															style={{ marginTop: "10px" }}
															now={iprogress}
														/>
													)}

													<Button
														onClick={changeImage}
														variant="btn btn-secondary btn-outline w-100"
														style={{
															marginTop: "10px",
															backgroundColor: "#00c194",
															border: 0,
															height: "30px",
															fontSize: "16px",
															padding: "20px ",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
														}}
													>
														{iprogress === 100 ? "Uploaded" : "Upload"}
													</Button>
												</div>
											)}
											<div class="form-group">
												<label for="name" class="control-label">
													Name
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="name"
													id="name"
													readOnly={!edit}
													style={{ textTransform: "capitalize" }}
													class="form-control"
													value={
														!edit ? userData && userData.name : details.name
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, name: e.target.value };
														});
													}}
												/>
											</div>

											<div class="form-group">
												<label for="email" class="control-label">
													Email
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="email"
													name="email"
													id="email"
													class="form-control"
													readOnly
													value={
														userData && userData.email
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, email: e.target.value };
														});
													}}
												/>
											</div>

											<div class="form-group">
												<label for="phoneno" class="control-label">
													Phone Number <strong class="rtcl-required">*</strong>
												</label>
												<input
													readOnly={!edit}
													type="tel"
													name="phoneno"
													id="phoneno"
													class="form-control"
													value={
														!edit
															? userData && userData.phoneno
															: details.phoneno
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, phoneno: e.target.value };
														});
													}}
												/>
											</div>

											<div>
												<label for="gender" class="control-label">
													Gender <strong class="rtcl-required">*</strong>
												</label>
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Male" };
														});
													}}
												/>{" "}
												Male
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Female" };
														});
													}}
												/>{" "}
												Female
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Other" };
														});
													}}
												/>{" "}
												Other
											</div>

											<div class="form-group">
												<label for="dob" class="control-label">
													Date of Birth <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="date"
													name="dob"
													id="dob"
													readOnly={!edit}
													class="form-control"
													value={!edit ? userData && userData.dob : details.dob}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, dob: e.target.value };
														});
													}}
												/>
											</div>

											{!edit && (
												<div className="single-form">
													<button
														style={{ background: "#00c194", border: 0 }}
														className="btn btn-primary btn-hover-dark w-100"
														onClick={() => setEdit(true)}
													>
														Edit Your Details
													</button>
												</div>
											)}
											{edit && (
												<div className="single-form">
													<button
														style={{ background: "#00c194", border: 0 }}
														className="btn btn-primary btn-hover-dark w-100"
														// onClick={() => handleSubmit(true)}
													>
														Save Details
													</button>
													<button
														style={{ background: "#000", border: 0 }}
														className="btn btn-secondary btn-outline w-100 mt-4"
														onClick={() => handleCancel()}
													>
														Cancel
													</button>
												</div>
											)}
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<ScrollButton scrollState={scrollState} />

			<Footer />
		</div>
	);
};
export default Profile;
