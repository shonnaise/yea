/**
 * 基礎控除
 */
import { EmployeeId } from "@/lib/person/Employee";
import { TotalIncomeAmount } from "../../income/TotalIncome";

/**
 * 令和2年以降の基礎控除額取得
 * @param totalIncomeAmount 本人の合計所得
 * @returns 基礎控除額
 */
export const getAmountOfExemption = (totalIncomeAmount: TotalIncomeAmount): number => {
    if (totalIncomeAmount.income <= 24000000) {
        return 480000;
    } else if (totalIncomeAmount.income <= 24500000) {
        return 320000;
    } else if (totalIncomeAmount.income <= 25000000) {
        return 160000;
    } else {
        return 0;
    }
}

export type BasicExemption = {
    employeeId: EmployeeId,
    exemptionAmount: number,
};
