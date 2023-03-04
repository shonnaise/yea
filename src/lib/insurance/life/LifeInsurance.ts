import { Relationship } from "@/lib/family/Relationship";
import { CareInsurance } from "./CareInsurance";
import { GeneralLifeInsurance } from "./GeneralLifeInsurance";
import { PersonalPensionInsurance } from "./PersonalPensionInsurance";

const lifeInsuranceCategories = ['新', '旧'] as const;
export type LifeInsuranceCategory = typeof lifeInsuranceCategories[number];

export type LifeInsurance = {
    general: GeneralLifeInsurance[],
    care: CareInsurance[],
    personal: PersonalPensionInsurance[]
}

export type LifeInsuranceBase = {
    insuranceCompanyName: string,
    insuranceType: string,
    insurancePeriod: number,
    policyHolderName: string,
    recipient: {
        name: string,
        relationship: Relationship,
    },
    insuranceAmount: number,    
}