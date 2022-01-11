import { Equal, ExpectTrue } from "../types/utilType";
import { HanValue, NakiHanValue } from "../types/han";

type Case1 = ExpectTrue<Equal<HanValue<["pinhu"]>, 1>>
type Case2 = ExpectTrue<Equal<HanValue<["richi", "pinhu"]>, 2>>
type Case3 = ExpectTrue<Equal<HanValue<["richi", "pinhu", "sanshoku"]>, 4>>

type NakiCase1 = ExpectTrue<Equal<NakiHanValue<["pinhu"]>, 0>>
type NakiCase2 = ExpectTrue<Equal<NakiHanValue<["tanyao", "sanshoku"]>, 2>>
type NakiCase3 = ExpectTrue<Equal<NakiHanValue<["ipeko", "sanshoku"]>, 1>>