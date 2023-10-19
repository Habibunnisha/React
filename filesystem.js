var fs=require('fs');
var filename='input.txt';
var inputData='welcome to Aspire';

console.log('program starts here')
fs.writeFileSync(filename,inputData,'ascii');
fs.writeFile(filename,inputData,'ascii',(error)=>{
    if(error){
        console.log('writefile not available')
    }else{
        console.log('writefile written success')
    }
});

console.log('file written success');
console.log('programs end here')
