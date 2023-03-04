import { Relationship } from "../family/Relationship";

const earthquakeInsuranceCategories = ['地震', '旧長期'] as const;
export type EarthquakeInsuranceCategory = typeof earthquakeInsuranceCategories[number];
export type EarthquakeInsurance = {
    insuranceCompanyName: string,
    insuranceType: string,
    insurancePeriod: number,
    policyHolderName: string,
    whoResidesIn: {
        name: string,
        relationship: Relationship,
    },
    insuranceCategory: EarthquakeInsuranceCategory,
    insuranceAmount: number,
};
