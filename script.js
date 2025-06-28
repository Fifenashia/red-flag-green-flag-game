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
  {
    image: "https://via.placeholder.com/400x200?text=Guilt+Trips",
    scenario: "Your friend says, 'I guess you don’t care about me anymore,' when you can’t meet up.",
    correctAnswer: "red",
    explanation: "This is a red flag—emotional manipulation to get attention is not healthy behavior.",
    category: "friendship"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Isolation",
    scenario: "Your partner gets angry when you spend time with friends and says, 'You don't need anyone but me.'",
    correctAnswer: "red",
    explanation: "This is a red flag—cutting you off from support systems is a control tactic.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Listening",
    scenario: "Your partner notices you're upset and asks, 'Do you want to talk or just need space?'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting your needs shows emotional maturity.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Blame",
    scenario: "Your partner says, 'You're making a big deal out of nothing—it's your fault I got upset.'",
    correctAnswer: "red",
    explanation: "This is a red flag—minimizing harm and shifting blame are abusive behaviors.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Children",
    scenario: "Your partner threatens to take the kids if you ever try to leave.",
    correctAnswer: "red",
    explanation: "This is a red flag—using children to manipulate or threaten is coercive.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Control",
    scenario: "Your friend tells you who you can or can’t hang out with.",
    correctAnswer: "red",
    explanation: "This is a red flag—friends shouldn’t control your personal relationships.",
    category: "friendship"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Independence",
    scenario: "Your partner encourages you to spend time with friends and care for yourself.",
    correctAnswer: "green",
    explanation: "This is a green flag—healthy partners support your independence and outside relationships.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Parental+Manipulation",
    scenario: "Your co-parent tells your child, 'Mom wouldn't let me see you,' to make them feel guilty.",
    correctAnswer: "red",
    explanation: "This is a red flag—using children to manipulate emotions is unhealthy and damaging.",
    category: "parenting"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Finance",
    scenario: "Your partner suggests building a shared budget and encourages your financial independence.",
    correctAnswer: "green",
    explanation: "This is a green flag—financial partnership builds transparency and equality.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Gender+Roles",
    scenario: "Your partner says you shouldn't make decisions because 'that's the man's role.'",
    correctAnswer: "red",
    explanation: "This is a red flag—controlling behavior based on gender roles signals dominance.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Accountability",
    scenario: "Your partner apologizes for snapping and says, 'That wasn't okay—I'll work on it.'",
    correctAnswer: "green",
    explanation: "This is a green flag—taking responsibility is key to growth and respect.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Money",
    scenario: "Your partner controls all the money and only gives you an allowance.",
    correctAnswer: "red",
    explanation: "This is a red flag—financial abuse limits freedom and creates dependency.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Threats",
    scenario: "Your partner says, 'If you leave me, I'll hurt myself—and it'll be your fault.'",
    correctAnswer: "red",
    explanation: "This is a red flag—emotional blackmail is not love, it's coercion.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Intimidation",
    scenario: "Your partner punches walls or throws things when angry but says they'd never hurt you.",
    correctAnswer: "red",
    explanation: "This is a red flag—intimidation is used to create fear, even without physical contact.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Coparenting",
    scenario: "Your partner says, 'Let's figure out what's best for both of us and the kids.'",
    correctAnswer: "green",
    explanation: "This is a green flag—shared parenting decisions reflect teamwork and trust.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Equality",
    scenario: "Your partner says, 'We're a team—let's decide together.'",
    correctAnswer: "green",
    explanation: "This is a green flag—mutual decision-making builds balance and equity.",
    category: "romantic"
  },
  {
    image: "https://via.placeholder.com/400x200?text=Conflict+Resolution",
    scenario: "Your partner says, 'I need to calm down before we talk—I don't want to say something I'll regret.'",
    correctAnswer: "green",
    explanation: "This is a green flag—managing conflict with care shows emotional regulation.",
    category: "romantic"
  }
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

function loadScenario() {
  const s = filteredScenarios[current];
  document.getElementById('scenarioText').innerText = s.scenario;
  document.getElementById('scenarioImage').src = s.image;
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

function startGame() {
  const selectedCategories = Array.from(document.qu


