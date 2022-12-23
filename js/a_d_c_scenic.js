function delRow(btn){
    var ta=document.getElementById("ta");
    var tr=btn.parentNode.parentNode;
    ta.deleteRow(tr.rowIndex);
    alert('是否要删除')
}
function updateRow(btn){
    var tr=btn.parentNode.parentNode;
    var cell=tr.cells[3];
    if(!isNaN(Number(cell.innerHTML))){
        cell.innerHTML="<input type='text' value='"+cell.innerHTML+"' onblur='updateRow2(this)'>";
    }
}
function updateRow2(inp){
    var tr=inp.parentNode.parentNode;
    var cell=tr.cells[3];
    cell.innerHTML=inp.value;
}
function addRow(){
    var ta=document.getElementById("ta");
    var tr=ta.insertRow(1);
    var cell0=tr.insertCell(0);
    cell0.innerHTML=document.getElementById("scenic").value;
    var cell1=tr.insertCell(1);
    var obj=document.getElementById("season");
    var index=obj.selectedIndex;
    var va=obj.options[index].value;
    cell1.innerHTML=va;
    var cell2=tr.insertCell(2);
    cell2.innerHTML=document.getElementById("price").value;
    var cell3=tr.insertCell(3);
    cell3.innerHTML=document.getElementById("evaluate").value;
    var cell4=tr.insertCell(4);
    cell4.innerHTML=document.getElementById("timing").value;
    var cell5=tr.insertCell(5);
    cell5.innerHTML="<input type='button' value='修改评分' onclick='updateRow(this)'> <input type='button' value='删除'onclick='delRow(this)'>"
}