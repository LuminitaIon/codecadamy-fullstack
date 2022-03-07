let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet. I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
let noWords = storyWords.length
console.log('no of words: ' + noWords);

let betterWords = []
betterWords = storyWords.filter(letter => {
for(let un of unnecessaryWords)
  return letter !== un})
// console.log(betterWords)

let c1 = 0;
let c2 = 0;
let c3 = 0;
for(let s of storyWords) {
  if(s === overusedWords[0]) {
    c1 += 1
  } else if (s === overusedWords[1]) {
    c2 += 1
  } else if (s === overusedWords[2]) {
    c3 += 1
  }
}

console.log('first oW: ' + c1 + ' second oW: ' + c2 + ' third oW: ' + c3)

let sentences = 0;
let sen = []
sen = story.split('.')
sentences = sen.length

console.log('no of sentences: ' + sentences)

console.log('betterWords: '+ betterWords.join(' '))