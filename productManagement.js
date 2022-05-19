let arrProduct =[]
const setIntervalNumberElement=setInterval(showNumberElement,100)
const setIntervalElement=setInterval(showElement,200)

function addNewProduct() {
    let inputString=document.getElementById("inputNewProduct").value;
    arrProduct.push(inputString)

}

function showNumberElement(){
    document.getElementById("numberElement").innerText=""+arrProduct.length+"products"
}


function showElement(){
    let numberElement=arrProduct.length
    let rowElement=""
    let element
    for (let i = 0; i <arrProduct.length ; i++) {
        element=arrProduct[i];
        rowElement+="<tr><th>"+element+"</th><td><button onclick=editElement("+i+")>Edit</button></td><td><button onclick=deleteElement("+i+")>Delete</button></td></tr>"

    }
    document.getElementById("tableProduct").innerHTML=rowElement

}
function editElement(x){
    let renameElement=prompt("Xin mời nhập tên muốn sửa")
    arrProduct[x]=""+renameElement
}
function deleteElement(x){
    arrProduct.splice(x,1)
}