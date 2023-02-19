import { makeIncomeAmountCalculator,  } from "../IncomeAmount";
import { TotalIncomeAmountCalculator } from "../TotalIncome";

describe("合計所得の計算", () => {
    test("給与所得と事業所得の合計", () => {
        const calculator = makeIncomeAmountCalculator(new Date().getFullYear());
        const salaryIncomeAmount = calculator.calculateSalaryIncomeAmount(1500000);
        const businessIncomeAmount = calculator.calculateBusinessIncomeAmount(1000000, 500000);
        const totalIncomeAmountCalculator = new TotalIncomeAmountCalculator();
        totalIncomeAmountCalculator.add('給与所得', salaryIncomeAmount);
        totalIncomeAmountCalculator.add('事業所得', businessIncomeAmount);
        const totalIncomeAmount = totalIncomeAmountCalculator.calc();
        expect(totalIncomeAmount.earnings).toBe(2500000);
        expect(totalIncomeAmount.deductions).toBe(1050000);
        expect(totalIncomeAmount.income).toBe(1450000);
        expect(totalIncomeAmount.incomeAmounts['給与所得']?.earnings).toBe(1500000);
        expect(totalIncomeAmount.incomeAmounts['事業所得']?.earnings).toBe(1000000);
    })
});