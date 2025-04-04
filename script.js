// script.js - Controle do Chatbot com Animações

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
    const chatbox = document.querySelector(".chatbox");
  
    const respostas = {
      "oi": "Olá! Como posso te ajudar hoje?",
      "tudo bem": "Tudo ótimo, e você?",
      "qual seu nome": "Sou o Chatbot Pro, seu assistente virtual!",
      "obrigado": "De nada! 😊",
      "adeus": "Até logo! Volte sempre."
    };
  
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const pergunta = input.value.trim();
      if (pergunta === "") return;
  
      adicionarMensagem(pergunta, "user");
      input.value = "";
      setTimeout(() => responder(pergunta.toLowerCase()), 600);
    });
  
    function adicionarMensagem(texto, tipo) {
      const msg = document.createElement("div");
      msg.classList.add("message", tipo);
  
      if (tipo === "bot") {
        digitarTexto(msg, texto);
      } else {
        msg.textContent = texto;
      }
  
      chatbox.appendChild(msg);
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  
    function digitarTexto(el, texto) {
      let index = 0;
      function escrever() {
        if (index < texto.length) {
          el.textContent += texto.charAt(index);
          index++;
          setTimeout(escrever, 30);
        }
      }
      escrever();
    }
  
    function responder(pergunta) {
      let resposta = respostas[pergunta] || gerarRespostaAutomatica(pergunta);
      adicionarMensagem(resposta, "bot");
    }
  
    function gerarRespostaAutomatica(pergunta) {
      const palavras = pergunta.split(" ");
  
      if (pergunta.includes("tempo")) {
        return "Desculpe, não posso prever o tempo ainda.";
      } else if (palavras.includes("nome")) {
        return "Meu nome é Chatbot Pro!";
      } else if (palavras.includes("ajuda")) {
        return "Claro! Acesse a aba de ajuda para mais informações.";
      } else if (palavras.includes("como")) {
        return "Boa pergunta! Você pode me perguntar quase qualquer coisa.";
      } else {
        return "Ainda estou aprendendo! Reformule sua pergunta ou explore outras páginas.";
      }
    }
  
    // Animação de entrada para itens com classe .fade
    const fadeItems = document.querySelectorAll(".fade");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    fadeItems.forEach(item => observer.observe(item));
  
    // Transição de tema claro/escuro (exemplo simples)
    const toggleTheme = document.getElementById("toggle-theme");
    if (toggleTheme) {
      toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  });
  
