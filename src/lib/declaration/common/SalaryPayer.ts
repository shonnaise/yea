import { Address } from "@/lib/util/Address"
import { ULID } from "ulid"

/**
 * 給与の支払者
 * @property id ID
 * @property salaryPayerName 名称
 * @property corporateNumber 法人番号
 * @property address 所在地
 */
export type SalaryPayer = {
    id: ULID,
    salaryPayerName: string,
    corporateNumber: string,
    address: Address
}