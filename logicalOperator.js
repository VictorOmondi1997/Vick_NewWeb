if(5===5 && 6===6){
	console.log(true);
}
else{
	console.log(false);
}

let userSettings={name:'Joe'};
let defaultSettings={name: 'default'};
console.log(userSettings || defaultSettings);