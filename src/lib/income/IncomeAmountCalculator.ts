import { calculateBusinessIncomeAmount } from "./BusinessIncome";
import { calculateSalaryIncomeAmount } from "./SalaryIncome";
import { calclulateMiscellaneousIncomeAmount } from "./MiscellaneousIncome";

export const getIncomeAmountCalculator = (targetYear: number) => {
    return {
        calculateBusinessIncomeAmount: calculateBusinessIncomeAmount,
        calculateSalaryIncomeAmount: calculateSalaryIncomeAmount,
        calclulateMiscellaneousIncomeAmount: calclulateMiscellaneousIncomeAmount,
    };    
}
