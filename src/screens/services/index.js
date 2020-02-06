import { SetRdContentFb, SetRdContentMockDb } from "./condRdContent";
import { SetCategProdListFb, SetCategProdListMockDb } from "./catProdList";
import { SetProdListFb, SetProdListMockDb } from "./prodList";
import { SetStoreListFb, SetStoreListMockDb } from "./servStoreList";
import { SetCatAddProdFb, SetCatAddProdMockDb } from "./catListAddProdFb";
import { setDataProdFb, setDataProdMockDb } from "./setDataProd";

let dbFirestore = false;

export let condRdContent = info =>
  dbFirestore ? SetRdContentFb(info) : SetRdContentMockDb(info);

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

export let prodList = info =>
  dbFirestore ? SetProdListFb(info) : SetProdListMockDb(info);

export let servStoreList = info =>
  dbFirestore ? SetStoreListFb(info) : SetStoreListMockDb(info);

export let catListAddProd = info =>
  dbFirestore ? SetCatAddProdFb(info) : SetCatAddProdMockDb(info);

export let setDataProd = info =>
  dbFirestore ? setDataProdFb(info) : setDataProdMockDb(info);
