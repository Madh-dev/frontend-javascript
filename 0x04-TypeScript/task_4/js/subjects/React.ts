// // task_4/js/subjects/React.ts
// /// <reference path="./Subject.ts" />

// namespace Subjects {
//   // Declaration merging: extend Teacher interface
//   export interface Teacher {
//     experienceTeachingReact?: number;
//   }

//   export class React extends Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for React";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
//         return "No available teacher";
//       }
//       return `Available Teacher: ${this.teacher.firstName}`;
//     }
//   }
// }


import { Subject } from './Subject';
import { Teacher } from './Teacher';

// Extend Teacher for React
export interface ReactTeacher extends Teacher {
  experienceTeachingReact?: number;
}

export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || (this.teacher as ReactTeacher).experienceTeachingReact === undefined || (this.teacher as ReactTeacher).experienceTeachingReact <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
