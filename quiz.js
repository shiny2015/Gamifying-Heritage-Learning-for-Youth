const quizzes = {
  charminar: [
    { q: "Who built Charminar?", o: ["Quli Qutb Shah", "Kakatiya Rulers", "Asaf Jahi"], a: 0 },
    { q: "Where is Charminar located?", o: ["Warangal", "Hyderabad", "Nizamabad"], a: 1 },
  ],
  ramappa: [
    { q: "Ramappa Temple is dedicated to which deity?", o: ["Shiva", "Vishnu", "Rama"], a: 0 },
    { q: "Ramappa Temple is made of?", o: ["Granite", "Sandstone", "Basalt"], a: 1 },
  ],
  golconda: [
    { q: "Golconda Fort is famous for?", o: ["Diamonds", "Iron", "Spices"], a: 0 },
    { q: "Golconda Fort was built by?", o: ["Kakatiya Kings", "Qutb Shahi Dynasty", "Asaf Jahi"], a: 1 },
  ],
  thousand_pillar: [
    { q: "Thousand Pillar Temple is in?", o: ["Warangal", "Hyderabad", "Karimnagar"], a: 0 },
    { q: "Dedicated to which deities?", o: ["Shiva, Vishnu, Surya", "Brahma, Vishnu, Shiva", "Lakshmi, Saraswati, Durga"], a: 0 },
  ],
  chilkur: [
    { q: "Chilkur Balaji Temple is known as?", o: ["Visa Temple", "Golden Temple", "Rock Temple"], a: 0 },
    { q: "Located near which lake?", o: ["Hussain Sagar", "Osman Sagar", "Durgam Cheruvu"], a: 1 },
  ],
  sammakka: [
    { q: "Sammakka Saralamma Jatara happens every?", o: ["2 years", "4 years", "5 years"], a: 1 },
    { q: "It is celebrated by which community?", o: ["Tribal", "Muslim", "Buddhist"], a: 0 },
  ],
  jogulamba: [
    { q: "Jogulamba is one of?", o: ["18 Shakti Peethas", "108 Temples", "9 Navagrahas"], a: 0 },
    { q: "Located in which district?", o: ["Gadwal", "Alampur", "Adilabad"], a: 1 },
  ],
  yadagirigutta: [
    { q: "Yadagirigutta temple is dedicated to?", o: ["Narasimha Swamy", "Shiva", "Venkateswara"], a: 0 },
    { q: "Recently renamed as?", o: ["Yadadri", "Yadagiri Fort", "Bhadradri"], a: 0 },
  ],
};

// Backgrounds for each site
const siteBackgrounds = {
  charminar: "url('charminar_bg.jpg')",
  ramappa: "url('ramappa_bg.jpg')",
  golconda: "url('golconda_bg.jpg')",
  thousand_pillar: "url('thousand pillar_bg.jpg')",
  chilkur: "url('chilkur_bg.jpg')",
  sammakka: "url('sammakka_bg.jpg')",
  jogulamba: "url('jogulamba_bg.jpg')",
  yadagirigutta: "url('yadigirigutta_bg.jpg')",
};

const siteId = localStorage.getItem("selectedSite");
const quiz = quizzes[siteId];
let currentQ = 0;
let score = 0;

window.onload = () => {
  if (!quiz) {
    document.body.innerHTML = "<h2>Invalid selection. Go back to home.</h2>";
    return;
  }

  // Set dynamic background
  document.body.style.backgroundImage = siteBackgrounds[siteId];
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.color = "white";

  document.getElementById("quizTitle").innerText = siteId.replace("_", " ").toUpperCase() + " QUIZ";
  showQuestion();
};

function showQuestion() {
  const q = quiz[currentQ];
  document.getElementById("questionBox").innerText = q.q;
  const optionsBox = document.getElementById("optionsBox");
  optionsBox.innerHTML = "";
  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === quiz[currentQ].a) score++;
  document.querySelectorAll("#optionsBox button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < quiz.length) showQuestion();
  else showResult();
}

function showResult() {
  document.querySelector(".quiz-container").classList.add("hidden");
  const box = document.getElementById("resultBox");
  box.classList.remove("hidden");
  box.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${quiz.length}</p>
    <button onclick="window.location.href='index.html'">Go Home</button>
  `;
}
