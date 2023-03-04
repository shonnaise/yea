import { z } from 'zod';
import { TargetYear } from './TargetYear';

const YearEndProgress = z.union([z.literal('開始前'), z.literal('作業中'), z.literal('完了')]);
export type YearEndProgress = z.infer<typeof YearEndProgress>;


export const YearEndAdjustment = z.object({
    targetYear: TargetYear,
    progress: YearEndProgress,
});

type YearEndStatus = z.infer<typeof YearEndAdjustment>;