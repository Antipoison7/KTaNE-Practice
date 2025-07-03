let roundLength = document.getElementById("roundNum").value;
let attempts = [];
let serial = "";
let batteries = 0;
let port = false;
let wires = [];


document.getElementById("roundNum").addEventListener("input", ()=>{
	roundLength = document.getElementById("roundNum").value;
	init();
	generateProblems(roundLength);
	loadProblems();
});

const possibleCombinations = [
	{
		primary_colour: "White",
		secondary_colour: false,
		led: false,
		star: false
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: false,
		star: true
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: true,
		star: false
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: true,
		star: true
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: false,
		star: false
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: false,
		star: true
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: true,
		star: false
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: true,
		star: true
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: false,
		star: false
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: false,
		star: true
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: true,
		star: false
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: true,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: false,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: false,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: true,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: true,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: false,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: false,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: true,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: true,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: false,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: false,
		star: true
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: true,
		star: false
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: true,
		star: true
	}
];

// Sets parameters in the wire input depending on if it should be cut or not
function solveProblem(inputProblem){
	if(inputProblem.primary_colour === "White"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.answer = "Bat";
				inputProblem.cutState = (batteries >= 2);
				inputProblem.solved = !(batteries >= 2);
				inputProblem.correct = !(batteries >= 2);
			}
			else{
				inputProblem.answer = "Dont";
				inputProblem.cutState = false;
				inputProblem.solved = true;
				inputProblem.correct = true;
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.answer = "Cut";
				inputProblem.cutState = true;
				inputProblem.solved = false;
				inputProblem.correct = false;
			}
			else{
				inputProblem.answer = "Cut";
				inputProblem.cutState = true;
				inputProblem.solved = false;
				inputProblem.correct = false;
			}
		}
	}
	else if(inputProblem.primary_colour === "Blue" && inputProblem.secondary_colour === "Red"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.answer = "Dont";
				inputProblem.cutState = false;
				inputProblem.solved = true;
				inputProblem.correct = true;
			}
			else{
				inputProblem.answer = "Serial";
				inputProblem.cutState = !(serial.substr(serial.length-1)%2);
				inputProblem.solved = (serial.substr(serial.length-1)%2);
				inputProblem.correct = (serial.substr(serial.length-1)%2);
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.answer = "Port";
				inputProblem.cutState = port;
				inputProblem.solved = !port;
				inputProblem.correct = !port;
			}
			else{
				inputProblem.answer = "Serial";
				inputProblem.cutState = !(serial.substr(serial.length-1)%2);
				inputProblem.solved = (serial.substr(serial.length-1)%2);
				inputProblem.correct = (serial.substr(serial.length-1)%2);
			}
		}
	}
	else if(inputProblem.primary_colour === "Red"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.answer = "Bat";
				inputProblem.cutState = (batteries >= 2);
				inputProblem.solved = !(batteries >= 2);
				inputProblem.correct = !(batteries >= 2);
			}
			else{
				inputProblem.answer = "Bat";
				inputProblem.cutState = (batteries >= 2);
				inputProblem.solved = !(batteries >= 2);
				inputProblem.correct = !(batteries >= 2);
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.answer = "Cut";
				inputProblem.cutState = true;
				inputProblem.solved = false;
				inputProblem.correct = false;
			}
			else{
				inputProblem.answer = "Serial";
				inputProblem.cutState = !(serial.substr(serial.length-1)%2);
				inputProblem.solved = (serial.substr(serial.length-1)%2);
				inputProblem.correct = (serial.substr(serial.length-1)%2);
			}
		}
	}
	else if(inputProblem.primary_colour === "Blue"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.answer = "Port";
				inputProblem.cutState = port;
				inputProblem.solved = !port;
				inputProblem.correct = !port;
			}
			else{
				inputProblem.answer = "Port";
				inputProblem.cutState = port;
				inputProblem.solved = !port;
				inputProblem.correct = !port;
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.answer = "Dont";
				inputProblem.cutState = false;
				inputProblem.solved = true;
				inputProblem.correct = true;
			}
			else{
				inputProblem.answer = "Serial";
				inputProblem.cutState = !(serial.substr(serial.length-1)%2);
				inputProblem.solved = (serial.substr(serial.length-1)%2);
				inputProblem.correct = (serial.substr(serial.length-1)%2);
			}
		}
	}
}

function generateProblems(problemCount){
	wires = [];

	for(let i = 0; i < problemCount; i++){
		let randomWire = getRand(possibleCombinations) 
		
		solveProblem(randomWire);

		wires.push(randomWire);
	}

	console.log(wires);
}

function isDefused(){
	let defused = true;

	wires.forEach((e)=>{
		if(!e.solved){
			defused = false;
		}
	});

	return defused;
}

function cutWire(index){
	if(wires[index].cutState){
		document.getElementById("Wire" + index).classList.add("rightCut");
		wires[index].solved = true;
		wires[index].correct = true;
	}
	else{
		document.getElementById("Wire" + index).classList.add("wrongCut");
		wires[index].solved = true;
		wires[index].correct = false;
	}

	if(isDefused()){
		attempts.push(wires);
		alert("Bomb Defused");
	}
}


function renderOption(option, index){
	let newWire = document.createElement("div");
	newWire.classList.add("wire-line");
	newWire.id = "Wire"+index;
	newWire.onclick = () => {
		cutWire(index);
	};
	
	let wireColour = "";

	// Why did I not do this in a better way? Idk, but I will just live with this now
	if(option.secondary_colour){
		wireColour = (option.primary_colour.substring(0,1).toLowerCase()) + (option.secondary_colour.substring(0,1).toLowerCase());
	}
	else{
		wireColour = (option.primary_colour.substring(0,1).toLowerCase());
	}

	newWire.innerHTML = `
	<div class="light ${option.led? " lit": " extinguished"}"></div>
	<div class="wire ${wireColour}"></div>
	<div class="star ${option.star? "star-active":""}">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
			<path
				d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
		</svg>
	</div>
	`;

	document.getElementById("moduleBody").append(newWire);
}

function createSerial(){
	serial = generateSerial();
	document.getElementById("seri").innerHTML = serial;
}

function generateBatteries(){
	batteries = batteryCount();
	document.getElementById("batts").innerHTML = batteries;
}

function generatePort(){
	port = parralelPort();
	document.getElementById("parr").innerHTML = port;
}

function clearModule(){
	document.getElementById("moduleBody").innerHTML = "";
}

function init(){
	clearModule();
	createSerial();
	populateWidgets();
	generateBatteries();
	generatePort();
}

function loadProblems(){
	wires.forEach((e, index)=>{
		renderOption(e, index);
	});
}

function startup(){
	// Clears out all the modules and generates the bomb widgets such as ports and sets the local values for the battery displays
	init();

	// Populates the modules array with problems specified in the input field
	generateProblems(roundLength);

	// Renders the wires described in the modules array
	loadProblems();

	// If the bomb is already solved, run the function again until a valid wire setup occurs
	if(isDefused()){
		console.log("Already solved, reloading");
		startup();
	}
}

startup();
