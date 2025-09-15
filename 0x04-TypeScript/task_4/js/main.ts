// import { Teacher } from './subjects/Teacher';
// // task_4/js/main.ts

// /// <reference path="./subjects/Cpp.ts" />
// /// <reference path="./subjects/Java.ts" />
// /// <reference path="./subjects/React.ts" />

// import { Subjects } from "./subjects/Cpp";
// // import { Subjects as JavaSubjects } from "./subjects/Java";
// // import { Subjects as ReactSubjects } from "./subjects/React";

// // Export constants for each subject
// // export const cpp = new Subjects.Cpp();
// // export const java = new Subjects.Java();
// // export const react = new Subjects.React();

// // Create one teacher with experienceTeachingC = 10
// export const cTeacher:Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   experienceTeachingC: 10,
// };

// // ---- Cpp ----
// console.log("C++");
// cpp.setTeacher(cTeacher);
// console.log(cpp.getRequirements());
// console.log(cpp.getAvailableTeacher());

// // ---- Java ----
// console.log("Java");
// java.setTeacher(cTeacher);
// console.log(java.getRequirements());
// console.log(java.getAvailableTeacher());

// // ---- React ----
// console.log("React");
// react.setTeacher(cTeacher);
// console.log(react.getRequirements());
// console.log(react.getAvailableTeacher());


import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
