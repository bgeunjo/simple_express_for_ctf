const {spawn} = require('child_process');
//var alasql = require('alasql');

const ls = spawn("ls",['-la']);

alasql.fn.shell=()=>{
    ls.stdout.on("data",data => {
        return data;
    })
}