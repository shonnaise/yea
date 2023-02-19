import { calculateSalaryIncomeAmount } from "./SalaryIncome";
import { calculateBusinessIncomeAmount } from "../BusinessIncome";
export const getIncomeAmountCalculator = (targetYear: number) => {
    return {
        calculateBusinessIncomeAmount: calculateBusinessIncomeAmount,
        calculateSalaryIncomeAmount: calculateSalaryIncomeAmount,
    };
}
