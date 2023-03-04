import { Spouse } from "@/lib/family/Spouse";
import { DependentRelative, Relative } from "@/lib/family/Relatives";
import { calculateAgeOfYearEnd } from "@/lib/util/BirthDate";
import { isChild } from "@/lib/family/Relationship";
import { Employee } from "@/lib/person/Employee";

const dependentRelativeType = ['年少扶養親族', '一般の控除対象扶養親族', '特定扶養親族', '同居老親等', 'その他の老人扶養親族'] as const;
export type DependentRelativeType = typeof dependentRelativeType[number];

export const makeDependentExemptionService = (targetYear: number) => {
    return {
        isDependentRelatives: isDependentRelatives,

    }
};

/**
 * 扶養控除
 */
export type DependentsExemption = {
    spouseQualifiedForWithholdingDeduction: Spouse,
    dependentRelatives: DependentRelative[],
    amountOfExemption: number,

}

/**
 * 源泉控除対象配偶者への該当有無
 * @param employee 本人の合計所得金額
 * @param spouse 配偶者の合計所得金額
 * @returns 判定結果
 */
export const isSpouseQualifiedForWithholdingDeduction = (employee: TotalIncomeAmount, spouse: TotalIncomeAmount): boolean => {
    return employee.income <= 9000000 && spouse.income <= 950000;
}

/**
 * 扶養親族に該当するかの判定
 * @param totalIncomeAmount 
 * @returns 判定結果
 */
export const isDependentRelatives = (relative: Relative) => {
    return relative.totalIncomeAmount.income < 480000;
}
/**
 * 控除対象扶養親族に該当するかの判定
 * @param totalIncomeAmount 親族の合計所得金額
 * @returns 判定結果
 */
export const isDependentRelativesQualifiedForDeduction = (targetYear: number, relative: Relative) => {
    // 16歳未満かつ合計所得が48万円以下
    return calculateAgeOfYearEnd(targetYear, relative.birthDate) < 16 && isDependentRelatives(relative);
};

export const DependentRelatives : DependentRelatives[] = 
[
    {
        type: "年少扶養親族",
        description: '16歳未満の扶養親族',
        age: {
            from: 0,
            to: 16,
        }
    },
    {
        type: "一般の控除対象扶養親族",
        description: '16歳以上の扶養親族',
        age: {
            from: 16,
            to: 19,
        }
    },
    {
        type: "特定扶養親族",
        description: '19歳以上23歳未満の扶養親族',
        age: {
            from: 19,
            to: 23,
        }
    },
    {
        type: "一般の控除対象扶養親族",
        description: '16歳未満の扶養親族',
        age: {
            from: 23,
            to: 70,
        }
    },
    {
        type: "老人扶養親族",
        description: '70歳以上の扶養親族',
        age: {
            from: 70,
        }
    },
]