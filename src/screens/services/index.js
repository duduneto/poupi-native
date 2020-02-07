import condRdContentAll from "./condRdContent";
import catProdListAll from "./catProdList";
import { SetProdListFb, SetProdListMockDb } from "./prodList";
import { SetStoreListFb, SetStoreListMockDb } from "./servStoreList";
import { SetCatAddProdFb, SetCatAddProdMockDb } from "./catListAddProdFb";
import setDataProdAll from "./setDataProd";

let dbFb = true;

export let condRdContent = info => condRdContentAll(info, dbFb);

export let catProdList = info => catProdListAll(info, dbFb);

export let prodList = info =>
  dbFb ? SetProdListFb(info) : SetProdListMockDb(info);

export let servStoreList = info =>
  dbFb ? SetStoreListFb(info) : SetStoreListMockDb(info);

export let catListAddProd = info =>
  dbFb ? SetCatAddProdFb(info) : SetCatAddProdMockDb(info);

export let setDataProd = info => setDataProdAll(info, dbFb);
