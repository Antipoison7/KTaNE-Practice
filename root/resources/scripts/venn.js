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

function clearModule(){
	document.getElementById("moduleBody").innerHTML = "";
}

console.log(possibleCombinations);
clearModule();

for(let i = 0; i < 100; i++){
	console.log(i);
	renderOption(getRand(possibleCombinations));
}
