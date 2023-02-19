import { makeIncomeAmountCalculator } from "../IncomeAmount";

describe('令和2年以降の給与所得の計算', () => {
    const calculator = makeIncomeAmountCalculator(new Date().getFullYear());
    test('550,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(550999);
        expect(incomeAmount.earnings).toBe(550999);
        expect(incomeAmount.deductions).toBe(550999);
        expect(incomeAmount.income).toBe(0);
    })
    test('551,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(551000);
        expect(incomeAmount.earnings).toBe(551000);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1000);
    })
    test('1,618,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1618999);
        expect(incomeAmount.earnings).toBe(1618999);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1068999);
    })
    test('1,619,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1619000);
        expect(incomeAmount.earnings).toBe(1619000);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1069000);
    })
    test('1,619,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1619999);
        expect(incomeAmount.earnings).toBe(1619999);
        expect(incomeAmount.deductions).toBe(550999);
        expect(incomeAmount.income).toBe(1069000);
    })
    test('1,620,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1620000);
        expect(incomeAmount.earnings).toBe(1620000);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1070000);
    })
    test('1,621,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1621999);
        expect(incomeAmount.earnings).toBe(1621999);
        expect(incomeAmount.deductions).toBe(551999);
        expect(incomeAmount.income).toBe(1070000);
    })
    test('1,622,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1622000);
        expect(incomeAmount.earnings).toBe(1622000);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1072000);
    })
    test('1,623,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1623999);
        expect(incomeAmount.earnings).toBe(1623999);
        expect(incomeAmount.deductions).toBe(551999);
        expect(incomeAmount.income).toBe(1072000);
    })
    test('1,624,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1624000);
        expect(incomeAmount.earnings).toBe(1624000);
        expect(incomeAmount.deductions).toBe(550000);
        expect(incomeAmount.income).toBe(1074000);
    })
    test('1,627,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1627999);
        expect(incomeAmount.earnings).toBe(1627999);
        expect(incomeAmount.deductions).toBe(553999);
        expect(incomeAmount.income).toBe(1074000);
    })
    test('1,628,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1628000);
        expect(incomeAmount.earnings).toBe(1628000);
        expect(incomeAmount.deductions).toBe(551200);
        expect(incomeAmount.income).toBe(1076800);
    })
    test('1,799,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1799999);
        expect(incomeAmount.earnings).toBe(1799999);
        expect(incomeAmount.deductions).toBe(622399);
        expect(incomeAmount.income).toBe(1177600);
    })
    test('1,800,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(1800000);
        expect(incomeAmount.earnings).toBe(1800000);
        expect(incomeAmount.deductions).toBe(620000);
        expect(incomeAmount.income).toBe(1180000);
    })
    test('3,599,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(3599999);
        expect(incomeAmount.earnings).toBe(3599999);
        expect(incomeAmount.deductions).toBe(1162799);
        expect(incomeAmount.income).toBe(2437200);
    })
    test('3,600,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(3600000);
        expect(incomeAmount.earnings).toBe(3600000);
        expect(incomeAmount.deductions).toBe(1160000);
        expect(incomeAmount.income).toBe(2440000);
    })
    test('6,599,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(6599999);
        expect(incomeAmount.earnings).toBe(6599999);
        expect(incomeAmount.deductions).toBe(1763199);
        expect(incomeAmount.income).toBe(4836800);
    })
    test('6,600,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(6600000);
        expect(incomeAmount.earnings).toBe(6600000);
        expect(incomeAmount.deductions).toBe(1760000);
        expect(incomeAmount.income).toBe(4840000);
    })
    test('8,499,999円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(8499999);
        expect(incomeAmount.earnings).toBe(8499999);
        expect(incomeAmount.deductions).toBe(1950000);
        expect(incomeAmount.income).toBe(6549999);
    })
    test('8,500,000円', () => {
        const incomeAmount = calculator.calculateSalaryIncomeAmount(8500000);
        expect(incomeAmount.earnings).toBe(8500000);
        expect(incomeAmount.deductions).toBe(1950000);
        expect(incomeAmount.income).toBe(6550000);
    })
})

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