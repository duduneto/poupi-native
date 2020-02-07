import condRdContentAll from "./condRdContent";
import catProdListAll from "./catProdList";
import prodListAll from "./prodList";
import servStoreListAll from "./servStoreList";
import catListAddProdAll from "./catListAddProdFb";
import setDataProdAll from "./setDataProd";

let dbFb = false;

export let condRdContent = info => condRdContentAll(info, dbFb);
export let catProdList = info => catProdListAll(info, dbFb);
export let prodList = info => prodListAll(info, dbFb);
export let servStoreList = info => servStoreListAll(info, dbFb);
export let catListAddProd = info => catListAddProdAll(info, dbFb);
export let setDataProd = info => setDataProdAll(info, dbFb);
