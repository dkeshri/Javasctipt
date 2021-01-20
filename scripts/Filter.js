export class Filter {
    /************************ filter function *********************************/

    // it work on boolean flag.
    // if return is true then push item in the output array.

    filterReturnTrue = (data) => {
        let alterdata = data.filter((data) => {
            return true;
        });
        console.log(alterdata);
    }
    filterReturnFalse = (data) => {
        let alterdata = data.filter((data) => {
            return false;
        });
        console.log(alterdata);
    }

    fliterWithCondition = (data) => {
        let alterdata = data.filter((data) => {
            // array contain even number of id object
            return data.id % 2 == 0;
        });
        console.log(alterdata);
    }



    /************************ filter function End *********************************/
}