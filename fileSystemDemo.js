//Filenames in fs are NOT case sensitive
//"fs" module helps us working with file systems
const fs = require('fs');

//Creating a folder. Throws error if there is already a folder with same name saying "FILE already exist".
fs.mkdir('DemoFolder',(err)=>{
    if(err) console.log(err);
    else console.log('Folder created successfully...');
})

//fs.mkdir() is NOT case sensitive
fs.mkdir('DEMOFOLDER',(err)=>{
    if(err) console.log(err);
    else console.log('Folder created successfully...');
})

//Deleting a folder fs.rmdir(). Throws error if folder not found saying "NO SUCH FILE OR DIRECTORY",
//also throws error if the folder is not empty saying "DIRECTORY NOT EMPTY".
//It is also NOT case sensitive.
fs.rmdir('demofolder',(err)=>{
    if(err) console.log(err);
    else console.log('Folder deleted successfully...');
})

//List the contents of the folder
//readdir('folder_name',(err, files)) returns an array of folder contents.
fs.readdir('./',(err, files)=>{
    if(err) console.log(err);
    else{
        console.log(files);
    }
})

//Create a file. This will also replace the existing file if there is one with same name(like 'cat' in linux)
// fs.writeFile('fsDemo.txt',"Content to be written",(err)=>{
//     if(err) console.log(err);
//     else console.log("File created succefully...");
// })

//Creating a file within a folder by giving ABSOLUTE/RELATIVE_PATH. folder_name is NOT case sensitive.
//Throws error if the FOLDER_PATH doesn't exist
fs.writeFile('./demofolder/demofile.txt','data to be written in file',(err)=>{
    if(err) console.log('Error at line 43: '+err);
    else console.log('Line 34: File created successfully...');
})


//Reading a file. Throws error if file not found saying "OPERATION NOT PERMITTED".
fs.readFile('fsDemo.txt','utf8',(err, file)=>{
    if(err) console.log(err);
    else console.log(file);//This line actually reads the content of file
})

//Renaming a file. This doesn't throw if file_name is incorrect. 
fs.rename('fsDemo.txt','FsDemo.txt',(err)=>{
    if(err) console.log(err);
    else console.log('Rename operation successful...');
})

fs.rename('FsDemo.txt','fsDemo.txt',(err)=>{
    if(err) console.log(err);
    else console.log('File renamed to original name...');
})

//Appending a file. If the file of given name doesn't exist, then it will create the file and appends.
fs.appendFile('FSDEMO1.txt','\nData to be appended',(err)=>{
    if(err) console.log(err);
    else console.log('File appended successfully...');
});


//Deleting a file. Doesn't throw any error even if file NOT found.
fs.unlink('fsDemo1.txt',(err)=>{
    if(err) console.log(err);
    else console.log('File deleted successfully...');
})


fs.readFile('fsDemo1.txt','utf8',(err, file)=>{
    if(err) console.log('Error at line 80: '+err);
    else console.log(file);//This line actually reads the content of file
})

//Readable and Writable Streams. Streams by default implement EventEmitter.
//Helps reading/writing partially loaded, large files/data.
//read stream is NOT case sensitive but throws error if reading_path doesn't exist
const readStream = fs.createReadStream('./FSDEMO.TXT','UTF8');
const wStream = fs.createWriteStream('./WrittenStream.txt','UTF8');
readStream.on('data',(chunk)=>{
    wStream.write(chunk);
});
