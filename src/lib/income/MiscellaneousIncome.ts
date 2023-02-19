import { IncomeAmount } from "./IncomeAmount";

export const calclulateMiscellaneousIncomeAmount = (age: number, pensionEarnings: number, otherEarnings: number): IncomeAmount => {
    const difference = ((age, otherEarnings) => {
        if (otherEarnings <= 10000000) {
            if (age < 65) {
                return {
                    firstRangeBoundary: 600000,
                    secondRangeBoundary: 1300000,
                    adjustmentAmount: 0,
                }    
            } else {
                return {
                    firstRangeBoundary: 1100000,
                    secondRangeBoundary: 3300000,
                    adjustmentAmount: 0,
                }
            }
        } else if (otherEarnings <= 20000000) {
            if (age < 65) {
                return {
                    firstRangeBoundary: 500000,
                    secondRangeBoundary: 1300000,
                    adjustmentAmount: 100000,
                }
            } else {
                return {
                    firstRangeBoundary: 1000000,
                    secondRangeBoundary: 3300000,
                    adjustmentAmount: 100000,
                }    
            }
        } else {
            if (age < 65) {
                return {
                    firstRangeBoundary: 400000,
                    secondRangeBoundary: 1300000,
                    adjustmentAmount: 200000,
                }
            } else {
                return {
                    firstRangeBoundary: 900000,
                    secondRangeBoundary: 3300000,
                    adjustmentAmount: 200000,
                }    
            }
        }
    })(age, otherEarnings);

    if (pensionEarnings <= difference.firstRangeBoundary) {
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings,
            income: 0,
        }
    } else if (pensionEarnings < difference.secondRangeBoundary) {
        const income = pensionEarnings - difference.firstRangeBoundary;
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings - income,
            income: income,
        }
    } else if (pensionEarnings < 4100000) {
        const income = Math.floor(pensionEarnings * 0.75) - 275000 - difference.adjustmentAmount;
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings - income,
            income: income,
        }
    } else if (pensionEarnings < 7700000) {
        const income = Math.floor(pensionEarnings * 0.85) - 685000 - difference.adjustmentAmount;
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings - income,
            income: income,
        }
    } else if (pensionEarnings < 10000000) {
        const income = Math.floor(pensionEarnings * 0.95) - 1455000 - difference.adjustmentAmount;
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings - income,
            income: income,
        }
    } else {
        const income = pensionEarnings - 1955000 - difference.adjustmentAmount;
        return {
            earnings: pensionEarnings,
            deductions: pensionEarnings - income,
            income: income,
        }
    }
};
