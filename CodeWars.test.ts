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
    StringEndsWith, between, number,
    isSquare, sayHello, findShort, centuryFromYear, Kata, parse
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
            expect(parse("iiisdoso")).to.eql([ 8, 64 ]);
            expect(parse("iiisxxxdoso")).to.eql([ 8, 64 ]);
        });
    });
});