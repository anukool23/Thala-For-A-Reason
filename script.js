let submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener('click',function(){
    let inputData = document.getElementById("input-field").value;
    // console.log(inputData);
    
    checkValueType(inputData)
});

// Chcking weather the provided data is string or number
function checkValueType(input) {
    if (!isNaN(parseFloat(input)) && isFinite(input)) {
        checkNumData(input)
        // console.log("Number")
        
    } else {
        // console.log("String")
        checkData(input)
    }
}

// Checking if provided data is string then the length of String is divisible by 7 or not
function checkData(input){
    let strLength = input.length
    if(strLength % 7 ==0){
        console.log("Thala")
        //playAudio()
        playVideo()
    }
    else{
         console.log("Nala")
         alert("You have no love for Thala")
    }
}

// Checking if provided data is number then the number is divisible by 7 or not
function checkNumData(number){
    let input = parseInt(sumOfDigits(number))
    //console.log(input)
    if(input % 7 == 0){
        console.log("Thala")
        //playAudio()
        playVideo()
    }
    else{
         console.log("Nala")
         alert("You have no love for Thala")
    }
}

// Calculating the sum of digits in case of number
function sumOfDigits(number) {
    let sum = 0;
    let numString = Math.abs(number).toString();
    
    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }
    
    return sum;
}


function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
    audio.style.display = "inline"
}

function playVideo() {
    var video = document.getElementById("myVideo");
    video.play();
    video.style.display = "inline"
}
