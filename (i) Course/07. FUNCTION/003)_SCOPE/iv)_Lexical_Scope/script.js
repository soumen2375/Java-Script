//Inner function have access to variables from their outer (parent) functions

const outer = () => {
    let outerVar = 20;
    const inner = () => console.log(outerVar);

    inner();
}

outer();