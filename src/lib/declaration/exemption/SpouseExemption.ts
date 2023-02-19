const spouseTypes = ['同一生計配偶者', '控除対象配偶者', '源泉控除対象配偶者', '源泉控除対象配偶者・同一生計配偶者'] as const;
export type SpouseType = typeof spouseTypes[number];

export const makeSpouseExemptionChecker = () => {
    return {
        /**
         * 同一生計配偶者への該当有無
         */
        isSpouseLivingInSameHousehold: (spouse: TotalIncomeAmount): boolean => {
            return spouse.income <= 480000;
        },
        /**
         * 控除対象配偶者への該当有無
         */
        isSpouseQualifiedForDeduction: (employee: TotalIncomeAmount, spouse: TotalIncomeAmount): boolean => {
            return employee.income <= 10000000 && spouse.income <= 480000;
        },
        /**
         * 老人控除対象配偶者への該当有無
         */
        isElderlySpouseQualifiedForDeduction: (employee: TotalIncomeAmount, spouse: TotalIncomeAmount, age: number) => {
            return (employment.income <= 10000000 && spouse.income <= 480000) && (age >= 70);
        }
    }    
}

export type SpouseExemption = {

};

export type SpouseSpecialExemption = {

};