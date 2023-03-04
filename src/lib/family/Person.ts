import { TotalIncomeAmount } from "../income/TotalIncome";
import { Relationship } from "./Relationship";
import { BirthDate } from "../util/BirthDate"
import { Address } from "../util/Address";
import { FullName } from "../util/FullName";
import { KanaName } from "../util/KanaName";

export type Person = {
    fullName: FullName,
    kanaName: KanaName,
    relationship: Relationship,
    birthDate: BirthDate,
    address: Address
    totalIncomeAmount: TotalIncomeAmount,
};