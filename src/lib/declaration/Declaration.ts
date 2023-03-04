import { EmployeeId } from "../family/Employee"
import { TargetYear } from "../util/TargetYear"
import { Household } from "./common/Household"
import { SalaryPayer } from "./common/SalaryPayer"
import { SubmitDestination } from "./common/SubmitDestination"
import { TaxPayer } from "./common/TaxPayer"
import { Exemptions } from "./exemption/Exemptions"

export type Declaration = {
    targetYear: TargetYear,
    employeeId: EmployeeId,
    submitdestination: SubmitDestination,
    salaryPayer: SalaryPayer,    
    taxPayer: TaxPayer,
    houseHold: Household,
    exemptions: Exemptions,
};