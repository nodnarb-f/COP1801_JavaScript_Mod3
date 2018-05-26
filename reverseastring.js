var result = "";

function reverseIt(input) {

  var i = input.length;
  for (var i = input.length - 1; i >= 0; i--) {
    result += input.charAt(i);;
  }
  return result;

}
var input = prompt("Enter a string: ","");

console.log(reverseIt(input));
document.write("The reverse of your string is " + result + ".");
