function randomCharacter(){
	// Intentionally not having Y because of vowel issues
	const characters = "ABCDEFGHIJKLMNPQRSTUVWXZ";
	return characters.charAt(Math.floor(Math.random() * characters.length));
}

function randomNumber(){
	const numbers = "0123456789";
	return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function randomAlphaNum(){
	// Intentionally not having Y because of vowel issues
	const characters = "ABCDEFGHIJKLMNPQRSTUVWXZ0123456789";
	return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateSerial(){
	let serial = "";

	serial += randomAlphaNum();
	serial += randomAlphaNum();
	serial += randomNumber();
	serial += randomCharacter();
	serial += randomCharacter();
	serial += randomNumber();

	console.log(serial);

	return serial;
}
