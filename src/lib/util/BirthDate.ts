export type BirthDate = {
    year: number,
    month: number,
    day: number,
};

export const calculateAgeOfYearEnd = (targetYear: number, birthDate: BirthDate): number => {
    const val = (birthDate.month === 1 && birthDate.day === 1) ? 1 : 0;
    return targetYear - birthDate.year + val;
};

