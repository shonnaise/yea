import { LinkButton } from "./LinkButton";
import { useStartYearEndAdjustment } from "@/lib/hooks/useStartYearEndAdjustment";
import { useRouter } from "next/router";

export type Props = {
    userId: string
}

export const RestartYearEndAdjustmentButton: React.FC<Props> = ({userId}: Props) => {
    const router = useRouter();
    const startYearEndAdjustment = useStartYearEndAdjustment();
    return (
        <LinkButton title="再開する" onClick={() => {
            startYearEndAdjustment.mutate(userId,
                {
                    onSuccess: async () => await router.push("/declare")
                });
        }} />
    );
}

