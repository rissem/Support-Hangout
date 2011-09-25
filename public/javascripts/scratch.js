function doStuff() {
    console.log("do stuff");
}

gapi.hangout.addApiReadyListener(startMyApp);

function startMyApp(){
	var participant_id=gapi.hangout.getParticipantId();
	var participants=gapi.hangout.getParticipants();
	console.log("Participants:",participants);
	
	gapi.hangout.addParticipantAddedListener(newUserAdded);
}

function newUserAdded(new_participants){
	for (i=0;i<new_participants.length;i++){
		gapi.hangout.displayNotice(new_participants[i].displayName + " arrived);
	}
	gapi.hangout.displayNotice(
	  ,
	  opt_permanent
	)
}
