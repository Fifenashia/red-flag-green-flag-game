// ✅ DATA (your original scenarios preserved)
const scenarios = [
  // 💕 Romantic Scenarios
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
    scenario: "Your partner gets mad when you don't immediately text back and accuses you of ignoring them.",
    correctAnswer: "red",
    explanation: "This is a red flag—expecting constant access is controlling, not caring.",
    category: "romantic"
  },
  {
    scenario: "Your partner says, 'I know social media stresses you out—let’s take a weekend offline together.'",
    correctAnswer: "green",
    explanation: "This is a green flag—recognizing emotional needs and offering support builds trust.",
    category: "romantic"
  },
  {
    scenario: "Your partner jokes about breaking up every time you disagree or express a boundary.",
    correctAnswer: "red",
    explanation: "This is a red flag—using threats to control behavior is emotionally manipulative.",
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
  // 👪 Parenting Scenarios
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
    scenario: "Your co-parent constantly changes pick-up plans and blames you when the child is disappointed.",
    correctAnswer: "red",
    explanation: "This is a red flag—instability and blame-shifting can confuse and emotionally harm children.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent uses FaceTime to let your child say goodnight when they're apart.",
    correctAnswer: "green",
    explanation: "This is a green flag—encouraging connection supports the child’s emotional security.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent blocks your number during disagreements and refuses to communicate.",
    correctAnswer: "red",
    explanation: "This is a red flag—cutting off communication prevents problem-solving and harms the child.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent says, 'Let’s present a united front—even if we don’t agree until later.'",
    correctAnswer: "green",
    explanation: "This is a green flag—consistency and teamwork provide stability for the child.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent asks, 'What’s been working for you at home?' so you can stay consistent.",
    correctAnswer: "green",
    explanation: "This is a green flag—working together to stay on the same page supports the child’s stability.",
    category: "parenting"
  },
  {
    scenario: "Your co-parent says, 'They love me more than you,' in front of the child.",
    correctAnswer: "red",
    explanation: "This is a red flag—pitting a child against a parent is emotionally manipulative and harmful.",
    category: "parenting"
  },
  // 🤝 Friendship Scenarios
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
    scenario: "Your friend only reaches out when they need a ride, money, or emotional dumping.",
    correctAnswer: "red",
    explanation: "This is a red flag—one-sided relationships drain energy and create resentment.",
    category: "friendship"
  },
  {
    scenario: "Your friend sees you're quiet in a group chat and checks in privately to see if you're okay.",
    correctAnswer: "green",
    explanation: "This is a green flag—small check-ins show care and emotional intelligence.",
    category: "friendship"
  },
  {
    scenario: "Your friend sends you memes that make fun of people with mental health issues, even after you ask them not to.",
    correctAnswer: "red",
    explanation: "This is a red flag—ignoring boundaries and making light of serious topics is harmful.",
    category: "friendship"
  },
  {
    scenario: "Your friend tells you who you can or can’t hang out with.",
    correctAnswer: "red",
    explanation: "This is a red flag—friends shouldn’t control your personal relationships.",
    category: "friendship"
  },
  {
    scenario: "Your friend says, 'If you were really my friend, you'd tell me everything.'",
    correctAnswer: "red",
    explanation: "This is a red flag—pressuring someone to overshare crosses emotional boundaries.",
    category: "friendship"
  },
  {
    scenario: "Your friend respects your boundaries, even if they’re disappointed.",
    correctAnswer: "green",
    explanation: "This is a green flag—supportive friendships allow space for boundaries and self-care.",
    category: "friendship"
  },
  {
    scenario: "Your friend makes fun of your achievements and calls you 'too sensitive' if you get upset.",
    correctAnswer: "red",
    explanation: "This is a red flag—belittling and emotional invalidation aren’t signs of true friendship.",
    category: "friendship"
  },
];

// ✅ STATE
let filteredScenarios = [];
let current = 0;
let score = 0;
let total = 0;
let missedScenarios = [];
let streak = 0;
let highestStreak = 0;

