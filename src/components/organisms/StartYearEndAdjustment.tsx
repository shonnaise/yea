import { YearEndProgress } from "@/lib/util/YearEndAdjustment";
import { RestartYearEndAdjustmentButton } from "../molecules/RestartYearEndAdjustmentButton";
import { StartYearEndAdjustmentButton } from "../molecules/StartYearEndAdjustmentButton";

type Props = {
  userId: string,
  progress: YearEndProgress,
}

export const StartYearEndAdjustment: React.FC<Props> = ({ userId, progress }: Props) => {
  return (
    <>
      {
        (() => {
          switch (progress) {
            case '開始前':
              return (
                <>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  11月30日までに年末調整の申告を完了してください。
                </p>
                <StartYearEndAdjustmentButton userId={userId} />
                </>
              );
            case '作業中':
              return (
                <>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    11月30日までに年末調整の申告を完了してください。
                  </p>
                  <RestartYearEndAdjustmentButton userId={userId} />
                </>
              )
            default:
              break;
          }
        })()
      }
    </>
  );
}