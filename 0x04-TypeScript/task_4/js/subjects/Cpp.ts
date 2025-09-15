// // task_4/js/subjects/Cpp.ts
// /// <reference path="./Subject.ts" />

// namespace Subjects {
//   // Declaration merging: extend Teacher interface
//   export interface Teacher {
//     experienceTeachingC?: number;
//   }

//   export class Cpp extends Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for Cpp";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
//         return "No available teacher";
//       }
//       return `Available Teacher: ${this.teacher.firstName}`;
//     }
//   }
// }

// task_4/js/subjects/Cpp.ts
import { Subject } from './Subject';
import { Teacher } from './Teacher';
declare module './Teacher' {
  interface Teacher {
    experienceTeachingC?: number;
  }
}
export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}

// Extend Teacher interface for Cpp
export interface CppTeacher extends Teacher {
  experienceTeachingC?: number;
}

