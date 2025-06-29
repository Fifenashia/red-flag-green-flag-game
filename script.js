const scenarios = [
  {
    scenario: "Your partner respects when you need space and says, 'I'll be here when you're ready.'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is key to emotional safety.",
    category: "romantic"
  },
  {
    scenario: "Your partner calls you names and mocks you when you get upset, then says you're too sensitive.",
    correctAnswer: "red",
    explanation: "This is a red flag—belittling and gaslighting are emotional abuse tactics.",
    category: "romantic"
  },
  {
    scenario: "Your partner notices you're upset and asks, 'Do you want to talk or just need space?'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting your needs shows emotional maturity.",
    category: "romantic"
  },
  {
    scenario: "Your partner says, 'You're making a big deal out of nothing—it's your fault I got upset.'",
    correctAnswer: "red",
    explanation: "This is a red flag—minimizing harm and shifting blame are abusive behaviors.",
    category: "romantic"
  },
  {
    scenario: "Your partner says, 'If you leave me, I'll hurt myself—and it'll be your fault.'",
    correctAnswer: "red",
    explanation: "This is a red flag—emotional blackmail is not love, it's coercion.",
    category: "romantic"
  },
  {
    scenario: "Your partner encourages you to spend time with friends and care for yourself.",
    correctAnswer: "green",
    explanation: "This is a green flag—healthy partners support your independence and outside relationships.",
    category: "romantic"
  },
  {
    scenario: "You and your co-parent calmly discuss consequences when your child misbehaves.",
    correctAnswer: "green",
    explanation: "This is a green flag—co-parenting with mutual respect supports the child.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent tells your child, 'Mom wouldn't let me see you,' to make them feel guilty.",
    correctAnswer: "red",
    explanation: "This is a red flag—using children to manipulate emotions is unhealthy and damaging.",
    category: "parenting"
  },
  {
    scenario: "Your partner says, 'Let's figure out what's best for both of us and the kids.'",
    correctAnswer: "green",
    explanation: "This is a green flag—shared parenting decisions reflect teamwork and trust.",
    category: "parenting"
  },
  {
    scenario: "Your friend respects when you say you're too tired to hang out and says, 'No worries, rest up!'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is a mark of a supportive friendship.",
    category: "friendship"
  },
  {
    scenario: "Your friend says, 'I guess you don’t care about me anymore,' when you can’t meet up.",
    correctAnswer: "red",
    explanation: "This is a red flag—emotional manipulation to get attention is not healthy behavior.",
    category: "friendship"
  },
  {
    scenario: "Your friend tells you who you can or can’t hang out with.",
    correctAnswer: "red",
    explanation: "This is a red flag—friends shouldn’t control your personal relationships.",
    category: "friendship"
  }
];

let filteredScenarios = [];
let current = 0;
let score = 0;
let total = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  // Get selected categories
  const selected = Array.from(document.querySelectorAll("input[name='category']:checked"))
    .map(cb => cb.value);

  if (selected.length === 0) {
    alert("Please select at least one category to play.");
    return;
  }

  // Filter and shuffle scenarios
  filteredScenarios = shuffle(scenarios.filter(s => selected.includes(s.category)));

  if (filteredScenarios.length === 0) {
    alert("No scenarios available for selected category.");
    return;
  }

  current = 0;
  score = 0;
  total = filteredScenarios.length;

  document.getElementById("startScreen").style.display = "none";
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("gameCard").style.display = "block";

  loadScenario();
}

function loadScenario() {
  const s = filteredScenarios[current];
  document.getElementById("scenarioText").innerText = s.scenario;
  document.getElementById("scenarioImage").style.display = s.image ? "block" : "none";
  document.getElementById("scenarioImage").src = s.image || "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(answer) {
  const s = filteredScenarios[current];
  const feedback = document.getElementById("feedback");
  if (answer === s.correctAnswer) {
    feedback.innerText = `✅ Correct! ${s.explanation}`;
    score++;
  } else {
    feedback.innerText = `❌ Not quite. ${s.explanation}`;
  }

  // Disable buttons until next is clicked
  document.querySelectorAll(".buttonGroup button").forEach(btn => btn.disabled = true);
}

function nextScenario() {
  current++;
  if (current < filteredScenarios.length) {
    loadScenario();
    document.querySelectorAll(".buttonGroup button").forEach(btn => btn.disabled = false);
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("gameCard").style.display = "none";
  document.getElementById("endScreen").style.display = "block";
  document.getElementById("scoreSummary").innerText = `You got ${score} out of ${total} correct!`;
}

function restartGame() {
  // Reset tracking variables
  missedScenarios = [];
  current = 0;
  score = 0;
  total = 0;

  // Reset progress bar
  document.getElementById("progressBar").style.width = "0%";

  // Clear any lingering feedback or review content
  document.getElementById("feedback").innerText = "";
  document.getElementById("reviewContainer").innerHTML = "";

  // Reset UI screens
  document.getElementById("startScreen").style.display = "block";
  document.getElementById("gameCard").style.display = "none";
  document.getElementById("endScreen").style.display = "none";

  // Re-enable answer buttons in case they stayed disabled
  document.querySelectorAll(".buttonGroup button").forEach(btn => btn.disabled = false);
}
