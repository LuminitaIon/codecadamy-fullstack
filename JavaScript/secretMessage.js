let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length)
secretMessage.pop();
console.log(secretMessage.length)
secretMessage.push('to')
secretMessage.push('Program')

let no = secretMessage.indexOf('easily')
secretMessage[no] = 'right'
console.log(secretMessage)

secretMessage.shift()
secretMessage.unshift('Programming ')

let st = secretMessage.indexOf('get')
secretMessage.splice(st, 5, 'know');
console.log(secretMessage.join(' '));