
/*
streams are used for accessing file data in chunks of small unts of 64kb buffer
*/

const {createReadStream}=require('fs');

const stream=createReadStream('./1-https.js');

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err);
})