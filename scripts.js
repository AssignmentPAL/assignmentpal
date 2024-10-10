document.addEventListener('DOMContentLoaded', (event) => {
    const chatbotInput = document.getElementById('user-input');
    const chatbotSend = document.getElementById('send-btn');
    const chatbotMessages = document.getElementById('chat-history');
    const uploadForm = document.getElementById('upload-form');
    const documentList = document.getElementById('document-list');
    const topicsList = document.getElementById('topics-list');
    const trainedTexts = document.getElementById('trained-texts');


    chatbotSend.addEventListener('click', () => {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage('You', message);
            chatbotInput.value = '';
            setTimeout(() => {
                addMessage('Chatbot', getBotResponse(message));
            }, 1000);
        }
    });

    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            chatbotSend.click();
        }
    });

    // Handle file upload
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(uploadForm);
        // Implement your upload logic here
        console.log('File uploaded:', formData.get('document'));
    });

     // Populate document list
     const documents = ['Document1.pdf', 'Document2.docx', 'Document3.txt']; // Example documents
     documents.forEach(doc => {
         const option = document.createElement('option');
         option.value = doc;
         option.textContent = doc;
         documentList.appendChild(option);
     });

      // Populate topics list
    const topics = ['Topic1', 'Topic2', 'Topic3']; // Example topics
    topics.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.textContent = topic;
        topicsList.appendChild(listItem);
    });

    // Populate trained texts list
    const texts = ['Text1', 'Text2', 'Text3']; // Example texts
    texts.forEach(text => {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        trainedTexts.appendChild(listItem);
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
        const responses = {
            hi: 'How can I assist you today?',
            default: 'I am not sure how to respond to that.'
        };
        return responses[message.toLowerCase()] || responses['default'];
    }
});
