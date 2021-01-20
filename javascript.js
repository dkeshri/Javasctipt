var data = [];
let alterdata;
for(i=0;i<25;i++){
    data.push({
        id:i,
        value:'depeak'+i,
        name:"deepak keshri"+(i/9)
    });
}

/************************ Map function *********************************/


// iterate all that data in the array


// alterdata = data.map((data)=>{
//     return data;
// });
// console.log(alterdata);


// alterdata = data.map((data)=>{
//     // retrun modified data item, not want name properti of project
//     return {id:data.id,value:data.value}
// });
// console.log(alterdata);
/************************ Map function End *********************************/

/************************ filter function *********************************/

// it work on boolean flag.
// if return is true then push item in the output array.

// alterdata = data.filter((data)=>{
//     return true;   
// });
// console.log(alterdata);


// alterdata = data.filter((data)=>{
//     return false;   
// });
// console.log(alterdata);



// alterdata = data.filter((data)=>{

//     // array contain even number of id object
//     return data.id%2==0;   
// });
// console.log(alterdata);


/************************ filter function End *********************************/

/************************ filter and map function combinatoin *********************************/


alterdata = data.filter((data)=>{

    // array contain even number of id object
    return data.id%2==0;   
}).map((data)=>{

    // we can modify the return  items
    return {id:data.id,value:data.value};
});
console.log(alterdata);



/************************ filter function End *********************************/



