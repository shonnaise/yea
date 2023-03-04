import { z } from "zod";

export const FullNameSchema = z.string();

export type FullName = z.infer<typeof FullNameSchema>;