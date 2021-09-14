 const parser =  require('./pgn-parser.js')
 
 const parse = (pgn, options) => {
    const result = parser.parse(pgn, options)
    return JSON.stringify(result, null, 2)
 }

window.parsePgn = parser.parse
window.parse = parse