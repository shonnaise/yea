import { Person } from "./Person"
import { Relative } from "./Relatives"
import { Spouse } from "./Spouse"

export type Employee = Person & {
    id: EmployeeId,
    hasSpouse: boolean,
    spouse: Spouse,
    relatives: Relative[],
};

export type EmployeeId = string;
