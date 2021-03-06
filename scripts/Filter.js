export class Filter {
    /************************ filter function *********************************/

    constructor(data){
        this.data = data; 
    }
    // it work on boolean flag.
    // if return is true then push item in the output array.

    filterReturnTrue = () => {
        let alterdata = this.data.filter((data) => {
            return true;
        });
        console.log(alterdata);
    }
    filterReturnFalse = () => {
        let alterdata = this.data.filter((data) => {
            return false;
        });
        console.log(alterdata);
    }

    fliterWithCondition = () => {
        let alterdata = this.data.filter((data) => {
            // array contain even number of id object
            return data.id % 2 == 0;
        });
        console.log(alterdata);
    }



    /************************ filter function End *********************************/
}