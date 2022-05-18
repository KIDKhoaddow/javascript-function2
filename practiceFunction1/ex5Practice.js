let star=["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe" ,"Regulus"];
let Constellation=[ "Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"];
let stringCheck
let isStarCheck=true
function isString(x){
    return x==stringCheck
}
function swap(){
    if(isStarCheck){
        isStarCheck=false
        document.getElementById("swapInfo").innerText="Tìm ngôi sao"
    }else {
        isStarCheck=true
        document.getElementById("swapInfo").innerText="Tìm chòm sao"
    }
}
function checkString(){
    stringCheck=document.getElementById("inputString").value;
    if(isStarCheck){
        document.getElementById("result").innerText=Constellation[star.findIndex(isString)]
    }else {
        document.getElementById("result").innerText=star[Constellation.findIndex(isString)]

    }
}

