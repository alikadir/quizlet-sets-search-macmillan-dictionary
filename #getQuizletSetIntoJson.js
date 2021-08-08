let list = [];
document.querySelectorAll('[aria-label=Terim]').forEach(x => {
  const word = x.querySelector('.SetPageTerm-smallSide .TermText').innerText;
  const wordTr = x.querySelector('.SetPageTerm-largeSide .TermText').innerText;
  const wordDefinition = '';
  const wordExamples = [];
  const hasStar = false;
  list.push({
    word,
    wordTr,
    wordDefinition,
    wordExamples,
    hasStar,
  });
  console.log({
    word,
    wordTr,
    wordDefinition,
    wordExamples,
    hasStar,
  });
});
