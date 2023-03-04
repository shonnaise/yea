import { ULID } from "ulid";
import { NonResident } from "../util/NonResident";
import { Person } from "./Person";
/**
 * 親族(扶養親族に限らず)
 */
export type Relative = Person & {
    id: ULID,
    employeeId: ULID,
    nonResident: NonResident,
};

