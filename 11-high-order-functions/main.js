const arrNum= [5,7,14,23];

function transform (array, cb) {

  const acc=[];

  for (let i=0; i<array.length; i++) {
    const result= cb(array[i]);
    acc.push(result);
  }
  return acc;
}

const resta= transform(arrNum, (numero)=>{numero-5});


const comparacion= transform (arrNum, 
  (numero)=> 
  {const parImpar=(numero%2===0)
  ?'par'
  :'impar'
  return parImpar;
})


console.log(arrNum);
console.log(resta);
console.log(comparacion);