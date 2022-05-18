let isFootToMeter=true

function footToMeter(foot){
    return foot*0.305
}
function meterToFoot(meter){
    return meter*3.279
}

function switchValue(){
    if(isFootToMeter){
        isFootToMeter=false

    }else{
        isFootToMeter=true
    }
}

function showValue(x){
    if(isFootToMeter){
        document.getElementById("outputValue").innerText=footToMeter(x)
    }else{
        document.getElementById("outputValue").innerText=meterToFoot(x)
    }
}