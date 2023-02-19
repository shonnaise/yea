import { EmployeeId } from "@/lib/person/Employee";
import { BasicExemption } from "./BasicExemption";
import { DependentsExemption as DependentExemption } from "./DependentsExemption";
import { DisabledPersonExemption } from "./DisabledPersonExemption";
import { EarthquakeInsuranceExemption } from "./EarthquakeInsuranceExemption";
import { HouseLoanExemption } from "./HouseLoanExemption";
import { IncomeAdjustmentExemption } from "./InccomeAdjustmentExemption";
import { LifeInsuranceExemption } from "./LifeInsuranceExemption";
import { SingleParentExemption } from "./SingleParentExemption";
import { SmallBusinessExemption } from "./SmallBuisinessInsuranceExemption";
import { SocialInsuranceExemption } from "./SocialInsuranceExemption";
import { SpouseExemption, SpouseSpecialExemption } from "./SpouseExemption";
import { WidowExemption } from "./WidowExemption";
import { WorkingStudentExemption } from "./WorkingStudentExemption";

const deductionTypes = ['基礎控除', '扶養控除', '配偶者控除', '配偶者特別控除', '所得金額調整控除', '障害者控除', '寡婦控除', 'ひとり親控除', '勤労学生控除', '生命保険料控除', '地震保険料控除', '社会保険料控除', '小規模企業共済等掛金控除', '住宅借入金等特別控除'] as const;
export type DeductionType = typeof deductionTypes[number];

export type Exemptions = {
    employeeId: EmployeeId,
    basic: BasicExemption,
    dependent: DependentExemption,
    spouse: SpouseExemption,
    spouseSpecial: SpouseSpecialExemption,
    incomeAdjustment: IncomeAdjustmentExemption,
    disabledPerson: DisabledPersonExemption,
    widow: WidowExemption,
    singleParent: SingleParentExemption,
    workingStudent: WorkingStudentExemption,
    lifeInsurance: LifeInsuranceExemption,
    earthquakeInsurance: EarthquakeInsuranceExemption,
    socialInsurance: SocialInsuranceExemption,
    smallBusiness: SmallBusinessExemption,
    houseLoan: HouseLoanExemption,
} 
