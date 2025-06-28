const scenarios = [
  {
    image: "https://via.placeholder.com/400x200?text=Boundaries",
    scenario: "Your partner respects when you need space and says, 'I'll be here when you're ready.'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is key to emotional safety.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Discipline",
    scenario: "You and your co-parent calmly discuss consequences when your child misbehaves.",
    correctAnswer: "green",
    explanation: "This is a green flag—co-parenting with mutual respect supports the child.",
    category: "parenting"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Emotional+Abuse",
    scenario: "Your partner calls you names and mocks you when you get upset, then says you're too sensitive.",
    correctAnswer: "red",
    explanation: "This is a red flag—belittling and gaslighting are emotional abuse tactics.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Healthy+Boundaries",
    scenario: "Your friend respects when you say you're too tired to hang out and says, 'No worries, rest up!'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is a mark of a supportive friendship.",
    category: "friendship"
  },
  // ... (keep the rest of your existing scenarios, just make sure the format is consistent)
];

];

let filteredScenarios = [];
let current = 0;

// Shuffle using Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function applyCategoryFilter() {
  const checkboxes = document.querySelectorAll('#filterContainer input[type="checkbox"]:checked');
  const selected = Array.from(checkboxes).map(cb => cb.value.toLowerCase());

  if (selected.length === 0) {
    alert("Please select at least one category to begin.");
    return;
  }

  filteredScenarios = scenarios.filter(s => selected.includes(s.category.toLowerCase()));
  shuffle(filteredScenarios);
  current = 0;

  document.getElementById("filterContainer").style.display = "none";
  document.getElementById("gameCard").style.display = "block";

  loadScenario();
}

function loadScenario() {
  const s = filteredScenarios[current];
  document.getElementById('scenarioText').innerText = s.scenario;
  document.getElementById('scenarioImage').src = s.image;
  document.getElementById('scenarioImage').style.display = 'block';
  document.getElementById('feedback').innerText = '';
}

function checkAnswer(answer) {
  const s = filteredScenarios[current];
  const feedback = document.getElementById('feedback');
  if (answer === s.correctAnswer) {
    feedback.innerText = `✅ Correct! ${s.explanation}`;
  } else {
    feedback.innerText = `❌ Not quite. ${s.explanation}`;
  }
}

function nextScenario() {
  current = (current + 1) % filteredScenarios.length;
  loadScenario();
}

// Hide gameCard initially
window.onload = () => {
  document.getElementById("gameCard").style.display = "none";
};
