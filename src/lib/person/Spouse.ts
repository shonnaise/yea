import { Person } from "./Person"

type SpouseType = {
    isSpouseQualifiedForWithholdingDeduction: boolean,
    isSpouseLivingInSameHousehold: boolean,
    isSpouseQualifiedForDeduction: boolean,
    isElderlySpouseQualifiedForDeduction: boolean
}

export type Spouse = Person & {
    type: SpouseType,
}
