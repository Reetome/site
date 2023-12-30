let encodeText;
let RandomText;
let RandomInput;

function EncodeExecution(){
    encodeText = document.getElementById("EncodeInput").value;
    document.getElementById("EncodeOutput").value=encodeURI(encodeText);
}