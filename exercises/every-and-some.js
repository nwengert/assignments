


const myEvery = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === typeof arr[0]){
            console.log(arr[i])
            const a = true;
        }else{
            const a = true;     //this wasn't workingfor me
        }
    }return a
}
console.log(myEvery([1,2,'3']));
