// simple util that strip html tags in text
// only remove tags without attr such as <div> not <div class="" data-id="">
export function striptags(str) {
  return str.replace(/<\/?[a-z]+>/g, "");
}
