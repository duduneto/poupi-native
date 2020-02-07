import { SetRdContentFb, SetRdContentMockDb } from "./condRdContent";
import { SetCategProdListFb, SetCategProdListMockDb } from "./catProdList";
import { SetProdListFb, SetProdListMockDb } from "./prodList";
import { SetStoreListFb, SetStoreListMockDb } from "./servStoreList";
import { SetCatAddProdFb, SetCatAddProdMockDb } from "./catListAddProdFb";
import setDataProdAll from "./setDataProd";

let dbFb = false;

export let condRdContent = info =>
  dbFb ? SetRdContentFb(info) : SetRdContentMockDb(info);

export let catProdList = info =>
  dbFb ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

export let prodList = info =>
  dbFb ? SetProdListFb(info) : SetProdListMockDb(info);

export let servStoreList = info =>
  dbFb ? SetStoreListFb(info) : SetStoreListMockDb(info);

export let catListAddProd = info =>
  dbFb ? SetCatAddProdFb(info) : SetCatAddProdMockDb(info);

export let setDataProd = info => setDataProdAll(info, dbFb);
