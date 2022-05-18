function doEx1() {
    let number1 = +prompt("xin mời nhập số bất kỳ")
    let resultEx1 = alert(Math.pow(number1, 2))
    return resultEx1
}

function doEx2() {
    const pi = 3.14
    let radius = +prompt("Xin mời nhập bán kính : ")
    let resultEx2 = alert("Diện tích hình vuông là :" + circleArea(radius, pi) + "\n"
        + "Chu vi hình vuông là :" + circlePerimeter(radius, pi))
    return resultEx2

}

function circleArea(radius, pi) {
    return Math.pow(radius, 2) * pi
}

function circlePerimeter(radius, pi) {
    return 2 * pi * radius
}


function doEx3() {
    let numberEx3 = prompt("Xin mời nhập số cần tính giai thừa")
    let resultEx3 = alert(factorial(numberEx3))
    return resultEx3
}

function factorial(number) {
    if (number == 2) {
        return 2
    } else
        return number * factorial(number - 1)
}

function doEx4() {
    let stringEx4 = prompt("Xin mời nhập vào ký tự để kiểm tra")
    if (isNaN(stringEx4)) {
        return alert("Ký tự này không phải là số")
    } else {
        return alert("Ký tự này là số")
    }
}

let arrEx5

function doEx5() {
    createArrayEx5(arrEx5)
    arrEx5.sort((a, b) => a - b);
    return alert(arrEx5[0])
}


function createArrayEx5() {
    arrEx5 = new Array()
    let numberElement = prompt("xin mời nhập số lượng phần tử của mảng cần tạo")
    for (let i = 0; i < numberElement; i++) {
        arrEx5[i] = +prompt("xin mời nhập giá trị của phần tử thứ " + i + " :")
    }

}

function doEx6() {
    let numberEx6 = prompt("Xin mời nhập số cần kiểm tra :")
    let result = isPositiveNumber(numberEx6)
    return alert(result)
}

function isPositiveNumber(number) {
    if (number > 0) return true;
    else return false;
}

let stringEx7="2,3"

function doEx7(string) {
    let arrEx7=stringEx7.split(",")
    arrEx7.reverse()

    return alert(arrEx7)

}




let arrEx8=[1,2,3,4,5,6,8,9]

function doEx8(arr) {
    arr.reverse()
    return alert(arr)

}



let arrEx9=[1,2,3,5,6,9,9,8]
function doEx9(arr,char){
    let count=0
    let idx=arr.indexOf(char)
    if(idx==-1){
        return alert(idx)
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]==char){
                count+=1
            }
        }
    }
    return alert(count)
}

