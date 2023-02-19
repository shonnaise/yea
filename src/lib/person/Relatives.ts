import { DependentRelativeType } from "../exemption/DependentsExemption";
import { Person } from "./Person";
/**
 * 親族(扶養親族に限らず)
 */
export type Relative = Person & {
};

/**
 * 扶養親族
 */
export type DependentRelative = Relative & {
    type: DependentRelativeType,
    isNonResident: boolean,
    factOfSameHold: number,
};