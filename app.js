let submit = document.getElementById("submit");
let title = document.getElementById("title");
//let firstForm = document.getElementById("firstForm");
let inputs = document.getElementsByTagName("input");
let labels = document.getElementsByTagName("label");
let container = document.getElementById("container");
let form = document.querySelector("form");

let reload = document.getElementById("reload");

let quizQuestionContainer = document.getElementById("quizQuestionContainer");

submit.addEventListener("click", nextQuestion);

let secondArrayOfIDandFor = [
  "centralstylesheets",
  "cascadingstylesheets",
  "cascadingsimplesheets",
  "carssuvssailboats",
];

let arrayOfLabels2 = [
  "Central Style Sheets",
  "Cascading Style Sheets",
  "Cascading Simple Sheets",
  "Cars SUVs Sailboats",
];

let thirdArrayOfIdandFor = [
  "hypertextmarkuplanguage",
  "hypertextmarkdownlanguage",
  "hyperloopmachinelanguage,",
  "helicoptersterminalsmotorboatslamborginis",
];

let arrayOfLabels3 = [
  "Hypertext Markup Language",
  "Hypertext Markdown Language",
  "Hyperloop Machine Language",
  "Helicopters Terminals Motorboats Lamborginis",
];

let fourthArrayOfIdandFor = ["1996", "1995", "1994", "noneoftheabove"];

let arrayOfLabels4 = ["1996", "1995", "1994", "none of the above"];

let count = 0;

let x = "firstQuestion";

let numberCorrect = 0;

console.log([...inputs]);

[...inputs].forEach(function (element) {
  element.addEventListener("click", buttonsClicked);
});

function buttonsClicked() {
  console.log("hello");
  submit.style.backgroundColor = "rgb(143, 67, 173)";
}

function nextQuestion() {
  let checked = document.querySelector("input[name=" + x + "]:checked");

  /*   console.log(checked);
  console.log(x);
  console.log(count); */

  if (checked != null) {
    if (
      checked.id == "javascript" ||
      checked.id == "cascadingstylesheets" ||
      checked.id == "hypertextmarkuplanguage" ||
      checked.id == "1995"
    ) {
      numberCorrect++;
    }
  }

  if (checked != null) {
    submit.style.backgroundColor = "purple";

    count = count + 1;

    if (count == 1) {
      x = "secondQuestion";
      title.innerHTML = "What does CSS stand for?";
      title.style.marginBottom = "10px";
      container.style.height = "400px";

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
        inputs[i].setAttribute("id", secondArrayOfIDandFor[i]);
        inputs[i].setAttribute("name", "secondQuestion");
        //console.log(inputs[i]);
      }

      for (let i = 0; i < labels.length; i++) {
        labels[i].setAttribute("for", secondArrayOfIDandFor[i]);
        labels[i].innerHTML = arrayOfLabels2[i];
        //console.log(labels[i]);
      }
    }

    if (count == 2) {
      x = "thirdQuestion";
      title.innerHTML = "What does HTML stand for?";
      title.style.marginBottom = "0px";

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
        inputs[i].setAttribute("id", thirdArrayOfIdandFor[i]);
        inputs[i].setAttribute("name", "thirdQuestion");
      }

      for (let i = 0; i < labels.length; i++) {
        labels[i].setAttribute("for", thirdArrayOfIdandFor[i]);
        labels[i].innerHTML = arrayOfLabels3[i];
      }
    }

    if (count == 3) {
      x = "fourthQuestion";

      title.innerHTML = "What year was Javascript launched?";
      title.style.marginBottom = "0px";
      title.style.paddingLeft = "15px";
      title.style.paddingRight = "15px";
      quizQuestionContainer.style.paddingBottom = "100px";

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
        inputs[i].setAttribute("id", fourthArrayOfIdandFor[i]);
        inputs[i].setAttribute("name", "fourthQuestion");
      }

      for (let i = 0; i < labels.length; i++) {
        labels[i].setAttribute("for", fourthArrayOfIdandFor[i]);
        labels[i].innerHTML = arrayOfLabels4[i];
      }
    }

    if (count == 4) {
      count = 0;
      x = "firstQuestion";

      //title.style.display = "none";
      container.style.height = "75px";
      title.style.marginTop = "0px";
      container.style.paddingTop = "10px";
      quizQuestionContainer.style.paddingTop = "10px";
      quizQuestionContainer.style.paddingLeft = "30px";
      quizQuestionContainer.style.paddingRight = "30px";

      submit.style.display = "none";
      reload.style.display = "unset";

      //console.log("You answered " + numberCorrect + "/4 questions correctly");

      title.innerHTML =
        "You answered " + numberCorrect + "/4 questions correctly";

      numberCorrect = 0;

      //console.log(numberCorrect);

      /*  for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
        inputs[i].setAttribute("id", fourthArrayOfIdandFor[i]);
        inputs[i].setAttribute("name", "firstQuestion");
        console.log(inputs[i]);
      }

      for (let i = 0; i < labels.length; i++) {
        labels[i].style.display = "none";
        labels[i].setAttribute("for", fourthArrayOfIdandFor[i]);
        labels[i].innerHTML = arrayOfLabels4[i];
      } */
    }
  }
}

reload.addEventListener("click", backtoFirstQuestion);

let firstArrayOfIdandFor = ["java", "c", "python", "javascript"];
let arrayOfLabels1 = ["Java", "C", "Python", "Javascript"];

function backtoFirstQuestion() {
  submit.style.display = "unset";
  reload.style.display = "none";

  container.style.height = "425px";
  quizQuestionContainer.style.padding = "75px";

  title.innerHTML = "What language runs in a web browser?";

  submit.style.backgroundColor = "rgb(143, 67, 173)";

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
    inputs[i].setAttribute("id", firstArrayOfIdandFor[i]);
    inputs[i].setAttribute("name", "firstQuestion");
    console.log("this works");
  }

  for (let i = 0; i < labels.length; i++) {
    console.log("this works");
    labels[i].setAttribute("for", firstArrayOfIdandFor[i]);
    labels[i].innerHTML = arrayOfLabels1[i];
  }
}
