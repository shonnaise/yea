import { Employee } from "@/lib/person/Employee";
import { Relative } from "@/lib/person/Relatives";
import { isDependentRelatives } from "./DependentsExemption";
import { isChild } from "@/lib/person/Relationship";
/**
 * ひとり親控除に該当するかの判定
 * @param employee 本人
 * @param depdendentRelatives 
 * @returns 
 */
export const isDeductibleForSingleParentsExemption = (employee: Employee, relatives: Relative[]): boolean => {
    return !employee.hasSpouse && employee.totalIncomeAmount.income <= 5000000 && relatives.some((relative) => isDependentRelatives(relative) && isChild(relative.relationship));
};

export type SingleParentExemption = {
    amountOfExemption: number,
}