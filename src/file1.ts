class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
}

let greeter = (person: Person) => `Hello ${person.firstName} ${person.middleInitial} ${person.lastName}`;

let user = new Student("Suta", "N.", "Gu");

document.body.innerHTML = greeter(user);