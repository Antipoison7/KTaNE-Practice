document.getElementById("submitButton").addEventListener("click", isCorrect);
document.getElementById("arrow").addEventListener("click", rotateKnob);
let arrowDir = 0;

function isCorrect()
{
    console.log("Right");
}

function generateProblem()
{

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