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

// Generates wires depending on the number specified in the input roundNum/roundCount
function generateProblems(problemCount){
	wires = [];

	for(let i = 0; i < problemCount; i++){
		let randomWire = getRand(possibleCombinations) 
		
		solveProblem(randomWire);

		wires.push(randomWire);
	}

	//console.log(wires);
}

// Checks each wire in the wires array to see if the module is defused
function isDefused(){
	let defused = true;

	wires.forEach((e)=>{
		if(!e.solved){
			defused = false;
		}
	});

	return defused;
}

// Function that checks to see if cutting the wire was the correct answer and runs something if the module is defused
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
		saveAttempt();
		startup();
	}
}

// Functions that handle the attempts
// Saves attempts and then calls the function to render them
function saveAttempt(){
	attempts.push(wires);
	renderAttempts();
	//console.log("Attempts", attempts);
}

// Renders the attempts into a div with text that expands to a full page display on click
function renderAttempts(){
	const attemptBox = document.getElementById("prev-attempts");
	attemptBox.innerHTML = "";

	attempts.forEach((attempt, index)=>{
		//console.log("Written", index);

		// Generates the outer div as well as the text and fullscreen overlay
		const newAttempt = document.createElement("div");
		newAttempt.classList.add("attempt");
		const newText = document.createElement("p");
		const titleText = document.createElement("p");
		const attemptOverlay = document.createElement("div");

		newText.innerText = `Attempt ${index+1}: ${countSuccess(attempt)}/${attempt.length}`;
		newText.onclick = () => {showToggle(index)};
		titleText.innerText = `Attempt ${index+1}: ${countSuccess(attempt)}/${attempt.length}`;
		newAttempt.append(newText);

		attemptOverlay.classList.add("attempt-display");
		attemptOverlay.classList.add("displayNone");
		attemptOverlay.id = "attempt" + index;

		// Generate the header for the overlay
		const attemptHeader = document.createElement("div");
		const closeButton = document.createElement("p");
		closeButton.classList.add("close-button");
		closeButton.onclick = () => {showToggle(index)};
		closeButton.innerText = "X";
		attemptHeader.classList.add("attempt-header");
		attemptHeader.append(titleText);
		attemptHeader.append(closeButton);

		attemptOverlay.append(attemptHeader);

		// Generate the table for the attempt
		const table = document.createElement("table");
		const tableHead = document.createElement("tr");

		const th1 = document.createElement("th");
		th1.innerText = "Correct Answer";
		tableHead.append(th1);
		const th2 = document.createElement("th");
		th2.innerText = "Your Answer";
		tableHead.append(th2);
		const th3 = document.createElement("th");
		th3.innerText = "Description";
		tableHead.append(th3);
		const th4 = document.createElement("th");
		th4.innerText = "Cut Type";
		tableHead.append(th4);
		table.append(tableHead);

		attempt.forEach((wire)=>{
			const tableRow = document.createElement("tr");
			const correct = document.createElement("td");
			const your = document.createElement("td");
			const description = document.createElement("td");
			const type = document.createElement("td");

			correct.innerHTML = wire.cutState? "Cut" : "Don't Cut";

			your.innerHTML = wire.correct? wire.cutState? "<span class=\"correct-text\">Cut</span>" : "<span class=\"correct-text\">Not Cut</span>" : !wire.cutState? "<span class=\"incorrect-text\">Cut</span>" : "<span class=\"incorrect-text\">Not Cut</span>";

			let descriptionString = "";

			if(wire.primary_colour === "Red"){
				descriptionString += "<span class=\"red-text\">";
			}
			else if(wire.primary_colour === "Blue"){
				descriptionString += "<span class=\"blue-text\">";
			}
			else{
				descriptionString += "<span>";
			}

			descriptionString += wire.primary_colour + "</span>";

			if(wire.secondary_colour){
				if(wire.secondary_colour === "Red"){
					descriptionString += "<span class=\"red-text\">";
				}
				else if(wire.secondary_colour === "Blue"){
					descriptionString += "<span class=\"blue-text\">";
				}
				else{
					descriptionString += "<span>";
				}
				
				descriptionString += " + " + wire.secondary_colour;

				descriptionString += "</span>";
			}

			descriptionString += " | ";

			descriptionString += wire.led ? "LED | " : "<span class=\"dim\">No LED</span> | ";

			descriptionString += wire.star ? "<span class=\"star-text\">Star</span>" : "No Star";

			description.innerHTML = descriptionString;

			if(wire.answer === "Cut"){
				type.innerHTML = "Always Cut";
			}
			else if(wire.answer === "Dont"){
				type.innerHTML = "Don't Cut";
			}
			else if(wire.answer === "Serial"){
				type.innerHTML = "Last digit of serial = Even";
			}
			else if(wire.answer === "Bat"){
				type.innerHTML = "2+ batteries";
			}
			else if(wire.answer === "Port"){
				type.innerHTML = "Parralel Port Present";
			}

			tableRow.append(correct);
			tableRow.append(your);
			tableRow.append(description);
			tableRow.append(type);

			table.append(tableRow);
		});

		attemptOverlay.append(table);

		newAttempt.append(attemptOverlay);

		attemptBox.prepend(newAttempt);
	});
}

function showToggle(index){
	const selectedDom = document.getElementById("attempt" + index);

	selectedDom.classList.toggle("displayNone");
}

//Helper function to get the number of successful responses
function countSuccess(attempt){
	let count = 0;

	attempt.forEach((e)=>{
		if(e.correct){
			count++;
		}
	});

	return count;
}

// Renders a wire and sets up the onclick for it
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

// Cleanup and setup functions
// --START--
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
// --END--

// Runs the creating and cleanup functions when generating new problems
function init(){
	clearModule();
	createSerial();
	populateWidgets();
	generateBatteries();
	generatePort();
}

// Runs the render function for every problem in the wires array
function loadProblems(){
	wires.forEach((e, index)=>{
		renderOption(e, index);
	});
}

function startup(){
	// Clears out all the wires and generates the bomb widgets such as ports and sets the local values for the battery displays
	init();

	// Populates the wires array with problems specified in the input field
	generateProblems(roundLength);

	// Renders the wires described in the wires array
	loadProblems();

	// If the bomb is already solved, run the function again until a valid wire setup occurs
	if(isDefused()){
		console.log("Already solved, reloading");
		startup();
	}
}

startup();
