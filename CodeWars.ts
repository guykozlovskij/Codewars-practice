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
    const [firstName, lastName] = name.split(" ")
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
