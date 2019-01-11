let data = undefined;
const detectDataType = (something) => {
  if(typeof(something) == 'string'){
    return 'string';
  }else if(typeof(something) == 'number'){
    return 'number';
  }else if(typeof(something) == 'object'){
    if(something === null){
      return 'null';
    }
    return 'object';
  }else if(typeof(something) == 'boolean'){
    return 'boolean';
  }else if(typeof(something) == 'function'){
    return 'function';
  }else if(typeof(something) == 'undefined'){
    return 'undefined';
  }
}
console.log(detectDataType(data));
