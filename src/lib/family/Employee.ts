import { ULID } from "ulid";
import { Person } from "./Person"
import { Relative } from "./Relatives"
import { Spouse } from "./Spouse"

export type Employee = Person & {
    id: EmployeeId,
    spouse?: Spouse,
    relatives?: Relative[],
};

export type EmployeeId = ULID;