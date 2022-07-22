import {
    fakeBinary,
    fakeBinary2,
    abbreviateName,
    DNAtoRNA,
    BetterDNAtoRNA,
    countSheep,
    betterCountSheep,
    check,
    squareSum,
    reverseWords,
    areYouPlayingBanjo,
    StringEndsWith,
    between,
    number,
    isSquare,
    sayHello,
    findShort,
    centuryFromYear,
    Kata,
    deadFish,
    isPangram,
    likes,
    sumPairs,
    orderWeight,
    orderWeightObj, pigIt
} from "./CodeWars";
import {expect} from "chai";

describe('fakeBinary', () => {
    it('in string returns 0 if number is less than 5, or 1 if more than 5', () => {
        expect(fakeBinary('123456789')).to.equal('000011111');
    });

    it('test fakeBinary2', () => {
        expect(fakeBinary2('253486123156789')).to.equal('010011000011111');
    });
});

describe('Abbreviate Name', () => {
    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Guy Kozlovskij')).to.equal('G.K');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('dfgsdfghfdg hgrthrtyas')).to.equal('D.H');
    });
    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Aks Ballal')).to.equal('A.B');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Dan Bodart')).to.equal('D.B');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('erkopekopv gdfgdf')).to.equal('E.G');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Loreta Koz')).to.equal('L.K');
    });
});

describe('DNAtoRNA', () => {
    it('replaces T with U in a string', () => {
       expect(DNAtoRNA('TTFSFDKDJGTTTUUUTT')).to.equal('UUFSFDKDJGUUUUUUUU');
    });
});

describe('DNAtoRNA', () => {
    it('replaces T with U in a string', () => {
        expect(BetterDNAtoRNA('GCAT')).to.equal('GCAU');
    });
});

describe('countSheep', () => {
    const sheepArray = [
        true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true
    ];

    it('counts all true items in an array', () => {
        expect(countSheep(sheepArray)).to.equal(17);
    });

    it('counts all true items in an array', () => {
        expect(betterCountSheep(sheepArray)).to.equal(17);
    });
});

describe('check', () => {
    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 'b')).to.equal(false);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 115)).to.equal(true);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 104)).to.equal(true);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 54)).to.equal(false);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], '54')).to.equal(false);
    });
});

describe("squareSum", function(){
    it("Should return a number", () => {
        expect(squareSum([1,2])).to.equal(5);
        expect(squareSum([0, 3, 4, 5])).to.equal(50);
        expect(squareSum([])).to.equal(0);
    });
});

describe("reverseWords", function(){
    it("reverses every word in a string", function() {
        expect(reverseWords('This  is an example!')).to.equal('sihT  si na !elpmaxe');
    });
});

describe('areYouPlayingBanjo', () => {
    it('if name starts with R, you play banjo...', () => {
        expect(areYouPlayingBanjo("Adam")).to.equal('Adam does not play banjo');
        expect(areYouPlayingBanjo("rob")).to.equal('rob plays banjo');
    });
});

describe("StringEndsWith", function() {
    it("Should return true if string ends with second arg, esle - false", function() {
        expect(StringEndsWith('abcde', 'cde')).to.equal(true);
        expect(StringEndsWith('abcde', 'abc')).to.equal(false);
        expect(StringEndsWith('abc', '')).to.equal(true);
    });
});

describe("between", () => {
    it("returns an array with all numbers in between a and b, including a and b", () => {
        expect(between(4, 12)).to.eql([4,5,6,7,8,9,10,11,12])
    });
});

describe('number', () => {
    it('basic tests', () => {
        expect(number([[10,0],[3,5],[5,8]])).to.eql(5);
        expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).to.eql(17);
        expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).to.eql(21);
        expect(number([[0,0]])).to.eql(0)
    });
});

describe("solution", function() {
    it("should work for some examples", function() {
        expect(isSquare(-1)).to.be.false;
        expect(isSquare( 0)).to.be.true;
        expect(isSquare( 3)).to.be.false;
        expect(isSquare( 4)).to.be.true;
        expect(isSquare(25)).to.be.true;
        expect(isSquare(26)).to.be.false;
    });
});

describe("sayHello", () => {
    it("Should pass basic tests", () => {
        expect(sayHello('Mr. Spock')).to.eql('Hello, Mr. Spock');
    });
});

describe("Sample Test Cases", function(){
    it("Should return the length of the shortest word(s)", function() {
        expect(findShort("bitcoin take over the world maybe who knows perhaps")).to.eql(3);
        expect(findShort("turns out random test cases are easier than writing out basic ones")).to.eql(3);
        expect(findShort("lets talk about javascript the best language")).to.eql(3);
        expect(findShort("i want to travel the world writing code one day")).to.eql(1);
        expect(findShort("Lets all go on holiday somewhere very cold")).to.eql(2);
        expect(findShort("Let's travel abroad shall we")).to.eql(2);
    });
});

