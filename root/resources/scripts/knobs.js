document.getElementById("submitButton").addEventListener("click", isCorrect);
document.getElementById("arrow").addEventListener("click", rotateKnob);
let arrowDir = 0;
let currAnswer = 0;
let currProblem = 0;
let numberOfSolves = 0;
let prevAttempts = [];

generateProblem();

function isCorrect()
{
    prevAttempts.unshift(
        {
            index: prevAttempts.length,
            inputDir: arrowDir,
            correctDir: currAnswer,
            problem: currProblem
        });

    showAnswers();

    if(arrowDir == currAnswer)
        {
            console.log("Correct");
        }
    else
    {
        console.log("exploded: " + currAnswer + "Your Answer: " + arrowDir);
    }

    numberOfSolves++;

    if((numberOfSolves >= document.getElementById("rotateNum").value)&&(document.getElementById("rotateNum").value != 0))
    {
        rotateFace();
        numberOfSolves = 0;
    }

    generateProblem();
}

function generateProblem()
{
    let problems = listAllProblems();
    let currProblem = problems[Math.floor(Math.random()*problems.length)]
    let combinedLEDs = currProblem.topRow.concat(currProblem.bottomRow);

    currAnswer = currProblem.solve;

    let lights = [];

    lights.push(document.getElementById("light1"));
    lights.push(document.getElementById("light2"));
    lights.push(document.getElementById("light3"));
    lights.push(document.getElementById("light6"));
    lights.push(document.getElementById("light5"));
    lights.push(document.getElementById("light4"));
    lights.push(document.getElementById("light7"));
    lights.push(document.getElementById("light8"));
    lights.push(document.getElementById("light9"));
    lights.push(document.getElementById("light12"));
    lights.push(document.getElementById("light11"));
    lights.push(document.getElementById("light10"));

    let counter = 0;
    for(let element of lights) {
        if(combinedLEDs[counter] == 1)
        {
            element.classList.add("lit");
            element.classList.remove("extinguished");
        }
        else
        {
            element.classList.remove("lit");
            element.classList.add("extinguished");
        }
        counter++;
    };
}

function showExplanation(indexVal)
{
    if(prevAttempts[indexVal].inputDir == prevAttempts[indexVal].correctDir)
    {
        
    }
    else
    {

    }
}

function showAnswers()
{
    let divBox = document.getElementById("prevAttempts");

    let innerString = "";

    let flipArray = prevAttempts.map(obj => ({...obj, index: obj.index, inputDir: obj.inputDir, correctDir: obj.correctDir, problem: obj.problem}));
    flipArray;

    flipArray.forEach(element => {
        innerString += "<li class=\"" + ((element.inputDir == element.correctDir)? "correctAnsw": "falseAnsw") + "\" onclick=\"showExplanation(" + element.index + ")\">";

        innerString += "Your Answer: ";

        switch (element.inputDir)
        {
            case 0:
                innerString += "Up";
                break;
            case 1:
                innerString += "Right";
                break;
            case 2:
                innerString += "Down";
                break;
            case 3:
                innerString += "Left";
                break;
        }

        innerString += " Correct Answer: ";

        switch (element.correctDir)
        {
            case 0:
                innerString += "Up";
                break;
            case 1:
                innerString += "Right";
                break;
            case 2:
                innerString += "Down";
                break;
            case 3:
                innerString += "Left";
                break;
        }

        innerString += "</li>";
    });

    divBox.innerHTML = innerString;
}

function rotateKnob()
{
    const arrow = document.getElementById("arrow");

    if(arrowDir <3)
    {
        arrowDir++;
    }
    else
    {
        arrowDir = 0;
    }

    arrow.style.transform = "rotate("+(arrowDir*90)+"deg)";
}

function rotateFace()
{
    document.getElementById("arrowContainer").style.transform = "rotate(" + (Math.floor(Math.random() * 4)*90) + "deg)";
}

function listAllProblems()
{
    let problemArr = [];

    // Up
    problemArr.push({solve: 0, topRow: [0,0,1,0,1,1], 
                            bottomRow: [1,1,1,1,0,1]});

    problemArr.push({solve: 0, topRow: [1,0,1,0,1,0], 
                            bottomRow: [0,1,1,0,1,1]});
    // Right
    problemArr.push({solve: 1, topRow: [1,0,1,1,1,1], 
                            bottomRow: [1,1,1,0,1,0]});

    problemArr.push({solve: 1, topRow: [1,0,1,1,0,0], 
                            bottomRow: [1,1,1,0,1,0]});

    // Down
    problemArr.push({solve: 2, topRow: [0,1,1,0,0,1], 
                            bottomRow: [1,1,1,1,0,1]});

    problemArr.push({solve: 2, topRow: [1,0,1,0,1,0], 
                            bottomRow: [0,1,0,0,0,1]});

    // Left
    problemArr.push({solve: 3, topRow: [0,0,0,0,1,0], 
                            bottomRow: [1,0,0,1,1,1]});

    problemArr.push({solve: 3, topRow: [0,0,0,0,1,0], 
                            bottomRow: [0,0,0,1,1,0]});

    return(problemArr);
}