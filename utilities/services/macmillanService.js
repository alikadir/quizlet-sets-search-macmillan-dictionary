import axios from 'axios';
import { JSDOM } from 'jsdom';

export async function getWordInfo(word) {
  const info = { wordExampleSentence: '', wordDescription: '' };
  const html = await getHtmlFromMacmillan(word);
  const dom = new JSDOM(html);
  try {
    info.wordExampleSentence = dom.window.document.querySelector(
      '.SENSE-CONTENT .EXAMPLES.first'
    ).textContent;
    info.wordDescription = dom.window.document.querySelector(
      '.SENSE-CONTENT .DEFINITION'
    ).textContent;
  } catch (err) {
    console.error(`Problem occurred at "${word}".`);
  }
  return info;
}

async function getHtmlFromMacmillan(word) {
  const formattedWord = word.toLowerCase().trim().replaceAll(' ', '-');
  const response = await axios.get(
    'https://www.macmillandictionary.com/us/dictionary/american/' +
      formattedWord
  );
  return response.data;
}
