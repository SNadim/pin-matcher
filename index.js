let pinGenerate = document.getElementById("pin-generator");
let RandomPinInput = document.getElementById("random-pin-input");
let pinInput = document.getElementById("pin-input");
let buttons = Array.from(document.getElementsByClassName("button"));
let submit = document.getElementById("submit");
let attempt = 3;

// pin generating 

pinGenerate.addEventListener("click",function(){
        attempt = 3;

        document.getElementById("action-left").innerText = attempt;
                submit.disabled = false;
                submit.style.cursor = "pointer";
                submit.style.backgroundColor = "rgba(73, 91, 195, 1)";
                pinInput.value = '';
    

        document.getElementById("correct-pin").style.visibility = "hidden";
        document.getElementById("wrong-pin").style.visibility = "hidden";
    let randomNumber = '';
    for(i = 1; i <=4; ++i)
    {
        let rand = Math.round(Math.random()*9);
        randomNumber = randomNumber + rand.toString();
    }
    RandomPinInput.value = randomNumber;
});


// pin input

buttons.map( button =>{
    button.addEventListener("click",(e)=>{
        document.getElementById("correct-pin").style.visibility = "hidden";
        document.getElementById("wrong-pin").style.visibility = "hidden";

        switch(e.target.innerText){
            case 'C' :
                pinInput.value = '';
                break;
            case '<':
                pinInput.value = pinInput.value.slice(0,-1);
                break;
            default:
                if(pinInput.value.length < 4)
                 pinInput.value += e.target.innerText;

        }

    });

});

// submit button

submit.addEventListener("click",function(){
    let randomValue = RandomPinInput.value;
    let pin = pinInput.value;
    
    if(randomValue != '' && pin != '') {
        if(randomValue == pin) {
            document.getElementById("correct-pin").style.visibility = "visible";
    
        } else {
            document.getElementById("wrong-pin").style.visibility = "visible";
            attempt--;
            document.getElementById("action-left").innerText = attempt;
            if(attempt == 0) {
                submit.disabled = true;
                submit.style.cursor = "no-drop";
                submit.style.backgroundColor = "rgba(73, 91, 195, .5)";
            }
    
        }
    }
});


