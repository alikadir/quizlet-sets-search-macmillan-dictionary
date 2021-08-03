let list = [];
document.querySelectorAll('[aria-label=Terim]').forEach(x => {
  let keyText = x.querySelector('.SetPageTerm-smallSide .TermText').innerText;
  let valueText = x.querySelector('.SetPageTerm-largeSide .TermText').innerText;
  list.push({
    keyText,
    valueText,
  });
  console.log({
    keyText,
    valueText,
  });
});
