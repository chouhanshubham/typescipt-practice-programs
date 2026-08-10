const count : number = 5;
let a: number = 0;
let b = 1;

for (let i=0; i<count; i++){ 
    const next = a + b;

    a = b;
    b = next;

    console.log(next);

}
