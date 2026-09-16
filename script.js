/* ==================== GAME DATA ==================== */

let completed = new Set();

let currentQuestion = 0;


const quiz = [

  {
    question:
      "Where did Kai and Shy first meet?",

    answers: [
      "Tinder",
      "School",
      "Facebook",
      "Coffee shop"
    ],

    correct: 0
  },


  {
    question:
      "What's Shy's favorite hobby?",

    answers: [
      "Watching Movie",
      "Reading a Book",
      "Playing Genshin",
      "Sleeping"
    ],

    correct: 2
  },


  {
    question:
      "What's Shy's favorite drink?",

    answers: [
      "Hot matcha",
      "Black coffee",
      "Milk tea",
      "Soda"
    ],

    correct: 0
  }

];


/* ==================== SCREEN CONTROL ==================== */

function show(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  const target =
    document.getElementById(id);


  if (target) {

    target.classList.add("active");

  }

}


/* ==================== START ==================== */

function startGame() {

  show("map");

  document.getElementById(
    "questText"
  ).textContent =
    "Explore our memories ♡";

}


/* ==================== LOCATION ==================== */

function openLocation(type) {

  completed.add(type);

  updateProgress();


  /* -------- 2020 -------- */

  if (type === "start") {

    popup(`

      <h2>🌸 2020</h2>

      <p>
        This is where our little story started.
      </p>

      <p>
        Two random people meeting on Tinder...
        and somehow it eventually became us. 😭
      </p>

      <p>
        Funny how one tiny conversation can
        lead to so many memories.
      </p>

    `);

  }


  /* -------- FIRST MEET -------- */

  if (type === "meet") {

    popup(`

      <h2>🏸 October 6, 2021</h2>

      <p>
        Badminton court
      </p>

      <p>
        I remember being so nervous
        meeting you for the first time. 😭
      </p>

      <p>
        And then somehow that nervous little
        day became one of my favorite memories.
      </p>

    `);

  }


  /* -------- OCTOBER 15 -------- */

  if (type === "anniv") {

    popup(`

      <h2>💗 October 15, 2021</h2>

      <p>
        The day we decided that we wanted
        to make things work.
      </p>

      <p>
        We talked, opened up, and decided
        to give us another chance.
      </p>

      <p>
        And now somehow...
        five years later. 🥹
      </p>

    `);

  }


  /* -------- KAI -------- */

  if (type === "kai") {

    popup(`

      <h2>☕ Kai's Corner</h2>

      <p>
        Funny. Goofy. Calm.
        Romantic. Patient.
      </p>

      <p>
        Good listener.
        Good at gaming.
        And somehow hilariously bad
        at remembering dates sometimes. 😭
      </p>

      <p>
        Favorite game:
        PUBG or Any Shooting Games 🎮
      </p>

      <p>
        Coffee:
        black coffee
      </p>

      <p>
        Wardrobe:
        mostly black, white, and grey.
      </p>

    `);

  }


  /* -------- MEMORIES -------- */

  if (type === "memories") {

    closePopup();

    show("memories");

  }


  /* -------- QUIZ -------- */

  if (type === "quiz") {

    closePopup();

    show("quiz");

    currentQuestion = 0;

    loadQuiz();

  }

}


/* ==================== POPUP ==================== */

function popup(content) {

  document.getElementById(
    "popupContent"
  ).innerHTML = content;


  document.getElementById(
    "popup"
  ).classList.add("show");

}


function closePopup() {

  document.getElementById(
    "popup"
  ).classList.remove("show");

}


/* ==================== PROGRESS ==================== */

function updateProgress() {

  document.getElementById(
    "progress"
  ).textContent =
    `${completed.size} / 6`;


  if (completed.size >= 6) {

    document.getElementById(
      "questText"
    ).textContent =
      "✦ FINAL MEMORY UNLOCKED ✦";


    setTimeout(() => {

      show("letter");

      typeLetter();

    }, 500);

  }

}


/* ==================== QUIZ ==================== */

function loadQuiz() {

  const question =
    document.getElementById(
      "question"
    );

  const answers =
    document.getElementById(
      "answers"
    );


  if (currentQuestion >= quiz.length) {

    question.textContent =
      "YOU MADE IT ♡";


    answers.innerHTML = `

      <p>
        Okay... you actually remember things. 😭
      </p>

      <button
        class="answer"
        onclick="finishQuiz()"
      >
        CONTINUE ♡
      </button>

    `;

    return;

  }


  const q =
    quiz[currentQuestion];


  question.textContent =
    q.question;


  answers.innerHTML = "";


  document.getElementById(
    "quizResult"
  ).textContent = "";


  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer";


      button.textContent =
        answer;


      button.onclick =
        () => answerQuestion(index);


      answers.appendChild(
        button
      );

    }
  );

}


/* ==================== ANSWERS ==================== */

function answerQuestion(index) {

  const q =
    quiz[currentQuestion];


  const result =
    document.getElementById(
      "quizResult"
    );


  if (index === q.correct) {

    result.textContent =
      "Correct 😭💗";


    currentQuestion++;


    setTimeout(() => {

      loadQuiz();

    }, 700);


  } else {

    result.textContent =
      "Nope 😭 try again.";

  }

}


/* ==================== FINISH QUIZ ==================== */

function finishQuiz() {

  completed.add("quiz");

  updateProgress();

  show("map");

}


/* ==================== FINAL LETTER ==================== */

const letter = `
Five years already, baby.

That's actually crazy. 😭
Five whole years of us.

We've changed a lot,
gone through so much,
made so many memories,
and somehow, through everything,
we're still here.

When I think about how much we've grown
since we first started, it honestly makes me emotional.
We've seen different sides of each other,
we've had good days and bad days,
we've laughed together, cried together,
and had our fair share of moments,
but through all of it, you’re still the person
I want beside me.

One of the things I appreciate most
about us is how we've learned
to understand each other.

We're not perfect,
and we definitely have our moments,
but through the years,
I've learned so much about patience,
understanding, forgiveness, and really listening.

I've noticed all the effort you've put into us, baby —
every little thing, even the things
you probably thought I didn't notice.
I see them. I appreciate them.
And I hope you know how much they mean to me.

Thank you for being patient with me,
for listening to me,
for trying to understand me,
and for making me feel safe enough
to open up little by little.

Thank you for loving me through
the different versions of myself.
For staying when things weren't always easy.
For making me laugh when I needed it,
for being someone I can come home to,
and for making me feel loved in so many little ways.

I don't think I say it enough,
but I’m really, really grateful for you, baby.
Out of all the people in this world,
I'm so lucky that I get to love you
and that I get to be loved by you.

I hope the understanding,
forgiveness, and love we've built over these five years
never change. I hope that as we continue to grow,
we'll keep learning each other,
keep choosing each other,
and keep making a home in each other's hearts.

I don't know what the next years will bring,
but I know I want to experience them with you.
More memories, more laughter, more random moments,
more adventures, more growing together,
and even more years of us.

I love you so, so much, baby.
More than I could ever properly put into words. 🤍
Thank you for these five beautiful years
and for being you.

Cheers to us, baby.
To five years down and hopefully
so, so many more to go. 🥹❤️

Happy 5 years, my love! ♡

- Shy ❤️

`;


/* ==================== TYPEWRITER ==================== */

function typeLetter() {

  const element =
    document.getElementById(
      "letterText"
    );


  element.textContent = "";


  let i = 0;


  const interval =
    setInterval(() => {

      element.textContent +=
        letter[i];

      i++;


      if (i >= letter.length) {

        clearInterval(
          interval
        );

      }

    }, 25);

}