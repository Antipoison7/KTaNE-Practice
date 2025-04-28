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
    prevAttempts.push(
        {
            index: prevAttempts.length,
            inputDir: arrowDir,
            correctDir: currAnswer,
            problem: currProblem
        });

    showAnswers();

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

function closeExplanation()
{
    let popup = document.getElementById("explainBox");   
    popup.innerHTML = "";
}

function showExplanation(indexVal)
{
    let popup = document.getElementById("explainBox");
    let popupContent = "";

    const success = (prevAttempts[indexVal].inputDir == prevAttempts[indexVal].correctDir)?"Correct": "Incorrect";
    let selectedAnswer = "";

    switch(prevAttempts[indexVal].inputDir)
        {
            case 0:
                selectedAnswer = "Up";
                break;

            case 1:
                selectedAnswer = "Right";
                break;

            case 2:
                selectedAnswer = "Down";
                break;

            case 3:
                selectedAnswer = "Left";
                break;
        }

        console.log(selectedAnswer);


    switch(prevAttempts[indexVal].correctDir)
    {
        case 0:
            popupContent = `<div class="away"><h3>${success}</h3> <h3 style="cursor: pointer;" onclick="closeExplanation()">x</h3></div>
            <h4>Your Answer: ${selectedAnswer}</h4>
            <h4>Correct Answer: Up</h4>
            <p>The knob should be positioned Up if the 4th LED on the top is not lit (Right), the top row is not clear ignoring LED 5 (Left) and there is a horisontal pair of LEDs on the right side on either the top or bottom.</p>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                </div>
            </div>`;
            break;

            case 1:
            popupContent = `<div class="away"><h3>${success}</h3> <h3 style="cursor: pointer;" onclick="closeExplanation()">x</h3></div>
            <h4>Your Answer: ${selectedAnswer}</h4>
            <h4>Your Answer: Right</h4>
            <h4>Correct Answer: Right</h4>
            <p>The knob should be positioned right if the 4th LED on the top row is lit</p>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>`;
            break;

            case 2:
            popupContent = `<div class="away"><h3>${success}</h3> <h3 style="cursor: pointer;" onclick="closeExplanation()">x</h3></div>
            <h4>Your Answer: ${selectedAnswer}</h4>
            <h4>Your Answer: Down</h4>
            <h4>Correct Answer: Down</h4>
            <p>The knob should be positioned Down if the 4th LED on the top is not lit, the top row does not match being entirely off except for LED 5, there is no 2 wide horisontal pair on the right side of either the top or bottom. Basically, if it does not match any other configuration, select down.</p>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>
            <div class="lightBox">
                <div class="answerContainer">
                <div class="highlightContainer">
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light lit" style="position: relative;"></div>
                    <div class="light  extinguished" style="position: relative;"></div>
                </div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>
            <div class="lightBox">
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <span class="highlightContainer">
                        <div class="light lit" style="position: relative;"></div>
                        <div class="light lit" style="position: relative;"></div>
                    </span>
                </div>
            </div>`;
            break;

            case 3:
            popupContent = `<div class="away"><h3>${success}</h3> <h3 style="cursor: pointer;" onclick="closeExplanation()">x</h3></div>
            <h4>Your Answer: ${selectedAnswer}</h4>
            <h4>Your Answer: Left</h4>
            <h4>Correct Answer: Left</h4>
            <p>The knob should be positioned left if all LEDs on the top row are off except for one in the 5th position</p>
            <div class="lightBox">
                <div class="answerContainer">
                <div class="highlightContainer">
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light extinguished" style="position: relative;"></div>
                    <div class="light lit" style="position: relative;"></div>
                    <div class="light  extinguished" style="position: relative;"></div>
                </div>
                </div>
                <div class="answerContainer">
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                    <div class="light" style="position: relative;"></div>
                </div>
            </div>`;
            break;
    }
        

    popup.innerHTML = popupContent;
}

function showAnswers()
{
    let divBox = document.getElementById("prevAttempts");

    let innerString = "";

    let flipArray = prevAttempts.map(obj => ({...obj, index: obj.index, inputDir: obj.inputDir, correctDir: obj.correctDir, problem: obj.problem}));
    flipArray.reverse();

    flipArray.forEach(element => {
        innerString += "<li class=\"" + ((element.inputDir == element.correctDir)? "correctAnsw": "falseAnsw") + "\" onclick=\"showExplanation(" + element.index + ")\" style=\"cursor: pointer;\">";

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