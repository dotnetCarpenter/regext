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
    })
}
ns.regex = function(output) {
    this.escapedChars = new ns.list({
        '\\d': /\d/
       ,'\\D': /\D/
       ,'\\w': /\w/
       ,'\\W': /\W/
       ,'\\s': /\s/
       ,'\\S': /\S/
       ,'\\f': /\f/
       ,'\\r': /\r/
       ,'\\n': /\n/
       ,'\\t': /\t/
       ,'\\v': /\v/
       ,'\\0': /\0/
       ,'[\\b]': /[\b]/
    })
    this.output = output
    generate(this.escapedChars)
    console.dir(this.escapedChars)
    
    function generate(set) { /*TODO: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/charCodeAt*/
        var charCode = 0, char = ''
        while(charCode <= 65535) {
            char = String.fromCharCode(charCode)
            set.forEach(function(item, i) {                
                if(item[1].test(char))
                    item.push(char.charCodeAt(0))
            })
            ++charCode
        }
    }
    function join(array) { array.join('') }
}
ns.regex.prototype.patterns = function(input) {
    var found = this.escapedChars.filter(function(charclass) {
        return charclass.indexOf( input.charCodeAt(0), 2 ) !== -1
    })
    this.output.innerHTML = found.length === 0 ? "NOT FOUND" : found.reduce(function(prev, curr) {
        return (prev instanceof Array ? prev[0] : prev) + ', ' + curr[0]
    })
    
  //  var char = String.fromCharCode(input.keyCode);
    //console.log(input)
    //this.output.innerHTML = input;
}
