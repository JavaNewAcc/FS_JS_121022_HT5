let lastIDNumber = 0;

function userConstructor(name, surname, age) {
    lastIDNumber++;
    if (lastIDNumber <= 10) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.IDnumber = lastIDNumber;
        this.info = this.printInfo();
    }
    else { this.info = `There is no free space. This user has not been created.` }
}

userConstructor.prototype.printInfo = function () {
    return `This user name is ${this.name}, surname is ${this.surname} and he(she) is ${this.age}. His/Her ID is ${this.IDnumber}`
}


const user_1 = new userConstructor("John", "Lime", 25);
const user_2 = new userConstructor("Mike", "Simpson", 34);
const user_3 = new userConstructor("Pete", "Young", 18);
const user_4 = new userConstructor("John", "Lima", 25);
const user_5 = new userConstructor("Helen", "Li", 26);
const user_6 = new userConstructor("Paul", "Shannon", 48);
const user_7 = new userConstructor("Linda", "Samson", 56);
const user_8 = new userConstructor("Julia", "Cannon", 18);
const user_9 = new userConstructor("Chester", "Madisson", 33);
const user_10 = new userConstructor("Claire", "Jam", 36);
const user_11 = new userConstructor("Tom", "Watsson", 27);
const user_12 = new userConstructor("Jim", "Peters", 31);

console.log(user_1.info);
console.log(user_2.info);
console.log(user_3.info);
console.log(user_4.info);
console.log(user_5.info);
console.log(user_6.info);
console.log(user_7.info);
console.log(user_8.info);
console.log(user_9.info);
console.log(user_10.info);
console.log(user_11.info);
console.log(user_12.info);
