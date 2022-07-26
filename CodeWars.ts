export function fakeBinary(x: string){
    const stringToArray = x.split('')
    const newArray = stringToArray.map((number: any) => {
        return number < 5 ? (number = 0) : (number = 1)
    })
    return newArray.join().replace(/,/g, '')
}

export function fakeBinary2(x: any){
    const stringToArray = x.split('')
    for(let i = 0; i < stringToArray.length; i++){
        if(stringToArray[i] < 5){
            stringToArray[i] = 0
        } else {
            stringToArray[i] = 1
        }
    }
    return stringToArray.join().replace(/,/g, '')
}

export function abbreviateName(name: string){
    const [firstName, lastName] = name.split(' ')
    return (`${firstName.charAt(0)}.${lastName.charAt(0)}`).toUpperCase()
}

export function DNAtoRNA(dna: string) {
    const dnaArray = dna.split('')
    const rna = dnaArray.map(x => {
        if (x === 'T'){
            return x = 'U'
        }
        return x
    })
    return rna.join().replace(/,/g, '')
}

export function BetterDNAtoRNA(dna: string) {
    const rna = dna.split('').map(x => {
        return x === 'T' ? x = 'U': x
    })
    return rna.join().replace(/,/g, '')
}

export function countSheep(arrayOfSheep: (boolean | undefined | null)[]) {
    let count = 0
    arrayOfSheep.forEach( i=> {
        if(i === true){count++}
    })
    return count
}

export function betterCountSheep(arrayOfSheep: (boolean | undefined | null)[]){
    return arrayOfSheep.filter(Boolean).length
}

export const check = (a: (number | string)[], x: number | string): boolean => {
    const found = a.find(item => item === x)
    return found === x
}

//reduce usage example
export function squareSum(numbers: number[]): number {
    return numbers.map(n => n * n).reduce((previous, current) => previous + current, 0);
}

export function reverseWords(str: string): string {
    return Array.from(str).reverse().reduce((p,c) => p + c).split(' ').reverse().join(' ')
}

export function areYouPlayingBanjo(name: string): string {
    return name.charAt(0) === 'r' || name.charAt(0) === 'R' ? name + ' plays banjo' : name + ' does not play banjo'
}

export function StringEndsWith(str: string, ending: string): Boolean {
    if (ending === '') return true
    return str.slice(-ending.length) === ending;
}

export function between(a: number, b: number): number[] {
    let numberArray = []

    for(a; a < b+1; a++){
        numberArray.push(a)
    }
    return numberArray;
}

export function number(busStops: [number, number][]): number {
    let passengers = 0;

    busStops.map(arr => {
        passengers = passengers + arr[0];
        passengers = passengers - arr[1];
    })
    return passengers;
}

export function isSquare(n: number): boolean {
    return Math.sqrt(n) * Math.sqrt(n) === n;
}

export const sayHello = (name: string) => `Hello, ${name}`;

export function findShort(s: string): number {
        const numbersArray = s.split(' ').map(word => {
            return word.length;
    })
    return numbersArray.reduce((p, c) => p < c ? p : c);
}

export const centuryFromYear = (year: number): number => {
    const n = year/100;
    return n % 1 === 0 ? n : Math.floor(n) + 1;
};

export class Kata {
    static getCount(str: string): number {
        return str.match(/[aeiou]/g)?.length || 0

        // const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        // let count = 0
        //
        // for (const c of str) {
        //     if (vowels.has(c)) count++
        // }
        // return count

        // const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        // return Array.from(str).reduce((a, c) => vowels.has(c) ? ++a : a ,0)

        // return [...str].filter(l => vowels.has(l)).length

        // Array.from(str).map(l => {
        //     if (vowels.has(l)) count ++
        // });
        // return count
    }
}

export function deadFish(data: string): number[] {
    let numberArray = []
    let count = 0

    // for(const command of data) {
    //
    //     if (command === 'i') {
    //         count++
    //     } else if (command === 'd') {
    //         count--
    //     } else if (command === 's') {
    //         count = Math.pow(count, 2)
    //     } else if (command === 'o') {
    //         numberArray.push(count)
    //     }
    // }

    for(const command of data){
        switch(command){
            case 'i': count++; break
            case 'd': count--; break
            case 's': count = Math.pow(count, 2); break
            case 'o': numberArray.push(count)
        }
    }
    return numberArray
}

export const isPangram = (phrase: string): boolean => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.every(l => phrase.toLowerCase().includes(l))
}

export const likes = (a : string[]) : string => {
    let liked = ''
    if(a.length === 0) { liked ='no one likes this'}
    if(a.length === 1) { liked = `${a} likes this`}
    if(a.length > 1 && a.length < 3) { liked = `${a[0]} and ${a[1]} like this`}
    if(a.length > 2 && a.length < 4) { liked = `${a[0]}, ${a[1]} and ${a[2]} like this`}
    if(a.length > 3) { liked = `${a[0]}, ${a[1]} and ${a.length-2} others like this`}
    return liked
}

//TODO: solve w/Matt
export function sumPairs(integers: number[], result: number): [number, number] {
    return [1,1]
}

export function orderWeight(string: string): string {
    function stringWeight(a: string) {
        return Array.from(a).map(n => Number(n)).reduce((a, c) => a + c, 0);
    }

    const arrayOfStrings = string.split(' ').sort();
    return arrayOfStrings.sort((a, b) => stringWeight(a) - stringWeight(b)).join(' ');
}

export function orderWeightObj(string: string): string {
    function getWeight(text: string) {
        return Array.from(text).map(t => Number(t)).reduce((a, c) => a + c, 0);
    }

    const arrayOfStrings = string.split(' ').sort();

    const objArray = arrayOfStrings.map(text => ({text, weight: getWeight(text)}));
    const arraySortedByWeight = objArray.sort((a, b) => a.weight - b.weight);
    return arraySortedByWeight.map(obj => obj.text).join(' ');
}

export const pigIt = (a : string) : string =>  {
    const arrayOfStrings = a.split(' ');
    const badSymbols = new Set(['?', '!', ',', '.', ''])

    const resultArr = arrayOfStrings.map(word => {
        if (badSymbols.has(word)) return word;
        const wordArray = Array.from(word)
        const firstLetter = wordArray.shift();
        wordArray.push(firstLetter || '');
        return `${wordArray.join('')}ay`
    })
    return resultArr.join(' ')
}

export function switchTest(arr: Array<any>) : Array<any> {
    const returnArr = new Array()
    for (const el of arr) {
        switch (el) {
            case 2 : returnArr.push(el * 2); break
            case 4 : returnArr.push(el * 2); break
            case 'a' : returnArr.push(el.toUpperCase()); break
            case 'c' : returnArr.push(el.toUpperCase()); break
            case 'e' : returnArr.push(el.toUpperCase());
        }
    }
    return returnArr;
}