import { z } from "zod";

export const KanaNameSchema = z.string();

export type KanaName = z.infer<typeof KanaNameSchema>;
