interface Teacher {
readonly firstName: string; // readonly -> only at initialization
readonly lastName: string; // readonly -> only at initialization
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any; // allow additional properties
}


const teacher3: Teacher = {
firstName: 'John',
lastName: 'Doe',
fullTimeEmployee: false,
location: 'London',
contract: false,
};


console.log(teacher3);

interface Directors extends Teacher {
numberOfReports: number;
}

interface Director extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
firstName: 'John',
lastName: 'Doe',
location: 'London',
fullTimeEmployee: true,
numberOfReports: 17,
};


console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return firstName.charAt(0) + '. ' + lastName;
};



console.log(printTeacher('John', 'Doe')); // -> J. Doe


interface StudentInterface {
firstName: string;
lastName: string;
workOnHomework(): string;
displayName(): string;
}


interface StudentConstructor {
new (firstName: string, lastName: string): StudentInterface;
}


class StudentClass implements StudentInterface{
constructor(public firstName: string, public lastName: string) {}


workOnHomework(): string {
return 'Currently working';
}


displayName(): string {
return `${this.firstName} ${this.lastName}`;
}
}


const s = new StudentClass('John', 'Doe');
console.log(s.displayName()); // John
console.log(s.workOnHomework()); // Currently working