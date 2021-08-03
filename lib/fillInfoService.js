import { readRawJson, writeTransformedJson } from './jsonFileService.js';
import { getWordInfo } from './macmillanService.js';

export async function fillInfo(file) {
  const wordList = readRawJson(file);
  for (const item of wordList) {
    const wordInfo = await getWordInfo(item.keyText);
    item.keyText = `${item.keyText}.\n\n${wordInfo.wordDescription}.\n\n${wordInfo.wordExampleSentence}`;
    console.count(file);
  }
  writeTransformedJson(file, wordList);
}
