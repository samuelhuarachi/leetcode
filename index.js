
function teste(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0); // 26 letras do alfabeto
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - base]++;
        count[t.charCodeAt(i) - base]--;
    }

    return count.every(c => c === 0);
}

const word1 = "paralelepipedo"
const word2 = "paralelepipeod"
const result = teste(word1, word2);



const words = ["eat","tea","tan","ate","nat","bat"];

function sortWord(word) {
    return word.split('').sort().join('');
}

const w = words.map(sortWord).sort()


const map = new Map();
map.set("arr", []);
map.get("arr").push("james");
map.get("arr").push("agnaldo");
map.get("arr").push("maria");

console.log(map.values());

const word = "samuel"

console.log(Array.from(word, c => c.toUpperCase()));

const word2 = "samuel"
const char = "s"

const charCode = char.charCodeAt(0)
console.log("charCode: ", charCode);
