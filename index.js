function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}
//It's kind of weird, you need to extract the string from lis[i] by using .innerHTML,
//put it through parseInt, and then store the result with the function .innerHTML

function deepestChild() {
return document.querySelector('div#grand-node');
}
