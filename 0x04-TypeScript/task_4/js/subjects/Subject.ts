// namespace Subjects {
// export class Subject {
// teacher: Teacher | null = null;


// setTeacher(teacher:Teacher) {
// this.teacher = teacher;
// }
// }
// }


// Base Subject class
import { Teacher } from './Teacher';

export abstract class Subject {
  teacher: Teacher;

  constructor(teacher?: Teacher) {
    if (teacher) this.teacher = teacher;
  }

  abstract getRequirements(): string;
  abstract getAvailableTeacher(): string;
}
