function doStuff() {
    console.log("do stuff");
}

gapi.hangout.addApiReadyListener(startMyApp);

function startMyApp(){
	console.log("This worked");
}