// ✅ UTILS
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ✅ GAME FLOW
function startGame() {
  const selected = Array.from(document.querySelectorAll("input[name='category']:checked")).map(cb => cb.value);
  if (selected.length === 0) {
    alert("Please select at least one category to play.");
    return;
  }
  filteredScenarios = shuffle(scenarios.filter(s => selected.includes(s.category)));
  if (filteredScenarios.length === 0) {
    alert("No scenarios available for selected category.");
    return;
  }

  current = 0;
  score = 0;
  streak = 0;
  highestStreak = 0;
  total = filteredScenarios.length;
  missedScenarios = [];

  // Reset UI
  const pb = document.getElementById("progressBar");
  if (pb) pb.style.width = "0%";
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("gameCard").style.display = "block";

  // Re-enable buttons
  document.querySelectorAll(".buttonGroup button").forEach(btn => btn.disabled = false);

  // Reset score/streak UI if present
  const sd = document.getElementById("scoreDisplay");
  if (sd) sd.innerText = "Score: 0";
  const st = document.getElementById("streakDisplay");
  if (st) st.innerText = "Streak: 0 🔥";

  loadScenario();
}

function loadScenario() {
  const s = filteredScenarios[current];
  document.getElementById("scenarioText").innerText = s.scenario;

  // Image handling (optional)
  const img = document.getElementById("scenarioImage");
  if (img) {
    img.style.display = s.image ? "block" : "none";
    img.src = s.image || "";
  }

  // Reset feedback
  const fb = document.getElementById("feedback");
  if (fb) fb.innerText = "";

  // Category icon
  const iconMap = {
    romantic: "image/romantic-icon.png",
    parenting: "image/parenting-icon.png",
    friendship: "image/friendship-icon.png"
  };
  const categoryIcon = document.getElementById("categoryIcon");
  if (categoryIcon) {
    const iconSrc = iconMap[s.category];
    if (iconSrc) {
      categoryIcon.src = iconSrc;
      categoryIcon.style.display = "inline-block";
    } else {
      categoryIcon.style.display = "none";
    }
  }

  updateProgressBar();
}

function checkAnswer(answer) {
  const s = filteredScenarios[current];
  const feedback = document.getElementById("feedback");

  if (answer === s.correctAnswer) {
    score++;
    streak++;
    if (streak > highestStreak) highestStreak = streak;
    if (feedback) feedback.innerText = `✅ Correct! ${s.explanation}`;

    // celebration
    if (typeof confetti === 'function') {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
    }
  } else {
    streak = 0;
    missedScenarios.push(s);
    if (feedback) feedback.innerText = `❌ Not quite. ${s.explanation}`;
  }

  // Update displays if present
  const sd = document.getElementById("scoreDisplay");
  if (sd) sd.innerText = `Score: ${score}`;
  const st = document.getElementById("streakDisplay");
  if (st) st.innerText = `Streak: ${streak} 🔥`;

  // Disable buttons until next
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
  document.getElementById("scoreSummary").innerText = `You got ${score} out of ${total} correct!
🔥 Highest streak: ${highestStreak}`;

  // Build review of missed only
  const review = document.getElementById("reviewContainer");
  if (review) {
    review.innerHTML = "";
    if (missedScenarios.length === 0) {
      review.innerHTML = `<p>🎉 You got them all right—amazing work!</p>`;
    } else {
      const header = document.createElement("h3");
      header.innerText = "You missed these:";
      review.appendChild(header);
      missedScenarios.forEach((s, idx) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${idx + 1}. ${s.scenario}</strong><br>✅ Correct answer: <em>${s.correctAnswer.toUpperCase()}</em><br>${s.explanation}`;
        review.appendChild(p);
        review.appendChild(document.createElement("hr"));
      });
    }
  }
}

function restartGame() {
  missedScenarios = [];
  current = 0;
  score = 0;
  total = 0;
  streak = 0;
  highestStreak = 0;

  const pb = document.getElementById("progressBar");
  if (pb) pb.style.width = "0%";
  const fb = document.getElementById("feedback");
  if (fb) fb.innerText = "";
  const review = document.getElementById("reviewContainer");
  if (review) review.innerHTML = "";

  const sd = document.getElementById("scoreDisplay");
  if (sd) sd.innerText = "Score: 0";
  const st = document.getElementById("streakDisplay");
  if (st) st.innerText = "Streak: 0 🔥";

  document.getElementById("startScreen").style.display = "block";
  document.getElementById("gameCard").style.display = "none";
  document.getElementById("endScreen").style.display = "none";

  document.querySelectorAll(".buttonGroup button").forEach(btn => btn.disabled = false);
}

function updateProgressBar() {
  const progress = ((current + 1) / total) * 100;
  const pb = document.getElementById("progressBar");
  if (pb && isFinite(progress)) pb.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}
