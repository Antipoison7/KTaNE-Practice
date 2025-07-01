let roundLength = document.getElementById("roundNum").value;
let serial = "";
let batteries = 0;
let port = false;
let modules = [];

//TODO: Update possibleCombinations to dynamically create the answer: field

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
		star: false,
		answer: "Cut"
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: false,
		star: true,
		answer: "Cut"
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: true,
		star: false,
		answer: "Dont"
	},
	{
		primary_colour: "White",
		secondary_colour: false,
		led: true,
		star: true,
		answer: "Bat"
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: false,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: false,
		star: true,
		answer: "Cut"
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: true,
		star: false,
		answer: "Bat"
	},
	{
		primary_colour: "Red",
		secondary_colour: false,
		led: true,
		star: true,
		answer: "Bat"
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: false,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: false,
		star: true,
		answer: "Cut"
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: true,
		star: false,
		answer: "Bat"
	},
	{
		primary_colour: "Red",
		secondary_colour: "White",
		led: true,
		star: true,
		answer: "Bat"
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: false,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: false,
		star: true,
		answer: "Dont"
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: true,
		star: false,
		answer: "Port"
	},
	{
		primary_colour: "Blue",
		secondary_colour: false,
		led: true,
		star: true,
		answer: "Port"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: false,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: false,
		star: true,
		answer: "Dont"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: true,
		star: false,
		answer: "Port"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "White",
		led: true,
		star: true,
		answer: "Port"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: false,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: false,
		star: true,
		answer: "Port"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: true,
		star: false,
		answer: "Serial"
	},
	{
		primary_colour: "Blue",
		secondary_colour: "Red",
		led: true,
		star: true,
		answer: "Dont"
	}
];

function isEven(number){
	if(number == 0){
		return true
	}
	else if(number%2){
		return false;
	}
	else{
		return true;
	}
}

function solveProblem(inputProblem){
	if(inputProblem.primary_colour === "White"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.cutState = (batteries >= 2);
			}
			else{
				inputProblem.cutState = false;
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.cutState = true;
			}
			else{
				inputProblem.cutState = true;
			}
		}
	}
	else if(inputProblem.primary_colour === "Blue" && inputProblem.secondary_colour === "Red"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.cutState = false;
			}
			else{
				inputProblem.cutState = isEven(serial.substr(serial.length-1));
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.cutState = port;
			}
			else{
				inputProblem.cutState = isEven(serial.substr(serial.length-1));
			}
		}
	}
	else if(inputProblem.primary_colour === "Red"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.cutState = (batteries >= 2);
			}
			else{
				inputProblem.cutState = (batteries >= 2);
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.cutState = true;
			}
			else{
				inputProblem.cutState = isEven(serial.substr(serial.length-1));
			}
		}
	}
	else if(inputProblem.primary_colour === "Blue"){
		if(inputProblem.led){
			if(inputProblem.star){
				inputProblem.cutState = port;
			}
			else{
				inputProblem.cutState = port;
			}
		}
		else{
			if(inputProblem.star){
				inputProblem.cutState = false;
			}
			else{
				inputProblem.cutState = isEven(serial.substr(serial.length-1));
			}
		}
	}
}

function generateProblems(problemCount){
	modules = [];

	for(let i = 0; i < problemCount; i++){
		let randomWire = getRand(possibleCombinations) 
		
		solveProblem(randomWire);

		modules.push(randomWire);
	}

	console.log(modules);
}

function renderOption(option){
	let newWire = document.createElement("div");
	newWire.classList.add("wire-line");
	
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
	modules.forEach((e)=>{
		renderOption(e);
	});
}

init();

generateProblems(roundLength);

loadProblems();

