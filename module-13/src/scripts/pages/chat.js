import '../../styles.scss';
import messageTemplate from '../../templates/message.hbs';
import loadGoogleMaps from './google-maps';

const ws = new WebSocket("wss://echo.websocket.org");
const chatFormRef = document.querySelector('.chat-form');
const messagesRef = document.querySelector('.messages');

const addMessage = text => {
  messagesRef.insertAdjacentHTML('beforeend', messageTemplate(text))
}

ws.onopen = function(e) {
  console.log('connection opened');
  ws.send('User connected');
};

ws.onmessage = function(event) {
  const { data } = event;
  addMessage(data)
};

const sendMessage = event => {
  event.preventDefault();
  
  const { currentTarget: chatForm } = event;
  const { value } = chatForm.elements.message;

  ws.send(value);
  chatForm.reset();
}

chatFormRef.addEventListener('submit', sendMessage)