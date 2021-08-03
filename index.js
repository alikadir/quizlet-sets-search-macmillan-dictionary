import { readRawJson, writeTransformedJson } from './lib/jsonFileService.js';
import { settingLog } from './lib/logService.js';
import { getWordInfo } from './lib/macmillanService.js';

settingLog();

const wordList = readRawJson('phrasalVerbs.json');

for (const item of wordList) {
  const wordInfo = await getWordInfo(item.keyText);
  item.keyText = `${item.keyText}.\n\n${wordInfo.wordDescription}.\n\n${wordInfo.wordExampleSentence}`;
}

writeTransformedJson('phrasalVerbs.json', wordList);
console.log(wordList);
