// .replace() - only replaces the first match to replace it encounters

const string = 'JavaScript its an awesome programming language, but you need to focus to learn JavaScript'

const replacedString = string.replace("JavaScript","TypeScript")
console.log(replacedString)
// => output
//TypeScript its an awesome programming language, but you need to focus to learn JavaScript


// .replaceAll() as it says, replaces every match it encounters

const string2 = 'JavaScript its an awesome programming language, but you need to focus to learn JavaScript'

const replacedString2 = string2.replaceAll("JavaScript", "TypeScript")
console.log(replacedString2)
// => output
//TypeScript its an awesome programming language, but you need to focus to learn TypeScript



// Another example with replaceAll()

const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))