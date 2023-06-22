//Iteraction 1
let hacker1 = 'João';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Maria';
console.log(`The navigaro's name is ${hacker2}`);

//Iteraction 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

//Iteration 3
const newHacker = [];
for (let i = 0; i < hacker1.length; i++) {
    newHacker.push(hacker1[i].toUpperCase())
};
console.log(newHacker)

const hackerOposite = [];
for (let i = hacker1.length + 1; i >= 0; i--) {
    hackerOposite.push(hacker1[i])
}
console.log(hackerOposite);

if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus 
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet mi vel posuere sodales. Nunc quis neque eleifend, convallis nulla sodales, venenatis urna. Duis tincidunt leo ex, vel vestibulum erat dictum eleifend. Morbi sed facilisis tortor. Nam quis laoreet lorem. Aliquam id sollicitudin odio. Praesent aliquam ligula tortor, quis tincidunt mauris faucibus vel. Maecenas sollicitudin egestas erat, non convallis velit bibendum nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut neque vel arcu vestibulum euismod. Pellentesque at ornare turpis. Mauris finibus rhoncus ligula, ac laoreet purus dignissim at. Quisque nec euismod arcu, et feugiat nulla.Nunc nibh leo, tincidunt sed dolor eget, dignissim maximus diam.Integer in dolor blandit, hendrerit odio ut, porttitor nibh.Vestibulum purus sem, rhoncus quis dolor vehicula, sagittis facilisis tellus.Donec eu quam tortor.Phasellus in auctor leo, eu venenatis leo.Suspendisse potenti. Duis sagittis nisl eros.Proin sit amet dictum tellus.Cras luctus, massa sit amet finibus interdum, elit tortor vulputate dui, vel sollicitudin ligula mauris at enim.Maecenas mi turpis, posuere in lorem eu, auctor malesuada ipsum.Curabitur sollicitudin erat et massa interdum auctor.Nulla varius purus a purus mattis tincidunt.Integer aliquet vel enim sit amet hendrerit.Vestibulum mattis dui eget magna porttitor vestibulum id vitae est.Nulla nisl elit, euismod a tempus interdum, malesuada malesuada neque.";
let countText = 0;
for (let i = 0; i <= longText.length; i++) {
    if (longText[i] === ' ') {
        countText++;
        //    console.log(countText);
    }
}
countText++;
console.log(countText)

//Make your program count the number of times the Latin word et appears.
let count = 0;
for (let i = 0; i <= longText.length; i++) {
    if (longText.slice(i, i + 2) === 'et') {
        count++;
        //  console.log(count)
    }
}
console.log(count);

//Bonus 2

const phraseToCheck = 'Amor Roma';
let palindrome = [];
let reversePalindrome = [];
for (let i = 0; i < phraseToCheck.length; i++) {
    palindrome.push(phraseToCheck[i].toLowerCase());
}
console.log(palindrome);

for (let j = phraseToCheck.length - 1; j >= 0; j--) {
    reversePalindrome.push(phraseToCheck[j].toLowerCase())
}
console.log(reversePalindrome);

if (palindrome.toString() === reversePalindrome.toString()) {
    console.log('This is a palindrome!')
} else {
    console.log('This is NOT a palindrome')
}



