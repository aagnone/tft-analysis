export const json2Array = json => {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

export const findMissing = array => {
  const set = new Set(array);
  let i = 0;
  while (set.has(i)) {
    i++;
  }
  return i;
}

export const constructURL = obChamp => {
  return obChamp.name.substring(0, 4).toLowerCase().concat(`${obChamp.position[0]}${obChamp.position[1]}`)
}