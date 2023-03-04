import { z } from "zod";

export const TargetYear = z.number().min(1000).max(9999);
export type TargetYear = z.infer<typeof TargetYear>;
