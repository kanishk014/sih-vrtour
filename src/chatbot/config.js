import { createChatBotMessage } from 'react-chatbot-kit';
import ListPilgrimages from './widgets/ListProperties';

const botName = 'VRTOUR Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hello User. How may I help you?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#00c194',
    },
  },

  widget: [
    {
      widgetName: 'pilgrimage',
      widgetFunc: (props) => <ListPilgrimages {...props} />,
    },
  ],
};

export default config;
