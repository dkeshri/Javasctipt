export class Map {
    /************************ Map function *********************************/
    constructor(data) {
        this.data = data
    }

    iterateAll = () => {
        // iterate all that data in the array
        let alterdata = this.data.map((data) => {
            return data;
        });
        console.log(alterdata);
    }

    iterateWithModifiedOutput = () => {
        let alterdata = this.data.map((data)=>{
            // retrun modified data item, not want name properti of project
            return {id:data.id,value:data.value}
        });
        console.log(alterdata);
    }
    /************************ Map function End *********************************/
}