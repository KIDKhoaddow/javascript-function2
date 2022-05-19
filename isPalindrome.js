function isPalindrome(s){
    let arrCheckPalindrome=s.split("")
    let newString=arrCheckPalindrome.join(arrCheckPalindrome.reverse());
    if(newString==s){
        return true
    }else return false

}