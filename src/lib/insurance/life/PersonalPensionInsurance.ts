import { LifeInsuranceBase, LifeInsuranceCategory } from "./LifeInsurance";

export type PersonalPensionInsurance = LifeInsuranceBase & {
    pensionPaymentPeriod: number,
    insuranceCategory: LifeInsuranceCategory,
};
