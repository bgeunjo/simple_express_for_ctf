
alasql.fn.openTextFile=()=>{
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        readFile(event.target.files[0]);
    };
    input.click();
}

alasql.fn.readFile=(file)=>{
    if (typeof window === 'undefined') {
        global.window = {}
    }
    var reader=new window.FileReader();
    return reader.readAsText(file);
}

alasql.fn.shell=(text)=>{
    return text+"HELLOHi"
}