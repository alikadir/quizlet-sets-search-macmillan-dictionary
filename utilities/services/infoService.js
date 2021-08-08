import {
  readRawJson,
  readTransformedJson,
  writeTransformedJson,
} from './jsonFileService.js';
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

export async function detectEmptyInfo(file) {
  const wordList = readTransformedJson(file);
  return wordList.filter(item => item.keyText.includes('\n\n.\n\n'));
}

export async function fillAdditionalInfo(file) {
  const wordList = readTransformedJson(file);
  wordList.forEach(item => {
    const [word, wordDefinition, wordExample] = item.keyText.split('\n\n');
    item.word = word;
    item.wordDefinition = wordDefinition;
    item.wordExamples = [wordExample];
    item.hasStar = false
  });
  writeTransformedJson(file, wordList);
}
