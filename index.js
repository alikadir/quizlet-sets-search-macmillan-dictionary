import { fileConstans } from './utilities/constants/fileConstans.js';
import { detectEmptyInfo } from './utilities/services/infoService.js';
import { settingLog } from './utilities/services/logService.js';

settingLog();

/*
await fillInfo(fileConstans.PHRASAL_VERBS);
await fillInfo(fileConstans.A1A2);
await fillInfo(fileConstans.B1B2);
await fillInfo(fileConstans.C1C2);
 */

/*
const phrasal = await detectEmptyInfo(fileConstans.PHRASAL_VERBS);
const a1a2 = await detectEmptyInfo(fileConstans.A1A2);
const b1b2 = await detectEmptyInfo(fileConstans.B1B2);
const c1c2 = await detectEmptyInfo(fileConstans.C1C2);

console.log({ count: phrasal.length, phrasal });
console.log({ count: a1a2.length, a1a2 });
console.log({ count: b1b2.length, b1b2 });
console.log({ count: c1c2.length, c1c2 });
*/
