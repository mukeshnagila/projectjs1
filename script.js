let assignTime = document.getElementsByClassName("a"); 
let assignTime1 = document.getElementsByClassName("a22"); 
let assignTime2 = document.getElementsByClassName("a33"); 
let assignTime3 = document.getElementsByClassName("a44"); 
let assignmessage = document.getElementById('message'); 
    
function runningclock(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let ampm = "";

    // console.log(`${hrs}`);
    if(hrs >= 2 && hrs <= 10 ){
        assignmessage.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
    }else if(hrs >= 11 && hrs <= 16){
        assignmessage.innerHTML = "LET'S HAVE SOME LUNCH !!"
    }else if(hrs >= 17 && hrs <= 20){
        assignmessage.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    }else if(hrs >= 21 || hrs <= 1){
        assignmessage.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }
    
    if(hrs > 12){
        hrs -= 12;
        ampm = "PM";
    }else{
        ampm = "AM";
    }
    console.log(`${hrs} ${mins} ${secs} ${ampm}`);
    assignTime[0].innerHTML = `${hrs}`
    assignTime1[0].innerHTML = `${mins}`
    assignTime2[0].innerHTML = `${secs}`
    assignTime3[0].innerHTML = `${ampm}`
}
setInterval(() => {
    runningclock();
}, 1000);

let selectvalue = document.querySelectorAll('select');
let note = document.getElementById('note');
let img = document.getElementById('img');
let update1 = document.getElementById('update1');
let update2 = document.getElementById('update2');
let update3 = document.getElementById('update3');
let update4 = document.getElementById('update4');
//let updateValue = document.querySelector('select');

///// for time show in bottom //////
//let selectElement = document.querySelectorAll('select');

function callFunction(){
    let t = new Date();
    let hrs = t.getHours();

    if(parseInt(selectvalue[0].value) === hrs){
        img.src = "./img/Component 30 – 1.svg" 
        note.innerHTML = "GOOD MORNING!! WAKE UP !!"
    }else if(parseInt(selectvalue[1].value) === hrs){
        img.src = "./img/Component 31 – 1.png" 
        note.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }else if(parseInt(selectvalue[2].value) === hrs){
        img.src = "./img/lunch_image.png" 
        note.innerHTML = "GOOD EVENING !!"
    }else if(parseInt(selectvalue[3].value) === hrs){
        img.src = "./img/Component 32 – 1.svg" 
        note.innerHTML = "GOOD NIGHT !!"
    }

    ////// for time in bottom //////
    //let selectItem = selectElement[0].selectedIndex;
    //let item = selectElement[0].options[selectItem];

    update1.innerHTML = selectvalue[0].options[selectvalue[0].selectedIndex].text;
    update2.innerHTML = selectvalue[1].options[selectvalue[1].selectedIndex].text;
    update3.innerHTML = selectvalue[2].options[selectvalue[2].selectedIndex].text;
    update4.innerHTML = selectvalue[3].options[selectvalue[3].selectedIndex].text;
}
