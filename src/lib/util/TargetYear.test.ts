import { parse } from "path";
import { targetYearSchema, TargetYear } from "./TargetYear";

describe("値の範囲", () => {
    test("上限値・下限値", () => {
        expect(targetYearSchema.parse(1000)).toEqual(1000);
        expect(targetYearSchema.parse(9999)).toEqual(9999);
    });

    test("範囲外", () => {
        expect(() => targetYearSchema.parse(999)).toThrow();
        expect(() => targetYearSchema.parse(10000)).toThrow();
    })
})