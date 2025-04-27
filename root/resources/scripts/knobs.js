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

    if(arrowDir <4)
    {
        arrowDir++;
    }
    else
    {
        arrowDir = 0;
    }

    arrow.style.transform = "rotate("+(arrowDir*90)+"deg)";
}