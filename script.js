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


