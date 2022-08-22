Array.prototype.myFilter = function(callback, context) {
  const result = [];

  for (i=0; i<this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

const arrData = [0,1,2,3,4,5,6,8,9];

// ==================================================

function createDebounceFunction(func, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200); 
setTimeout(debounceLog100, 400); 

