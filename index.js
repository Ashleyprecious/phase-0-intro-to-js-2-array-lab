let cats=["Milo", "Otis", "Garfield"]
 function destructivelyAppendCat (name){
cats.push (name) 
 }
 function destructivelyPrependCat (name){
 cats.unshift (name)
 }
 function destructivelyRemoveLastCat() {
 cats.pop()
 }
 function destructivelyRemoveFirstCat() {
cats.shift()
 }
 function appendCat (name) {
  const newcats = [...cats, (name)];
  return newcats;
 }
 function prependCat (name){
const newcats = [(name),...cats];
return newcats; 
}
function removeLastCat(){
const newcats = [...cats] 
newcats.pop();
return newcats; 
}
function removeFirstCat(){
    const newcats = [...cats]
    newcats.shift();
    return newcats;
}