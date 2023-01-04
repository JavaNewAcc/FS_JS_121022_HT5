let lastIDNumber = 0;

function userConstructor(name, surname, age) {
    lastIDNumber++;
    if (lastIDNumber <= 10) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.IDnumber = lastIDNumber;
        // this.info = this.printInfo();
    }
    else { this.info = `There is no free space. This user has not been created.` }
}

userConstructor.prototype.printInfo = function () {
    return `This user name is ${this.name}, surname is ${this.surname} and he(she) is ${this.age}. His/Her ID is ${this.IDnumber}`
}

userConstructor.prototype.alterName = function (newName) {
    this.name = newName;
}

userConstructor.prototype.alterAge = function (newAge) {
    this.newAge=parseInt(newAge);
    if (newAge <= 0) {
        alert(`Age cannot be less or equal to 0`);
        return this.age;
    }
    else if (newAge != this.newAge) {
        alert(`Please enter numbers only`);
        return this.age;
    }
    else if (newAge==null){
        alert(`Age has not been changed`);
        return this.age;
    }
    else { this.age = newAge; }
}

let user_1 = new userConstructor("John", "Lime", 25);
let user_2 = new userConstructor("Mike", "Simpson", 34);
let user_3 = new userConstructor("Pete", "Young", 18);

console.log(`Initial User data:`)
console.log(user_1.printInfo());
console.log(user_2.printInfo());

console.log(`Altered User data:`)

user_1.alterName(prompt(`Please enter new user name of user with ID ${user_1.IDnumber}`));
user_1.alterAge(prompt(`Please enter new age of user with ID ${user_1.IDnumber}`));;
user_2.alterName(prompt(`Please enter new user name of user with ID ${user_2.IDnumber}`));
user_2.alterAge(prompt(`Please enter new age of user with ID ${user_2.IDnumber}`));;

console.log(user_1.printInfo());
console.log(user_2.printInfo());
