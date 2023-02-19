import { TotalIncomeAmount } from "../income/TotalIncome";
import { Relationship } from "./Relationship";
import { BirthDate } from "../util/BirthDate"
import { Address } from "../util/Address";

export type Person = {
    fullName: string,
    kanaName: string,
    relationship: Relationship,
    birthDate: BirthDate,
    address: Address
    totalIncomeAmount: TotalIncomeAmount,
};