describe("centuryFromYear", () => {
    it("should return 18 when input is 1705", () => {
        const expected = 18;
        const actual = centuryFromYear(1705);

        expect(actual).to.eql(expected);
    });

    it("should return 19 when input is 1900", () => {
        const expected = 19;
        const actual = centuryFromYear(1900);

        expect(actual).to.eql(expected);
    });

    it("should return 17 when input is 1601", () => {
        const expected = 17;
        const actual = centuryFromYear(1601);

        expect(actual).to.eql(expected);
    });

    it("should return 20 when input is 2000", () => {
        const expected = 20;
        const actual = centuryFromYear(2000);

        expect(actual).to.eql(expected);
    });

    it("should return 15 when input is 1498", () => {
        const expected = 15;
        const actual = centuryFromYear(1498);

        expect(actual).to.eql(expected);
    });

    describe("getCount", function(){
        it ("should pass a sample test", function(){
            expect(Kata.getCount("abracadabra")).to.eql(5)
        });
    });

    describe("deadFish", function() {
        it("should parse string", function() {
            expect(deadFish("iiisdoso")).to.eql([ 8, 64 ]);
            expect(deadFish("iiisxxxdoso")).to.eql([ 8, 64 ]);
        });
    });
});

describe("example", function() {
    it("test", function() {
        expect(isPangram("The quick brown fox jumps over the lazy dog.")).to.eql(true);
        expect(isPangram("This is not a pangram.")).to.eql(false);
    });
});

describe('likes', function() {
    it('should return correct text', function() {
        expect(likes([])).to.eql('no one likes this');
    });
    it('should return correct text', function() {
        expect(likes(['Peter'])).to.eql('Peter likes this');
    });
    it('should return correct text', function() {
        expect(likes(['Jacob', 'Alex'])).to.eql('Jacob and Alex like this');
    });
    it('should return correct text', function() {
        expect(likes(['Max', 'John', 'Mark'])).to.eql('Max, John and Mark like this');
    });
    it('should return correct text', function() {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to.eql('Alex, Jacob and 2 others like this');
    });
});

describe("example", function() {
    const
        l1: number[] = [1, 4, 8, 7, 3, 15],
        l2: number[] = [1, -2, 3, 0, -6, 1],
        l3: number[] = [20, -13, 40],
        l4: number[] = [1, 2, 3, 4, 1, 0],
        l5: number[] = [10, 5, 2, 3, 7, 5],
        l6: number[] = [4, -2, 3, 3, 4],
        l7: number[] = [0, 2, 0],
        l8: number[] = [5, 9, 13, -3];

    it("Basic: [" + l1 + "] should return [1, 7] for sum = 8", () => {
        expect(sumPairs(l1, 8)).to.eql([1, 7]);
    });
    it("Negatives: ["+l2+"] should return [0, -6] for sum = -6", () => {
        expect(sumPairs(l2, -6)).to.eql([0, -6]);
    });
    it("No Match: ["+l3+"] should return undefined for sum = -7", () => {
        expect(sumPairs(l3, -7)).to.eql(undefined);
    });
    it("First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ", () => {
        expect(sumPairs(l4, 2)).to.eql([1, 1]);
    });
    it("First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ", () => {
        expect(sumPairs(l5, 10)).to.eql([3, 7]);
    });
    it("Duplicates: ["+l6+"] should return [4, 4] for sum = 8", () => {
        expect(sumPairs(l6, 8)).to.eql([4, 4]);
    });
    it("Zeroes: ["+l7+"] should return [0, 0] for sum = 0", () => {
        expect(sumPairs(l7, 0)).to.eql([0, 0]);
    });
    it("Subtraction: ["+l8+"] should return [13, -3] for sum = 10", () => {
        expect(sumPairs(l8, 10)).to.eql([13, -3]);
    });
});

describe("orderWeight", function() {
    it("sorts by weight lowest to highest (weight = the SUM of each number)", function() {
        expect(orderWeight("103 123 4444 99 2000")).to.eql("2000 103 123 4444 99");
    });
    it("sorts by weight lowest to highest (weight = the SUM of each number)", function() {
        expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).to.eql("11 11 2000 10003 22 123 1234000 44444444 9999");
    });
});

describe("orderWeightObj", function() {
    it("sorts by weight lowest to highest (weight = the SUM of each number)", function() {
        expect(orderWeightObj("103 123 4444 99 2000")).to.eql("2000 103 123 4444 99");
    });
    it("sorts by weight lowest to highest (weight = the SUM of each number)", function() {
        expect(orderWeightObj("2000 10003 1234000 44444444 9999 11 11 22 123")).to.eql("11 11 2000 10003 22 123 1234000 44444444 9999");
    });
});

describe("pigIt", () => {
    it("test", () => {
        expect(pigIt('Pig latin is cool')).to.eql('igPay atinlay siay oolcay');
        expect(pigIt('This is my string')).to.eql('hisTay siay ymay tringsay');
        expect(pigIt('This is my string ! , contains . other ? crap .')).to.eql('hisTay siay ymay tringsay ! , ontainscay . theroay ? rapcay .');
        expect(pigIt('This is my string !  , contains .  other ? crap .')).to.eql('hisTay siay ymay tringsay !  , ontainscay .  theroay ? rapcay .');
    });
});
