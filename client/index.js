import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const wheelBoll = document.getElementById("wrapperWheel");
  const btnWheel = document.getElementById("btnClickWheel1");
  const answerShow = document.getElementById("showAnswer");
  const boxWheel = document.getElementById("box-wheel");
  const answer = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no",
  ];

  btnWheel.addEventListener("click", showAnswerWithBtn);

  function showAnswerWithBtn() {
    const randomElement = Math.floor(Math.random() * answer.length);
    answerShow.textContent = answer[randomElement];
  }
});
