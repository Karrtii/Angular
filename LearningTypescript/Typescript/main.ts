export{}

//useful terminal functions
//tsc main.ts
//node main.ts
//tsc main --watch

//variable declarations
let message = "Hello World";
console.log(message);

let x = 10; //let is for variables that change like sum
const y = 20; //const is for not so changing variables like title

console.log("-------------------------------------------")
//------------------------------------------------------------------------------------------------------------

//variable types
let isBeginner: boolean = true;
let total: number = 0;
let planet: string = "Mercury";

let sentence: string = `The first planet from the Sun is ${planet}
Earth is the third planet from the Sun`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22];

enum Color {Red , Green, Blue};
enum Apparel {Hat = 5 , Socks, Gloves};

let color: Color = Color.Blue;
let apparel: Apparel = Apparel.Gloves;

console.log(color);
console.log(apparel);

let randomValue: any = 10;
randomValue = true;
randomValue = "Battery";

let unknownVariable: unknown = "Thor";

function hasName(obj: any): obj is {name: string}
{
    return !!obj &&
        typeof obj == "object" && "name" in obj
}

if(hasName(unknownVariable))
{
    console.log(unknownVariable.name);
}

console.log((unknownVariable as string).toUpperCase());

let a;
a = 10;
a = true;

let b = 20;
//b = true; infers the type

let multiType: number | boolean;
multiType = 20;
multiType = true;

console.log("-------------------------------------------")
//------------------------------------------------------------------------------------------------------------

//functions
function add(num1: number, num2: number)
{
    return num1 + num2;
}

console.log(add(5, 10));

function subtract(num1: number, num2: number, num3?: number) //the ? at num3 means that this parameter is optional. The optional parameters ALWAYS have to be after the required parameters
{
    if(num3)
        return num1-num2-num3;
    else
        return num1-num2;
}

console.log(subtract(50,10));

function multiply(num1: number, num2: number, num3: number = 10) //num3 in this case is a default parameter, but it can be overridden as shown in the console.log() below
{
    if(num3)
        return num1*num2*num3;
    else
        return num1*num2;
}

console.log(multiply(10,10, 100))

let person2 = {
    firstName: "Bruce",
    lastName: "Wayne"
};

function fullName(person: {firstName: string, lastName: string})
{
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName(person2)

console.log("-------------------------------------------")
//------------------------------------------------------------------------------------------------------------

//Interfaces
interface Person
{
    firstName: string,
    lastName?: string //the ? means that lastName is optional
}

let person3 = {
    firstName: "Peter",
    lastName: "Parker"
};

let person4 = {
    firstName: "Kratos",
};

function fullNameUsingInterface (person: Person)
{
    console.log(`${person.firstName} ${person.lastName}`);
}

fullNameUsingInterface(person3);
fullNameUsingInterface(person4);

console.log("-------------------------------------------")
//------------------------------------------------------------------------------------------------------------

//Classes and access modifiers(public - accessed anywhere, private - accessed only in the contained class, protected - accessed in the contained and derived classes (inheritance))
class Employee
{
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet()
    {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let employee1 = new Employee("Nathan Drake");
console.log(employee1.employeeName);
employee1.greet();


class Manager extends Employee //inheritance
{
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork()
    {
        console.log(`Manager delegating tasks`)
    }
}

let manager1 = new Manager("Booker");
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);