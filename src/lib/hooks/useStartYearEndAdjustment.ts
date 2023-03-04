import { useMutation } from "@tanstack/react-query";

export const useStartYearEndAdjustment = () => 
    useMutation(async (employeeId: string) => {
        const res = await fetch('http://127.0.0.1:3100/year-end-adjustment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify({
                employee_id: employeeId,
                progress: '作業中',
            })
        });
    });