import { Employee } from "@/lib/person/Employee"
import { Relative } from "@/lib/family/Relatives"
import { Spouse } from "@/lib/family/Spouse"

const disabledPersonTypes = ['一般の障害者', '特別障害者', '同居特別障害者'] as const;
export type DisabledPersonType = typeof disabledPersonTypes[number];

export type DisabledPersonExemption = {
    existence: DisabledPersonExemption,
    amountOfExemption: number,
}

type DisabledPersonExistence = {
    employee: {
        disabledPerson: boolean,
        specialDisabledPerson: boolean,
    },
    spouse: {
        disabledPerson: boolean,
        specialDisabledPerson: boolean,
        specialDisabledPersonLivingTogether: boolean,
    },
    relatives: {
        disabledPerson: number,
        specialDisabledPerson: number,
        specialDisabledPersonLivingTogether: number,        
    }
}

export const getHandicappedPersonCount(employee: Employee, spouse: Spouse, relatives: Relative[]): DisabledPersonCount => {
    return {
        employee: {
            disabledPerson: employee.
        }
            
        }
    }
}