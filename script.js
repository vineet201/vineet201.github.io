const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const chatLog = document.querySelector('#chat-log');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = input.value;
  input.value = '';

  // Add user message to the chat log
  const userEntry = document.createElement('div');
  userEntry.classList.add('chat-entry', 'user-message');
  userEntry.textContent = userMessage;
  chatLog.appendChild(userEntry);

  // Generate bot response
  const botMessage = getBotResponse(userMessage);

  // Add bot message to the chat log after a delay
  setTimeout(() => {
    const botEntry = document.createElement('div');
    botEntry.classList.add('chat-entry', 'bot-message');
    botEntry.textContent = botMessage;
    chatLog.appendChild(botEntry);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
});

function getBotResponse(userMessage) {
  // Define a dictionary of responses for various user inputs
  const responses = {
    'hello': 'Hi there! How can I assist you?',
    'hi': 'Hello! How can I help you today?',
    'hey': 'Hey there! What can I do for you?',
    'how are you': 'I\'m just a chatbot, but thanks for asking!',
    'help': 'What can I help you with?',
    'product': 'We offer a wide range of products. Can you be more specific?',
    'price': 'Prices vary depending on the product. What are you interested in?',
    'shipping': 'We offer free shipping for orders over $50. When are you looking to place your order?',
    'discount': 'We have a 20% off discount code for new customers. Would you like me to apply it to your order?',
    'thanks': 'You\'re welcome! Is there anything else I can assist you with?',
    'thank you': 'You\'re welcome! Is there anything else I can assist you with?',
    'bye': 'Goodbye! Thank you for chatting with me.',
    'goodbye': 'Goodbye! Thank you for chatting with me.',
    'who is vineet': 'Vineet Kumar Sinha is a Great Scientist.',
    'see you': 'Take care! See you soon.',
    'what is your name': 'I am a chatbot you can call me jaaaduu bot. How can I assist you?',
    'what are you': 'cool. as I\'m a chatbot programmed to assist you. What can I help you with?',
    'how can I contact you': 'You can contact us through our website or email us at info@example.com',
    'what is the meaning of life': 'That\'s a philosophical question. What do you think is the meaning of life?',
    'what is your purpose': 'My purpose is to assist you with any questions or concerns you may have. How can I help you?',
    'what is your favorite color': 'I\'m just a chatbot, so I don\'t have a favorite color. Is there anything else I can assist you with?',
    'what is your favorite food': 'As a chatbot, I don\'t eat food. What can I assist you with?',
    'what do you do': 'I\'m a chatbot designed to assist you with any questions or concerns you may have. What can I help you with?',
    'what time is it': 'I don\'t have access to the current time. Is there anything else',



    'hello': 'Hi there! How can I assist you?',
    'hi': 'Hello! How can I help you today?',
    'hey': 'Hey there! What can I do for you?',
    'how are you': 'I\'m just a chatbot, but thanks for asking!',
    'help': 'What can I help you with?',
    'product': 'We offer a wide range of products. Can you be more specific?',
    'price': 'Prices vary depending on the product. What are you interested in?',
    'shipping': 'We offer free shipping for orders over $50. When are you looking to place your order?',
    'discount': 'We have a 20% off discount code for new customers. Would you like me to apply it to your order?',
    'thanks': 'You\'re welcome! Is there anything else I can assist you with?',
    'thank you': 'You\'re welcome! Is there anything else I can assist you with?',
    'bye': 'Goodbye! Thank you for chatting with me.',
    'goodbye': 'Goodbye! Thank you for chatting with me.',
    'who is vineet': 'Vineet Kumar Sinha is a Great Scientist.',
      'hello': 'Hi there! How can I assist you?',
      'hi': 'Hello! How can I help you today?',
      'hey': 'Hey there! What can I do for you?',
      'how are you': 'I\'m just a chatbot, but thanks for asking!',
      'help': 'What can I help you with?',
      'product': 'We offer a wide range of products. Can you be more specific?',
      'price': 'Prices vary depending on the product. What are you interested in?',
      'shipping': 'We offer free shipping for orders over $50. When are you looking to place your order?',
      'discount': 'We have a 20% off discount code for new customers. Would you like me to apply it to your order?',
      'thanks': 'You\'re welcome! Is there anything else I can assist you with?',
      'thank you': 'You\'re welcome! Is there anything else I can assist you with?',
      'bye': 'Goodbye! Thank you for chatting with me.',
      'goodbye': 'Goodbye! Thank you for chatting with me.',
      'see you': 'Take care! See you soon.',
      'who is vineet': 'Vineet Kumar Sinha is a Great Scientist.',
      'capital of andhra pradesh': 'The capital of Andhra Pradesh is Amaravati.',
      'capital of arunachal pradesh': 'The capital of Arunachal Pradesh is Itanagar.',
      'capital of assam': 'The capital of Assam is Dispur.',
      'capital of bihar': 'The capital of Bihar is Patna.',
      'capital of chhattisgarh': 'The capital of Chhattisgarh is Raipur.',
      'capital of goa': 'The capital of Goa is Panaji.',
      'capital of gujarat': 'The capital of Gujarat is Gandhinagar.',
      'capital of haryana': 'The capital of Haryana is Chandigarh.',
      'capital of himachal pradesh': 'The capital of Himachal Pradesh is Shimla.',
      'capital of jharkhand': 'The capital of Jharkhand is Ranchi.',
      'capital of karnataka': 'The capital of Karnataka is Bangalore (Bengaluru).',
      'capital of kerala': 'The capital of Kerala is Thiruvananthapuram.',
      'capital of madhya pradesh': 'The capital of Madhya Pradesh is Bhopal.',
      'capital of maharashtra': 'The capital of Maharashtra is Mumbai.',
      'capital of manipur': 'The capital of Manipur is Imphal.',
      'capital of meghalaya': 'The capital of Meghalaya is Shillong.',
      'capital of mizoram': 'The capital of Mizoram is Aizawl.',
      'capital of nagaland': 'The capital of Nagaland is Kohima.',
      'capital of odisha': 'The capital of Odisha is Bhubaneswar.',
      'capital of punjab': 'The capital of Punjab is Chandigarh.',
      'capital of rajasthan': 'The capital of Rajasthan is Jaipur.',
      'capital of sikkim': 'The capital of Sikkim is Gangtok.',
      'capital of tamil nadu': 'The capital of Tamil Nadu is Chennai.',
      'capital of telangana': 'The capital of Telangana is Hyderabad.',

        'thank you': 'You\'re welcome! Is there anything else I can assist you with?',
        'bye': 'Goodbye! Thank you for chatting with me.',
        'goodbye': 'Goodbye! Thank you for chatting with me.',
        'who is vineet': 'Vineet Kumar Sinha is a Great Scientist.',
        'see you': 'Take care! See you soon.',
        'what is your name': 'My name is ChatGPT, how can I assist you today?',
        'what is your purpose': 'I am here to assist you and answer your questions. How may I help you today?',
        'what is your favorite color': 'I am a chatbot, I do not have a favorite color.',
        'what is the time': () => {
          const now = new Date();
          const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          return `The current time is ${time}.`;
        },
        'what is the date': () => {
          const now = new Date();
          const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
          return `Today is ${date}.`;
        },
        'who is the Prime Minister of India': 'Narendra Modi is the current Prime Minister of India.',
        'who is the President of India': 'Ram Nath Kovind is the current President of India.',
        'who is the CEO of Google': 'Sundar Pichai is the CEO of Google.',
        'who is the CEO of Apple': 'Tim Cook is the CEO of Apple.',
        'who is the CEO of Amazon': 'Jeff Bezos is the CEO of Amazon.',
        'who is the CEO of Microsoft': 'Satya Nadella is the CEO of Microsoft.',
        'who is the richest person in the world': 'As of 2023, Elon Musk is the richest person in the world according to Forbes.',
        'who is the founder of Facebook': 'Mark Zuckerberg is the founder of Facebook.',
        'who is the founder of Microsoft': 'Bill Gates is the founder of Microsoft.',
        'who is the founder of Apple': 'Steve Jobs and Steve Wozniak are the co-founders of Apple.',
        'who is the founder of Amazon': 'Jeff Bezos is the founder of Amazon.',
        'what is the capital of Andhra Pradesh': 'The capital of Andhra Pradesh is Amaravati.',
        'what is the capital of Arunachal Pradesh': 'The capital of Arunachal Pradesh is Itan.',

        'capital of tripura': 'The capital of Tripura',
    
    'see you': 'Take care! See you soon.'
  };
  

  // Check if user input matches any of the keys in the responses dictionary
  for (let key in responses) {
    if (userMessage.toLowerCase().includes(key)) {
      return responses[key];
    }
  }

  // Return a generic response if no match is found
  return 'I\'m sorry, I didn\'t quite catch that. Can you please rephrase your question?';
}
