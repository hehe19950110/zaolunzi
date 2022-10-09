const isTure = value => value;

function classes (...names:(string | undefined)[]) {
  return names.filter(isTure).join('');
}
export default classes;



function scopedClassMaker(prefix: string) {
   return function x (name?: string) {
     return [prefix,name].filter(Boolean).join('-')
   };
}
export {scopedClassMaker};