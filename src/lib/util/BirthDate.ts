import { number, z } from 'zod';

export const BirthDateSchema = z.object({
    year: z.number(),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
});

/**
 * 生年月日
 * @property year 年
 * @property month 月
 * @property day 日
 */
export type BirthDate = z.infer<typeof BirthDateSchema>;

export const calculateAgeOfYearEnd = (targetYear: number, birthDate: BirthDate): number => {
    const val = (birthDate.month === 1 && birthDate.day === 1) ? 1 : 0;
    return targetYear - birthDate.year + val;
};

