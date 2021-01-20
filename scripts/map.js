export class Map {
    /************************ Map function *********************************/

    iterateAll = (data) => {
        // iterate all that data in the array
        let alterdata = data.map((data) => {
            return data;
        });
        console.log(data);
    }



    // alterdata = data.map((data)=>{
    //     // retrun modified data item, not want name properti of project
    //     return {id:data.id,value:data.value}
    // });
    // console.log(alterdata);
    /************************ Map function End *********************************/
}