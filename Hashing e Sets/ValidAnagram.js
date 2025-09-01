

function isAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    const count = {};

    for (let char of word1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of word2) {
    if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

function solution2(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - base]++;
        count[t.charCodeAt(i) - base]--;
    }

    return count.every(c => c === 0);
}


const word1 = "samuel"
const word2 = "lsamue"

const result = isAnagram(word1, word2);
console.log(result);
