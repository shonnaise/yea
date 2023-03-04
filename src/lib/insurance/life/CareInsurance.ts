import { Relationship } from "../../family/Relationship"
import { LifeInsuranceBase } from "./LifeInsurance"

export type CareInsurance = LifeInsuranceBase & {
    insurancePeriod: number,
};