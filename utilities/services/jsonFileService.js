import fs from 'fs';

export function readRawJson(file) {
  const json = fs.readFileSync('./data/raw/' + file).toString();
  return JSON.parse(json);
}

export function writeRawJson(file, json) {
  fs.writeFileSync('./data/raw/' + file, JSON.stringify(json), {
    encoding: 'utf8',
  });
}

export function readTransformedJson(file) {
  const json = fs.readFileSync('./data/transformed/' + file).toString();
  return JSON.parse(json);
}

export function writeTransformedJson(file, json) {
  fs.writeFileSync('./data/transformed/' + file, JSON.stringify(json), {
    encoding: 'utf8',
  });
}
