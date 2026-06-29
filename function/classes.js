// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`hello ${this.name} uth jao`);
//     }
// }

// const student = new Student("yash", 20);

// console.log(student);

// student.greet();


class person {
    constructor (name) {
        this.name = name;
    }
    greet() { // parent method
       console.log('hello ${this.name}');
    }
}

class student extends person {
    constructor(name, course) {
        super (name);
        this.course = course;
    }

    study() {
        console.log('${this.name} studies ${this.course}');
    }
}

const studentt = new student ("yash","mern")
studentt.greet()
studentt.study()