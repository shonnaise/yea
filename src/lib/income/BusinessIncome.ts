import { IncomeAmount } from "./IncomeAmount"

export const calculateBusinessIncomeAmount = (earnings: number, deductions: number): IncomeAmount => {
    return {
        earnings: earnings,
        deductions: deductions,
        income: earnings - deductions,
    }
}

