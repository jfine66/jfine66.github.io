const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
    question: "What does HTML stand for?",
    answers: {
      a: "Herny The Money Lender",
      b: "Hypertext-Markup Language",
      c: "Hypertext-Markup Loader"
    },
    correctAnswer: "b"
  },
  {
    question: "What must be at the top of every HTML Document",
    answers: {
      a: "&lt;!DOCTYPE html&gt;",
      b: "&lt;!Doctype html&gt;",
      c: "&lt;!DOCTYPE html5&gt;"
    },
    correctAnswer: "a"
  },
  {
    question: "The br tag, img tag and hr tag are known as what?",
    answers: {
      a: "HTML elements",
      b: "Empty elements",
      c: "HTML tags",
      d: "Content elements"
    },
    correctAnswer: "b"
    },
    {
        question: "How many headings are there?",
        answers: {
            a: "Five",
            b: "Seven",
            c: "Six"
        }, 
        correctAnswer: "c"
    },
    {
        question: "Which one of these would create a working link?",
        answers: {
            a: "&lt;link href='www.reddit.com'&gt;Reddit&lt;/link&gt;",
            b: "&lt;a&gt;Reddit&lt;/a&gt;",
            c: "&lt;a href='www.reddit.com'&gt;Reddit&lt;/a&gt;"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you write a comment in HTML?",
        answers: {
            a: "//This is a comment",
            b: "&lt;!--This is a comment--&gt;",
            c: "/*This is a comment*/"
        }, 
        correctAnswer: "b"
    },
    {
        question: "What are the two attributes that an image element must have?",
        answers: {
            a: "src & alt",
            b: "width & height",
            c: "style & lang"
        },
        correctAnswer: "a"
    },
    {
        question: "True or False: HTML respects whitespace.",
        answers: {
            a: "True",
            b: "False"
        }, 
        correctAnswer: "b"
    },
    {
        question: "What attribute is needed to make a link open in a new window/tab",
        answers: {
            a: "target='_blank'",
            b: "target='_self'",
            c: "target='_parent'",
            d: "target='_top'"
        },
        correctAnswer: "a"
    },
    {
        question: "What are div's used for?",
        answers: {
            a: "To cotain images",
            b: "To make images links",
            c: "As a general container",
            d: "To divide your page"
        },
        correctAnswer: "c"
    },
    {
        question: "What are all elements of an HTML table",
        answers: {
            a: "table, th, td, tr",
            b: "table, theader, tcol",
            c: "table, caption, trow",
            d: "table-border, col, row"
        },
        correctAnswer: "a"
    },
    {
        question: "What are the three types of list in HTML?",
        answers: {
            a: "small list, table list, element list",
            b: "unordered-list, ordered-list, description-list",
            c: "heading-list, div-list, list-items"
        },
        correctAnswer: "b"
    },
    {
        question: "What element must be used inside of list?",
        answers: {
            a: "none",
            b: "list item element",
            c: "numbered element",
            d: "list style"
        }, 
        correctAnswer: "b"
    }
];

function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers
            const answers = [];

            // and for each avaiilable answer...
            for(letter in currentQuestion.answers){
                //... add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                    <br>`
                );
            }

            //add this question and its answer to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')}</div>`
            );
        }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    //gather answer container from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answer
    let numCorrect = 0;

    //for each question...
    myQuestions.forEach((currentQuestion, questionNumber) =>
    {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            //add to the number of correct answer
            numCorrect++;

            //color the answer green
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
           //color the answer red
           answerContainers[questionNumber].style.color = 'red'; 
        }
    });
    //show number of correctt answer out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

//display quiz right away
buildQuiz();

//on sumbit, show results
submitButton.addEventListener('click', showResults);

