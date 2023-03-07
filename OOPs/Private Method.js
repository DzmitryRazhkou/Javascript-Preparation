class ClassWithPrivateMethod {
    #privateMethod() {
        return "hello world";
    }

    getPrivateMessage() {
        return this.#privateMethod();
    }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());

class Mobile {

    constructor(pin) {
        this.#PIN = pin
    }

    makeCall() {
        console.log("Hey Calling!")
    }

    #PIN;

    openBankApplication() {
        if (this.#PIN == 1234) {
            console.log("Open App")
        } else if (this.#PIN == undefined) {
            console.log(typeof this.#PIN)
            console.log("Access Denied")
        } else {
            console.log("Denied")
        }
    }
}

const mob = new Mobile("1234")
mob.makeCall()
mob.openBankApplication()

