import { makeIncomeAmountCalculator } from "../IncomeAmount";

describe('令和元年以前の給与所得の計算', () => {
    const calculator = makeIncomeAmountCalculator(2019);
    test('650,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(650999);
        expect(incomeAmount.earnings).toBe(650999);
        expect(incomeAmount.deductions).toBe(650999);
        expect(incomeAmount.income).toBe(0);
    })
    test('651,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(651000);
        expect(incomeAmount.earnings).toBe(651000);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(1000);
    })
    test('1,618,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1618999);
        expect(incomeAmount.earnings).toBe(1618999);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(968999);
    })
    test('1,619,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1619000);
        expect(incomeAmount.earnings).toBe(1619000);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(969000);
    })
    test('1,619,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1619999);
        expect(incomeAmount.earnings).toBe(1619999);
        expect(incomeAmount.deductions).toBe(650999);
        expect(incomeAmount.income).toBe(969000);
    })
    test('1,620,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1620000);
        expect(incomeAmount.earnings).toBe(1620000);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(970000);
    })
    test('1,621,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1621999);
        expect(incomeAmount.earnings).toBe(1621999);
        expect(incomeAmount.deductions).toBe(651999);
        expect(incomeAmount.income).toBe(970000);
    })
    test('1,622,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1622000);
        expect(incomeAmount.earnings).toBe(1622000);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(972000);
    })
    test('1,623,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1623999);
        expect(incomeAmount.earnings).toBe(1623999);
        expect(incomeAmount.deductions).toBe(651999);
        expect(incomeAmount.income).toBe(972000);
    })
    test('1,624,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1624000);
        expect(incomeAmount.earnings).toBe(1624000);
        expect(incomeAmount.deductions).toBe(650000);
        expect(incomeAmount.income).toBe(974000);
    })
    test('1,627,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1627999);
        expect(incomeAmount.earnings).toBe(1627999);
        expect(incomeAmount.deductions).toBe(653999);
        expect(incomeAmount.income).toBe(974000);
    })
    test('1,628,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1628000);
        expect(incomeAmount.earnings).toBe(1628000);
        expect(incomeAmount.deductions).toBe(651200);
        expect(incomeAmount.income).toBe(976800);
    })
    test('1,799,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1799999);
        expect(incomeAmount.earnings).toBe(1799999);
        expect(incomeAmount.deductions).toBe(722399);
        expect(incomeAmount.income).toBe(1077600);
    })
    test('1,800,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1800000);
        expect(incomeAmount.earnings).toBe(1800000);
        expect(incomeAmount.deductions).toBe(720000);
        expect(incomeAmount.income).toBe(1080000);
    })
    test('3,599,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(3599999);
        expect(incomeAmount.earnings).toBe(3599999);
        expect(incomeAmount.deductions).toBe(1262799);
        expect(incomeAmount.income).toBe(2337200);
    })
    test('3,600,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(3600000);
        expect(incomeAmount.earnings).toBe(3600000);
        expect(incomeAmount.deductions).toBe(1260000);
        expect(incomeAmount.income).toBe(2340000);
    })
    test('6,599,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(6599999);
        expect(incomeAmount.earnings).toBe(6599999);
        expect(incomeAmount.deductions).toBe(1863199);
        expect(incomeAmount.income).toBe(4736800);
    })
    test('6,600,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(6600000);
        expect(incomeAmount.earnings).toBe(6600000);
        expect(incomeAmount.deductions).toBe(1860000);
        expect(incomeAmount.income).toBe(4740000);
    })
    test('9,999,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(9999999);
        expect(incomeAmount.earnings).toBe(9999999);
        expect(incomeAmount.deductions).toBe(2200000);
        expect(incomeAmount.income).toBe(7799999);
    })
    test('10,000,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(10000000);
        expect(incomeAmount.earnings).toBe(10000000);
        expect(incomeAmount.deductions).toBe(2200000);
        expect(incomeAmount.income).toBe(7800000);
    })
})