class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  anything() {
    const message = this.createChatBotMessage('Hi, How may I help you?');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleThanks() {
    const message = this.createChatBotMessage(
      'Your Welcome! Say, Hi to start the conversation again.'
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handlePilgrimage() {
    const message = this.createChatBotMessage(
      'You can find the list of all pilgrimages here: https://vrtourpilgrimage.netlify.app/pilgrimage',
      { widgetName: 'pilgrimage' }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleContact() {
    const message = this.createChatBotMessage(
      'Hi, Thanks you for contacting us!, Please call us at +91 9871500975'
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
