import { z } from "zod";
import { KanaNameSchema } from "@/lib/util/KanaName";
import { FullNameSchema } from "@/lib/util/FullName";
import { BirthDateSchema } from "@/lib/util/BirthDate"

const TaxPayerSchema = z.object({
    fullName: FullNameSchema,
    kanaName: KanaNameSchema,
    birthDate: BirthDateSchema,
    hasSpouse: z.boolean(),
    hasSecondary: z.boolean(),
});


/**
 * 納税者
 * @property fullName 氏名
 * @property kanaName 氏名(カタカナ)
 * @property birthDate 生年月日
 * @property hasSpouse 配偶者の有無
 * @property hasSecondary 従たる給与についての扶養控除申告書提出有無
 */
export type TaxPayer = z.infer<typeof TaxPayerSchema>;
