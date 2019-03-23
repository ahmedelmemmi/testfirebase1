var score = 0;
var time = 10 ;
var play = true ;
var s;
function save(){
    var data={
        score:score
    };
    ref.push(data);
    score = 0;
    time = 10 ;
    document.getElementById("score").innerHTML = "score : " + score ;
    document.getElementById("time").innerHTML =  time ;
    play = true ;
}

setInterval(function(){
    if(time>0){
        time--;
        document.getElementById("time").innerHTML = time ;
    }
    else{
        play = false ;
    }
},1000);
document.addEventListener('keyup',function(){
    if(play){score++ ;}
    document.getElementById("score").innerHTML = "score : " + score ;
    // s=score;
});
var config = {
    apiKey: "AIzaSyCmj9oW57GsPnNyYbQuMuMApS3p-zZPx-0",
    authDomain: "fir-test-aaede.firebaseapp.com",
    databaseURL: "https://fir-test-aaede.firebaseio.com",
    projectId: "fir-test-aaede",
    storageBucket: "fir-test-aaede.appspot.com",
    messagingSenderId: "648047737927"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
var ref = database.ref("score");
console.log(s)


