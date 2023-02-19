import { getIncomeAmountCalculator } from "./IncomeAmountCalculator";
import { getIncomeAmountCalculator as getIncomeAmountCalculator2019 } from "./2019/IncomeAmountCalculator";

const incomeTypes = ['給与所得', '事業所得', '雑所得', '不動産所得', '利子所得', '配当所得', '譲渡所得', '一時所得', '山林所得', '退職所得'] as const;
export type IncomeType = typeof incomeTypes[number];

export type IncomeAmount = Readonly<{
    earnings: number;
    deductions: number;
    income: number;
}>;

export const makeIncomeAmountCalculator = (targetYear: number) => {
    if (targetYear <= 2019) {
        return getIncomeAmountCalculator2019(targetYear);
    } else {
        return getIncomeAmountCalculator(targetYear);
    }
}
