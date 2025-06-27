let widgets = [];
const possibleWidgets = [
	{
		type: "indicator",
		letters: "SND"
	},
	{
		type: "indicator",
		letters: "CLR"
	},
	{
		type: "indicator",
		letters: "CAR"
	},
	{
		type: "indicator",
		letters: "IND"
	},
	{
		type: "indicator",
		letters: "FRQ"
	},
	{
		type: "indicator",
		letters: "SIG"
	},
	{
		type: "indicator",
		letters: "NSA"
	},
	{
		type: "indicator",
		letters: "MSA"
	},
	{
		type: "indicator",
		letters: "TRN"
	},
	{
		type: "indicator",
		letters: "BOB"
	},
	{
		type: "indicator",
		letters: "FRK"
	},
	{
		type: "battery",
		count: 1
	},
	{
		type: "battery",
		count: 1
	},
	{
		type: "battery",
		count: 1
	},
	{
		type: "battery",
		count: 1
	},
	{
		type: "battery",
		count:2 
	},
	{
		type: "battery",
		count:2 
	},
	{
		type: "battery",
		count:2 
	},
	{
		type: "port",
		port: "Parralel"
	},
	{
		type: "port",
		port: "Parralel"
	},
	{
		type: "port",
		port: "DVI-D"
	},
	{
		type: "port",
		port: "PS/2"
	},
	{
		type: "port",
		port: "RJ-45"
	},
	{
		type: "port",
		port: "Serial"
	},
	{
		type: "port",
		port: "Stereo RCA"
	}
];


function populateWidgets(){
	widgets = [];

	for(let i = 0; i < 5; i++){
		widgets.push(possibleWidgets[Math.floor(Math.random() * possibleWidgets.length)]);
	}
}

function batteryCount(){
	let count = 0;
	widgets.forEach((e)=>{
		if(e.type === "battery"){
			count += e.count;
		}
	});

	return count;
}

function parralelPort(){
	let containsParralel = false;

	widgets.forEach((e)=>{
		if(e.type === "port" && e.port === "Parralel"){
			containsParralel = true;
		}
	});

	return containsParralel;
}
