let currentNPC = null;

const npcData = {
  coach: {
    name: "Coach Marcus",
    replies: [
      "Keep your guard up at all times.",
      "Hard work beats talent when talent doesn't work.",
      "You wanna be champion? Train like one."
    ]
  },

  villain: {
    name: "The Shadow",
    replies: [
      "You think you can stop me?",
      "Power belongs to those who take it.",
      "Every hero falls eventually..."
    ]
  },

  scientist: {
    name: "Dr. Nova",
    replies: [
      "Reality is just code waiting to be rewritten.",
      "Time is not linear… it's editable.",
      "Fascinating hypothesis you have there."
    ]
  }
};

function selectNPC(key) {
  currentNPC = npcData[key];
  document.getElementById("npcName").innerText = currentNPC.name;
  document.getElementById("chatLog").innerHTML = "";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value;
  if (!text || !currentNPC) return;

  const chatLog = document.getElementById("chatLog");

  chatLog.innerHTML += `<p><b>You:</b> ${text}</p>`;

  const reply = currentNPC.replies[
    Math.floor(Math.random() * currentNPC.replies.length)
  ];

  setTimeout(() => {
    chatLog.innerHTML += `<p><b>${currentNPC.name}:</b> ${reply}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 500);

  input.value = "";
      }
