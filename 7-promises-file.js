const {readFile,writeFile}=require('fs').promises

const start=async()=>{
    try{
const first=await readFile('./1-https.js','utf8');
const second=await readFile('./2-nodemon.js','utf8');

await writeFile(
    './newFile.txt',
    `${first} ${second}`,
    {flag:'a'}
);
    }
    catch(error)
    {
        console.log(error);
    }
}

start();