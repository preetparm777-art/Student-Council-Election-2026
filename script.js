function playBeep() {
    const beep = new Audio("beep.mp3");
    beep.play();
}
function addVote(post, candidate){

    let key = post + "_" + candidate;

    let votes = localStorage.getItem(key);

    if(votes == null){
        votes = 0;
    }

    votes = parseInt(votes) + 1;

    localStorage.setItem(key, votes);

}
function voteHeadGirl(name){
    playBeep();

    localStorage.setItem("Head Girl", name);
    addVote("Head Girl", name);

    setTimeout(function(){
        window.location.href="viceheadgirl.html";
    },500);
}

function voteViceHeadGirl(name){
    playBeep();

    localStorage.setItem("Vice Head Girl", name);
    addVote("Vice Head Girl", name);

    setTimeout(function(){
        window.location.href="cca.html";
    },500);
}

function voteCCA(name){
    playBeep();

    localStorage.setItem("CCA Captain", name);
    addVote("CCA Captain", name);

    setTimeout(function(){
        window.location.href="vicecca.html";
    },500);
}

function voteViceCCA(name){
    playBeep();

    localStorage.setItem("Vice CCA Captain", name);
    addVote("Vice CCA Captain", name);

    setTimeout(function(){
        window.location.href="sportscaptain.html";
    },500);
}

function voteSportsCaptain(name){
    playBeep();

    localStorage.setItem("Sports Captain", name);
    addVote("Sports Captain", name);

    setTimeout(function(){
        window.location.href="assemblycaptain.html";
    },500);
}

function voteAssemblyCaptain(name){
    playBeep();

    localStorage.setItem("Assembly Captain", name);
    addVote("Assembly Captain", name);

    setTimeout(function(){
        window.location.href="transportcaptain.html";
    },500);
}

function voteTransportCaptain(name){
    playBeep();

    localStorage.setItem("Transport Captain", name);
    addVote("Transport Captain", name);

    setTimeout(function(){
        window.location.href="review.html";
    },500);
}

