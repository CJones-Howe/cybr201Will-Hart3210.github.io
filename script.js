document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("funBtn");
  const msg = document.getElementById("msg");
  const quotes = [
    "Evil is evil. Lesser, greater, middling... it's all the same.",
    "People like to invent monsters and monstrosities.",
    "I'm not a good man. I'm a witcher.",
    "Hmmm... wind's howling.",
    "When you know about something it stops being a nightmare."
  ];
  if (btn) {
    btn.addEventListener("click", () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      msg.textContent = randomQuote;
    });
  }
});
