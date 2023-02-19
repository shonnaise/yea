import { IncomeAmount, IncomeType } from "./IncomeAmount";
export type TotalIncomeAmount = Readonly<{
    earnings: number;
    deductions: number;
    income: number;
    incomeAmounts: Readonly<Partial<{[key in IncomeType]: IncomeAmount}>>
}>;

export class TotalIncomeAmountCalculator {
    private incomeAmounts: Partial<{[key in IncomeType]: IncomeAmount}>;
    constructor() {
        this.incomeAmounts = {};
    }
    public add(incomeType: IncomeType, incomeAmount: IncomeAmount) {
        this.incomeAmounts[incomeType] = incomeAmount;
        return this;
    }
    public calc(): TotalIncomeAmount {
        const earnigns = Object.values(this.incomeAmounts).map(e => e.earnings).reduce((prev, current) => prev + current);
        const deductions = Object.values(this.incomeAmounts).map(e => e.deductions).reduce((prev, current) => prev + current);
        const income = Object.values(this.incomeAmounts).map(e => e.income).reduce((prev, current) => prev + current);
        const totalIncomeAmount: TotalIncomeAmount = {
            earnings: earnigns,
            deductions: deductions,
            income: income,
            incomeAmounts: this.incomeAmounts,
        }
        return totalIncomeAmount;
    }
}