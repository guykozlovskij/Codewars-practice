class stringWithWeight {
    constructor(str) {
        this.str = str;
        weight: Array.from(str).map(t => Number(t)).reduce((a, c) => a + c, 0);
    }
}