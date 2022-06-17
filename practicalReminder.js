let array = [15,30,20,10,10,20,30];
duplicateElements = array.filter((value,index)=> array.indexOf(value) != index);
console.log(duplicateElements);

removedDuplicate = array.filter((value,index)=> array.indexOf(value) == index);
console.log(removedDuplicate);

