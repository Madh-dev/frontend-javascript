// task_5/js/main.ts

// Define MajorCredits with brand
export interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits"; // brand to distinguish it
}

// Define MinorCredits with brand
export interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits"; // brand to distinguish it
}

// Sum function for MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

// Sum function for MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}
