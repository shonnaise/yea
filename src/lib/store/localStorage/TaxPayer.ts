import { TargetYear } from "@/lib/util/TargetYear";
import { EmployeeId } from "@/lib/family/Employee";
import { AsyncLocalStorage } from "async_hooks";
import { TaxPayer } from "@/lib/declaration/common/TaxPayer";

export const saveTaxPayer = (localstorage: WindowLocalStorage ,targetYear: TargetYear): TaxPayer => {
    return {
        getTaxPayer: (employeeId: EmployeeId) => {
            const item = localStorage.getItem("");
            if (!item) throw new Error("取得に失敗しました。");
            const json = JSON.parse(item);
            return json;
        }
    }
}