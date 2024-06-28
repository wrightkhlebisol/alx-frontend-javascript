export default function cleanSet(set, startString) {
  if (typeof set === 'object' && typeof startString === 'string' && startString.length > 0) {
    const newArr = [];
    set.forEach((val) => {
      const split1 = val?.split(startString)[1];
      if (split1) {
        newArr.push(split1);
      }
    });
    return newArr.join('-');
  }
  return '';
}
