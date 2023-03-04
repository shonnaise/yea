import { TargetYear } from "../util/TargetYear"
import { EarthquakeInsurance } from "./EarthQuakeInsurance"
import { LifeInsurance } from "./life/LifeInsurance"
import { SmallBusinessInsurance } from "./SmallBusinessInsurance"
import { SocialInsurance } from "./SocialInsurance"

export type Insurances = {
    life?: LifeInsurance,
    earthquake?: EarthquakeInsurance[],
    social?: SocialInsurance[],
    smallBusiness?: SmallBusinessInsurance[],
}