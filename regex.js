/* generating snippet
var charCode = 0, word=[],decimal=[];
var charEscapes = []
charEscapes[0] = new Array(2);
charEscapes[0][0] = '\w'
charEscapes[0][1] = /\w/;
charEscapes[1] = []
charEscapes[1][0] = '\d'
charEscapes[1][1] = /\d/;
while(charCode<=65535) {
    let char = String.fromCharCode(charCode)
    if(charEscapes[0][1].test(char))
        word.push(char)
    if(charEscapes[1][1].test(char))
        decimal.push(char)
    ++charCode;
}
console.log("word", word.join(''))
console.log("decimal", decimal.join(''))
*/
var ns = {}
ns.map = function(enumerator, context) {
    for(var i = 0, len = this.length; i < len; ++i) {
        enumerator.call(context || this, this[i], i, this)
    }
}
ns.list = function(map) {
    return Object.keys(map).map(function(el, i) {
        var list=new Array(2); list[0]=el; list[1]=map[el]
        return list
        //return [i] = new Array(2), [i][0]=el, [i][1]=map[el], [i]
    })
}
ns.regex = function(output) {
    var escapedChars = new ns.list({
        '\\d': /\d/
       ,'\\D': /\D/
       ,'\\w': /\w/
       ,'\\W': /\W/
       ,'\\s': /\s/
       ,'\\f': /\f/
       ,'\\r': /\r/
       ,'\\n': /\n/
    })
    this.output = output
    generate(escapedChars)
    console.dir(escapedChars)
    
    function generate(set) {
        var charCode = 0, char
        while(charCode <= 65535) {
            set.forEach(function(item, i) {
                char = String.fromCharCode(charCode)
                if(item[1].test(char))
                    item.push(char)
            })
            ++charCode
        }
    }
    function join(array) { array.join('') }
}
ns.regex.prototype.patterns = function(input) {
    
    
  //  var char = String.fromCharCode(input.keyCode);
console.log(input)
    this.output.innerHTML = input;
}
