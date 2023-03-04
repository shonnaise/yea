import { Relationship } from "../family/Relationship";

export type SocialInsurance = {
    insuranceType: string,
    recipientName: string,
    payer: {
        name: string,
        relationship: Relationship,
    },
};