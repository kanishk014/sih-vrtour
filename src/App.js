import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Agents from './components/Agents/Agents';
import Properties from './components/Properties/Properties';
import SingleProperty from './components/SingleProperty/SingleProperty';
import SingleAgent from './components/SingleAgent/SingleAgent';
import Error from './components/Error/Error';
import BlogDetail from './components/Blog/BlogDetail';
import Login from './components/Login/Login';
import AddPost from './components/AddPost/AddPost';
import SignUp from './components/SignUp/SignUp';
import Meet from './components/jitsimeet/meet';
import Profile from './components/Profile/Profile';
import PropListing from './components/UserProperties/PropListings';
import SinglePropertyDetails from './components/SinglePropertyDetails/SinglePropertyDetails';
import Activate from './components/Activate';
import ForgetPassword from './components/ForgetPass';
import ResetPassword from './components/ResetPassword';
import ScheduleMeeting from './components/ScheduleMeeting/ScheduleMeeting';
import Schedule from './components/ScheduleMeeting/Schedule';
import RecievedMeet from './components/ScheduleMeeting/recievedMeet';
import Admin from './components/Admin/Admin';
import VRView from './components/VRView/VRView';
import List from './components/List/List';
import Update from './components/Update/Update';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/about'} element={<About />} />
        <Route exact path={'/blog'} element={<Blog />} />
        <Route exact path={'/site'} element={<SinglePropertyDetails />} />
        <Route exact path={'/admin'} element={<Admin />} />
        <Route exact path={'/vrview'} element={<VRView />} />
        <Route exact path={'/list'} element={<List />} />
        <Route exact path={'/update/:id'} element={<Update />} />

        <Route exact path={'/contact'} element={<Contact />} />
        <Route exact path={'/agents'} element={<Agents />} />
        <Route exact path={'/pilgrimage'} element={<Properties />} />
        <Route exact path={'/singleproperty'} element={<SingleProperty />} />
        <Route exact path={'/singleagent'} element={<SingleAgent />} />
        <Route exact path={'*'} element={<Error />} />
        <Route exact path={'/blogdetail'} element={<BlogDetail />} />
        <Route exact path={'/login'} element={<Login />} />
        <Route exact path={'/donate'} element={<AddPost />} />
        <Route exact path={'/signup'} element={<SignUp />} />
        <Route exact path={'/meet'} element={<Meet />} />

        <Route exact path={'/profile'} element={<Profile />} />
        <Route exact path={'/listing'} element={<PropListing />} />
        <Route exact path={'/activateuser'} element={<Activate />} />
        <Route exact path={'/resetPassword'} element={<ResetPassword />} />
        <Route exact path={'/forgotPassword'} element={<ForgetPassword />} />
        <Route exact path={'/schedulemeeting'} element={<ScheduleMeeting />} />
        <Route exact path={'/schedule'} element={<Schedule />} />
        <Route exact path={'/scheduledmeetings'} element={<RecievedMeet />} />
      </Routes>
    </Router>
  );
}

export default App;
