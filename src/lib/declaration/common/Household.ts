import { FullName } from "@/lib/util/FullName";
import { Relationship } from "@/lib/family/Relationship";
/**
 * 世帯主
 * @property name 氏名
 * @property relationship 続柄
 */
export type Household = {
    name: FullName,
    relationship: Relationship
};
