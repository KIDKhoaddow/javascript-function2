let arrProduct =[]
const setIntervalNumberElement=setInterval(showNumberElement,100)
// const setIntervalElement=setInterval(showElement,200)

function addNewProduct() {
    let inputString=document.getElementById("inputNewProduct").value;
    arrProduct.push(inputString)
    showElement()

}
function showNumberElement(){
    document.getElementById("numberElement").innerText=""+arrProduct.length+" products"
}

function showElement(){
    let numberElement=arrProduct.length
    let rowElement=""
    let element
    for (let i = 0; i <arrProduct.length ; i++) {
        element=arrProduct[i];
        rowElement+="<tr><th>"+element+"</th>" +
            "<td id=dataInputRename"+i+ "></td>" +
            "<td><button onclick=editElement("+i+")>Edit</button></td>" +
            "<td><button onclick=deleteElement("+i+")>Delete</button></td></tr>"

    }
    document.getElementById("tableProduct").innerHTML=rowElement

}
function editElement(x){
    document.getElementById("dataInputRename"+x).innerHTML="<input type=text id=inputRename"+x+">"+"" +
        "<button id=createRename onclick=renameElement("+x+")>Rename</button>"
}

function renameElement(x){
    let rename=document.getElementById("inputRename"+x).value
    arrProduct[x]=rename
    showElement()

}
function deleteElement(x){
    arrProduct.splice(x,1)
    showElement()
}