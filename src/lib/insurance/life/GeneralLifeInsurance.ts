import { Relationship } from "@/lib/family/Relationship";
import { LifeInsuranceBase, LifeInsuranceCategory } from "./LifeInsurance";
export type GeneralLifeInsurance = LifeInsuranceBase & {
    insurancePeriod: number,
    insuranceCategory: LifeInsuranceCategory,
};