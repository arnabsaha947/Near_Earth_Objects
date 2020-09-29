function Homefun(){debugger;

    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','Home',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('replacediv').innerHTML=this.responseText;
        }
    }
}