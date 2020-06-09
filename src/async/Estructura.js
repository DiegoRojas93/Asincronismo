const doSomeThingAsync = () => {
  return new Promise ((resolve, reject) =>{
    (true)
      ? setTimeout(() => resolve(`Do Something Async`), 3000)
      : reject(new Error (`Text Error`))
  })
}

const doSomeThing = async () => {
  const someThing = await doSomeThingAsync()
  console.log(someThing);
}

console.log(`Before`);
doSomeThing()
console.log(`After`);
console.log(``);

/* -------------------------------------------------------------- */

const anotherFunction = async () => {
  try{
    const someThing = await doSomeThingAsync()
    console.log(someThing);
  }catch{
    console.error(error);
  }
}

console.log(`Before_1`);
anotherFunction()
console.log(`After_1`);
console.log(``);