const smallBusinessInsuranceCategories = ['独立行政法人中小企業基盤整備機構の共済契約の掛金', '確定拠出年金法に規定する企業型年金加入者掛金', '確定拠出年金法に規定する個人型年金加入者掛金', '心身障害者扶養共済制度に関する契約の掛金'] as const;
export type SmallBusinessInsuranceCategory = typeof smallBusinessInsuranceCategories[number];
export type SmallBusinessInsurance = {
    insuranceCategory: SmallBusinessInsuranceCategory,
    insuranceAmount: number,
};