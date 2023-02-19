import { IncomeAmount } from "./IncomeAmount";

export const calculateSalaryIncomeAmount = (earnigns: number): IncomeAmount => {
    if (earnigns <= 650999) {
        return {earnings: earnigns, deductions: earnigns, income: 0};
    } else if (earnigns <= 1618999) {
        return {earnings: earnigns, deductions:650000 , income: earnigns - 650000};
    } else if (earnigns <= 1619999) {
        return {earnings: earnigns, deductions: earnigns - 969000, income: 969000};
    } else if (earnigns <= 1621999) {
        return {earnings: earnigns, deductions: earnigns - 970000, income: 970000};
    } else if (earnigns <= 1623999) {
        return {earnings: earnigns, deductions: earnigns - 972000, income: 972000};
    } else if (earnigns <= 1627999) {
        return {earnings: earnigns, deductions: earnigns - 974000, income: 974000};
    } else if (earnigns <= 1799999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000* 2.4;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 3599999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000 * 2.8 - 180000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 6599999) {
        const income = Math.floor(earnigns / 4 / 1000) * 1000 * 3.2 - 540000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else if (earnigns <= 9999999) {
        const income = Math.floor(earnigns * 9 / 10) - 1200000;
        return {earnings: earnigns, deductions: earnigns - income, income: income};
    } else {
        return {earnings: earnigns, deductions: 2200000, income: earnigns - 2200000};
    }
}
