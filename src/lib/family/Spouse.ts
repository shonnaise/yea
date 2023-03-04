import { ULID } from "ulid"
import { NonResident } from "../util/NonResident"
import { Person } from "./Person"

export type Spouse = Person & {
    id: ULID,
    employeeId: ULID,
    nonResident: NonResident,
}