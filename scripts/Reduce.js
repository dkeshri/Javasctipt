export class Reduce{
    constructor(data){
        this.data = data;
    }

    Reduce = () =>{

///     redeuc is use to wokrk with previsouly return value during the iterartion

        let alterData = this.data.reduce((container,currentValue,currentValueIndex,orignalArray)=>{
            return container+currentValue;
        },0)
        console.log(alterData);
    }
}
