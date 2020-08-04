
/**
 * 
 * @param {*} value
 * 
 * To check a value is Palindrome or not 
 */
function isPalindrome(value){
    var name = value.toString();
    var revrese = "";
    for(var i = name.length-1; i >= 0;  i--){
        revrese = revrese + name[i];
    }
    return (name == revrese);
 }

 isPalindrome(121);
