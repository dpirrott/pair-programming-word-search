const transpose = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  
  const horizontalJoin = letters.map(ls => ls.join(''));

  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let h of verticalJoin) {
    if (h.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;

/*Feb 16, 2022
Pair Programming - Word Search
Feb 7 cohort: Madiha, Dylan
*/