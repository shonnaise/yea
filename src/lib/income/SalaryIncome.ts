import { IncomeAmount } from "./IncomeAmount";

export const calculateSalaryIncomeAmount = (earnigns: number): IncomeAmount => {
    if (earnigns <= 550999) {
        return {earnings: earnigns, deductions: earnigns, income: 0};
    } else if (earnigns <= 1618999) {
        return {earnings: earnigns, deductions:550000 , income: earnigns - 550000};
    } else if (earnigns <= 1619999) {
        return {earnings: earnigns, deductions: earnigns - 1069000, income: 1069000};
    } else if (earnigns <= 1621999) {
        return {earnings: earnigns, deductions: earnigns - 1070000, income: 1070000};
    } else if (earnigns <= 1623999) {
        return {earnings: earnigns, deductions: earnigns - 1072000, income: 1072000};
    } else if (earnigns <= 1627999) {
        return {earnings: earnigns, deductions: earnigns - 1074000, income: 1074000};
    } else if (earnigns <= 1799999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000* 2.4 + 100000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 3599999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000 * 2.8 - 80000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 6599999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000 * 3.2 - 440000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 8499999) {
        const income = Math.floor(earnigns * 9 / 10) - 1100000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else {
        return {earnings: earnigns, deductions: 1950000, income: earnigns - 1950000};
    }
}

