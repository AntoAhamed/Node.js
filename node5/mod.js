console.log("This is module file...");

const sum = (arr)=>{
    let result = 0;
    arr.forEach(element => {
        result += element;
    });

    return result;
}

const avg = (arr)=>{
    let result = sum(arr);
    return result/arr.length;
}

module.exports = {
    sum,
    avg
}
