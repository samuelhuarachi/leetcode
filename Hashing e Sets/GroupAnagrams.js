
const strs = ["eat","tea","tan","ate","nat","bat"];

const map = new Map();

for (const word of strs) {

    const sorted = word.split('').sort().join('');
    if (!map.has(sorted))  map.set(sorted, [])
    map.get(sorted).push(word)
}

Array.from(map.values())


