// // task_4/js/subjects/Java.ts
// /// <reference path="./Subject.ts" />

// namespace Subjects {
//   // Declaration merging: extend Teacher interface
//   export interface Teacher {
//     experienceTeachingJava?: number;
//   }

//   export class Java extends Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for Java";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
//         return "No available teacher";
//       }
//       return `Available Teacher: ${this.teacher.firstName}`;
//     }
//   }
// }


import { Subject } from './Subject';
import { Teacher } from './Teacher';

// Extend Teacher for Java
export interface JavaTeacher extends Teacher {
  experienceTeachingJava?: number;
}

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || (this.teacher as JavaTeacher).experienceTeachingJava === undefined || (this.teacher as JavaTeacher).experienceTeachingJava <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
