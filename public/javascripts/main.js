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

function activatePerson(hangoutId) {
    gapi.hangout.layout.setParticipantHighlight(hangoutId);
    gapi.hangout.setActiveSpeaker(hangoutId);
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

    $("#shareButton").click(function() {
        console.log("making me speaker");
        makeMeSpeaker();
        activatePerson(getSpeaker());
    });
    $("#stopSharingButton").click(function() {
        console.log("making chairman speaker");        
        makeChairmanSpeaker();
        activatePerson(getSpeaker());
    });

}, 2000);
