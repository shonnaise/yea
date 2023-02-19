import { calculateAgeOfYearEnd } from "../BirthDate";

describe('年分', () => {
    test('1月1日生まれは12月31日に1歳になる', () => {
        expect(calculateAgeOfYearEnd(2022, {
            year: 2022,
            month: 1,
            day: 1,
        })).toBe(1);
    });

    test('1月2日生まれは1月1日に1歳になる', () => {
        expect(calculateAgeOfYearEnd(2022, {
            year: 2022,
            month: 1,
            day: 2,
        })).toBe(0);
    });
    test('1983年12月23日生まれは2023年で40歳になる', () => {
        expect(calculateAgeOfYearEnd(2023, {
            year: 1983,
            month: 12,
            day: 23,
        })).toBe(40);        
    });
})