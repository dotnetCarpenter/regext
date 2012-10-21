/* old snippet that I like
this.addEvent =function(element, type){
              for (var i = 2; i < arguments.length; i++) {
                    if (element.addEventListener) {
                        element.addEventListener(type, arguments[i], false);
                    }
                    else { // IE
                        element.attachEvent('on' + type, arguments[i]);
                    }
                }
*/
/* small responsive thingy to test */
//document.getElementsByTagName('body')[0].style.fontSize=(window.screen.width/64)+'px';
   // alert(document.getElementsByTagName('body')[0].style.fontSize)
var ns = {}
ns.regex = function(output) {
   this.output = output
}
ns.regex.prototype.patterns = function(input) {
    var escapedChars= ['d', 'D', 'w', 'W']
  //  var char = String.fromCharCode(input.keyCode);
console.log(input)
    this.output.innerHTML = input;
}
var testCase = new ns.regex(document.getElementById('result1'))
document.getElementById('test1').addEventListener("keyup", function(e) { testCase.patterns(this.innerHTML) }, false)