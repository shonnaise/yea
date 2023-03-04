import { useQuery } from "@tanstack/react-query";
import { YearEndAdjustment } from "../util/YearEndAdjustment";
export const useGetYearEndAdjustment = (userId: string) => {
    return useQuery({
        queryKey: [`year-end-adjustment/${userId}`],
        queryFn: async () => {
            const res = await fetch('http://127.0.0.1:3100/year-end-adjustment?' + new URLSearchParams({
                userId: userId
            }), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Prefer: 'code=200, example=Before Start'
                },
            });
            const json = await res.json();
            return YearEndAdjustment.parse(json);
        }
    })
};