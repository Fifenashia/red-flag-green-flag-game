const scenarios = [
  {
    image: "https://via.placeholder.com/400x200?text=Boundaries",
    scenario: "Your partner respects when you need space and says, 'I'll be here when you're ready.'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is key to emotional safety."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Emotional+Abuse",
    scenario: "Your partner calls you names and mocks you when you get upset, then says you're too sensitive.",
    correctAnswer: "red",
    explanation: "This is a red flag—belittling and gaslighting are emotional abuse tactics."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Isolation",
    scenario: "Your partner gets angry when you spend time with friends and says, 'You don't need anyone but me.'",
    correctAnswer: "red",
    explanation: "This is a red flag—cutting you off from support systems is a control tactic."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Listening",
    scenario: "Your partner notices you're upset and asks, 'Do you want to talk or just need space?'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting your needs shows emotional maturity."
  }
];

// Shuffle scenarios using Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(scenarios); // Randomize order at start

let current = 0;

function loadScenario() {
  const s = scenarios[current];
  document.getElementById('scenarioText').innerText = s.scenario;
  document.getElementById('scenarioImage').src = s.image;
  document.getElementById('scenarioImage').style.display = 'block';
  document.getElementById('feedback').innerText = '';
}

function checkAnswer(answer) {
  const s = scenarios[current];
  const feedback = document.getElementById('feedback');
  if (answer === s.correctAnswer) {
    feedback.innerText = `✅ Correct! ${s.explanation}`;
  } else {
    feedback.innerText = `❌ Not quite. ${s.explanation}`;
  }
}

function nextScenario() {
  current = (current + 1) % scenarios.length;
  loadScenario();
}

window.onload = loadScenario;
