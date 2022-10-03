const isTure = value => value;

function classes (...names:(string | undefined)[]) {
  return names.filter(isTure).join('');

}

export default classes;