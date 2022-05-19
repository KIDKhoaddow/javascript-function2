function alertMessage(a){
    alert(a)
}

function increaseNumber(){
    let numberA= +prompt("Xin mời nhập số cần tăng:")
    numberA++
    alert(numberA)
}

function checkTwoNumber(numb1,numb2){
    if(numb1>numb2){
        alertMessage("Số thứ 1 lớn hơn số thứ 2")
    }
    else
        alertMessage(numb1+numb2)
}
result=0
alert(result)


function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result=addNumbers();

function showNumber(){
    alert(result)
}


