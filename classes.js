class Animal {
    constructor(name) {
        this.name = name
    }

    protest() {
        console.log(`I'm a ${this.constructor.name}! My voice counts!`)
    }
}

class Duck extends Animal {
    constructor(name, occupation) {
        super(name)
        this.occupation = occupation
    }
    quack() {
        console.log('Quack. I\'m a savvy business duck.')
    }
}

class Dog extends Animal {
    constructor(name, occupation) {
        super(name)
        this.occupation = occupation
    }
}

class Mouse extends Animal {
    constructor(name) {
        super(name)
    }
}

const goofy = new Dog('Goofy', 'Plumber')
console.log(goofy.name)
// Goofy
goofy.protest()
// I'm a Dog! My voice counts!
console.log(goofy.occupation)