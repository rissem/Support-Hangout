/*

function getChairman() {
    return gapi.hangout.data.getState().chairman;
}

function getSpeaker() {
    return gapi.hangout.data.getState().speaker;
}

function makeChairmanSpeaker() {
    gapi.hangout.data.submitDelta({speaker:getChairman()});    
}

function startMeeting() {
    setChairman();
    showIntroDocs();
}

function showIntroDocs() {
    
}

function makeMeSpeaker() {
    gapi.hangout.data.submitDelta({speaker: gapi.hangout.getParticipantId()});
}

function setChairman() {
    var participants = gapi.hangout.getParticipants();
    console.log("ok");
    for (var i=0; i < participants.length; i++) {
        if (participants[i].displayName == "Michael Risse") {
            chairman = participants[i].hangoutId;
            gapi.hangout.data.submitDelta({chairman:chairman});
        }
    }
    activatePerson(getChairman());
}

<<<<<<< HEAD
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
=======
function activatePerson(hangoutId) {
    gapi.hangout.layout.setParticipantHighlight(hangoutId);
    gapi.hangout.setActiveSpeaker(hangoutId);
>>>>>>> 94ba5fb1f8d1dfa9a749433ef786ff1e0413961c
}

gapi.hangout.addParticipantAddedListener(function() {
    setChairman();
});

gapi.hangout.addAppParticipantAddedListener(function(participants) {
    setChairman();
});

window.setTimeout(function() {
    if (getSpeaker() == undefined) {
        makeChairmanSpeaker();
    }
}, 2000);

window.setInterval(function() {
    $("#shareButton").click(function() {
        console.log("making me speaker");
        makeMeSpeaker();
    });
    $("#stopSharingButton").click(function() {
        console.log("making chairman speaker");        
        makeChairmanSpeaker();
    });
}, 2000);

*/
