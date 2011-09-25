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

gapi.hangout.addStateChangeListener(function() {
    activatePerson(getSpeaker());
});

var preambleString = 
'	  <input type="button" id="shareButton" value="Share"/>' + 
'      <input type="button" id="stopSharingButton" value="Done sharing" />' + 
'	<div id="opening">Welcome to Alcoholics Anonymous, a worldwide fellowship of men and women who help each other to stay sober. This is a closed meeting,you are welcome to stay if you have a desire to quit drinking. If you have had a drink in the last 24 hours, we ask that you only listen during the meeting.<br/>I will now read the Preamble.' + 
'	</div>' + 
'	<div id="preamble">Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism. The only requirement for membership is a desire to stop drinking. There are no dues or fees for A.A. membership; we are self-supporting through our own contributions. A.A. is not allied with any sect, denomination, politics,organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes. Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.' + 
'	</div>' + 
'	<div id="group_topic">' + 
'	</div>' + 
'  </form>' + 
    '  <div id="docs"></div>';


function appStart() {
    $('#body_area').html(preambleString);
    $("#shareButton").click(function() {
        console.log("making me speaker");
        makeMeSpeaker();
    });
    $("#stopSharingButton").click(function() {
        console.log("making chairman speaker");
        makeChairmanSpeaker();
    });

    if (scratchStart)
        scratchStart();
}

gapi.hangout.addApiReadyListener(appStart);
