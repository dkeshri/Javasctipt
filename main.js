import { Map } from "./scripts/map.js";
import { Filter } from "./scripts/Filter.js";
import {Reduce} from './scripts/Reduce.js'
var data = [];
var alterData;
for(let i=0;i<25;i++){
    data.push({
        id:i,
        value:'depeak'+i,
        name:"deepak keshri"+(i/9)
    });
}


/************************ Map function *********************************/
// alterData = new Map(data);
// alterData.iterateAll();
// alterData.iterateWithModifiedOutput();
/************************ Map function End *********************************/

// alterData = new Filter(data);
// alterData.filterReturnTrue();
// alterData.filterReturnFalse();
// alterData.fliterWithCondition();
/************************ filter function *********************************/

/************************ filter function End *********************************/
/************************ filter and map function combinatoin *********************************/


// alterdata = data.filter((data)=>{

//     // array contain even number of id object
//     return data.id%2==0;   
// }).map((data)=>{

//     // we can modify the return  items
//     return {id:data.id,value:data.value};
// });
// console.log(alterdata);



/************************ filter function End *********************************/


/************************ Reduce function *********************************/
alterData = new Reduce([1,1,1,1,1]);
alterData.Reduce();
/************************ Reduce function End *********************************/
