function abbreviateName(name: string){
    const [firstName, lastName] = name.split(" ")
    return (`${firstName.charAt(0)}.${lastName.charAt(0)}`).toUpperCase()
}
// console.log(abbreviateName("guy kozlovskij"))


function fakeBinary(x: string){
    const stringToArray = x.split('')
     const newArray = stringToArray.map((number: any) => {
         return number < 5 ? (number = 0) : (number = 1)
     })
    return newArray.join().replace(/,/g, '')
}
// console.log(fakeBinary('486954534253642531489+12'))


function fakeBinary2(x: any){
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
// console.log(fakeBinary2('123456789'))


function DNAtoRNA(dna: string) {
    const dnaArray = dna.split('')
    const rna = dnaArray.map(x => {
        if (x === 'T'){
            return x = 'U'
        }
        return x
    })
    return rna.join().replace(/,/g, '')
}
// console.log(DNAtoRNA("GCAU"))


function BetterDNAtoRNA(dna: string) {
    const rna = dna.split('').map(x => {
        return x === 'T' ? x = 'U': x
    })
    return rna.join().replace(/,/g, '')
}
// console.log(BetterDNAtoRNA("GCAT"))

