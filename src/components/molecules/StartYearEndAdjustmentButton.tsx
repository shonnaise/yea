import { LinkButton } from "./LinkButton";
import { useStartYearEndAdjustment } from "@/lib/hooks/useStartYearEndAdjustment";
import { useRouter } from "next/router";

export type Props = {
    userId: string
}

export const StartYearEndAdjustmentButton: React.FC<Props> = ({userId}: Props) => {
    const router = useRouter();
    const startYearEndAdjustment = useStartYearEndAdjustment();
    return (
        <LinkButton title="はじめる" onClick={() => {
            startYearEndAdjustment.mutate(userId,
                {
                    onSuccess: async () => await router.push("/declare")
                });
        }} />
    );
}

