function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;
  
    addMessage('user', messageText);
    userInput.value = '';
  
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      addMessage('bot', botResponse);
    }, 500);
  }
  
  function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes('hola')) {
      return '¡Hola! ¿Cómo estás?';
    } else if (input.includes('ayuda')) {
      return 'Claro, estoy aquí para ayudarte. ¿Qué necesitas?';
    } else if (input.includes('gracias')) {
      return '¡De nada! Para eso estoy.';
    } else {
      return 'Lo siento, no entendí eso. ¿Podrías reformularlo?';
    }
  }
  
  function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tablink")[0].click();
  });
  
