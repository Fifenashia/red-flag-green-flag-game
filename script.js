const scenarios = [
  // Red Flag Deck (Power & Control)
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
    image: "https://via.placeholder.com/400x200?text=Blame",
    scenario: "Your partner says, 'You're making a big deal out of nothing—it's your fault I got upset.'",
    correctAnswer: "red",
    explanation: "This is a red flag—minimizing harm and shifting blame are abusive behaviors."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Children",
    scenario: "Your partner threatens to take the kids if you ever try to leave.",
    correctAnswer: "red",
    explanation: "This is a red flag—using children to manipulate or threaten is coercive."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Gender+Roles",
    scenario: "Your partner says you shouldn't make decisions because 'that's the man's role.'",
    correctAnswer: "red",
    explanation: "This is a red flag—controlling behavior based on gender roles signals dominance."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Money",
    scenario: "Your partner controls all the money and only gives you an allowance.",
    correctAnswer: "red",
    explanation: "This is a red flag—financial abuse limits freedom and creates dependency."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Threats",
    scenario: "Your partner says, 'If you leave me, I'll hurt myself—and it'll be your fault.'",
    correctAnswer: "red",
    explanation: "This is a red flag—emotional blackmail is not love, it's coercion."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Intimidation",
    scenario: "Your partner punches walls or throws things when angry but says they'd never hurt you.",
    correctAnswer: "red",
    explanation: "This is a red flag—intimidation is used to create fear, even without physical contact."
  },

  // Green Flag Deck (Respect & Equality)
  {
    image: "https://via.placeholder.com/400x200?text=Listening",
    scenario: "Your partner notices you're upset and asks, 'Do you want to talk or just need space?'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting your needs shows emotional maturity."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Independence",
    scenario: "Your partner encourages you to spend time with friends and care for yourself.",
    correctAnswer: "green",
    explanation: "This is a green flag—healthy partners support your independence and outside relationships."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Accountability",
    scenario: "Your partner apologizes for snapping and says, 'That wasn't okay—I'll work on it.'",
    correctAnswer: "green",
    explanation: "This is a green flag—taking responsibility is key to growth and respect."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Coparenting",
    scenario: "Your partner says, 'Let's figure out what's best for both of us and the kids.'",
    correctAnswer: "green",
    explanation: "This is a green flag—shared parenting decisions reflect teamwork and trust."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Equality",
    scenario: "Your partner says, 'We're a team—let's decide together.'",
    correctAnswer: "green",
    explanation: "This is a green flag—mutual decision-making builds balance and equity."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Finance",
    scenario: "Your partner suggests building a shared budget and encourages your financial independence.",
    correctAnswer: "green",
    explanation: "This is a green flag—financial partnership builds transparency and equality."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Boundaries",
    scenario: "Your partner respects when you need space and says, 'I'll be here when you're ready.'",
    correctAnswer: "green",
    explanation: "This is a green flag—respecting boundaries without guilt is key to emotional safety."
  },
  {
    image: "https://via.placeholder.com/400x200?text=Conflict+Resolution",
    scenario: "Your partner says, 'I need to calm down before we talk—I don't want to say something I'll regret.'",
    correctAnswer: "green",
    explanation: "This is a green flag—managing conflict with care shows emotional regulation."
  }
];

let current = 0;

function loadScenario() {
  const s = scenarios[current];
  document.getElementById('scenarioText').innerText = s.scenario;
  document.getElementById('scenarioImage').src = s.image;
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
