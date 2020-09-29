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

function astroidsfun(){debugger;

    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','astroids',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('replacediv').innerHTML=this.responseText;
        }
    }
}

function nearestfun(){

    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','nearest',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('replacediv').innerHTML=this.responseText;
        }
    }

}

function fastestfun(){

    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','fastest',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('replacediv').innerHTML=this.responseText;
        }
    }

}

function submit(e,s){debugger;

    var startdate = e.parentElement.getElementsByTagName('input')[0].value ;
    var enddate = e.parentElement.getElementsByTagName('input')[1].value ;
    var sd=new Date(startdate);
    var ed=new Date(enddate);
    var diffTime = Math.abs(ed - sd);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var obj,comets={},flag=0 ;
    //alert(startdate+" "+enddate);
    /*if(diffDays<=7){
        flag=1;
    }
    else{
        alert("The Range of date must be atmost 7 days");
    }*/

    if(startdate=="" || enddate==""){
        alert("Please select a start date and an end date !!!!");
    }
    else if(flag==0){
        alert("The Range of date must be atmost 7 days");
    }
    else if(flag==1){
    var apiKey='61Nw3wKn5qW3shDiFDETu04NGbdJEOLhQXTa2ssQ';
    var url='https://api.nasa.gov/neo/rest/v1/feed?start_date='+startdate+'&end_date='+enddate+'&api_key='+(apiKey);
    var xhttp=new XMLHttpRequest();
    xhttp.open('GET', url ,true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            alert(this.responseText);
            obj=JSON.parse(this.responseText); 

            var l=Object.keys(obj.near_earth_objects).length;
            
            debugger;
            if(s==1){
                astroidsubmit(obj.near_earth_objects,l);
            }
            else if(s==2){
                nearestsubmit(obj.near_earth_objects,l);
            }
            else{
                fastestsubmit(obj.near_earth_objects,l);
            }
        }
    }
    }

}

function astroidsubmit(comets,l){debugger;          
    
    var countobj={},cometdes=[],count=[],c;
    for( var i=0 ; i<l ; i++ ){
        
        countobj[ Object.keys(comets)[i] ] = comets[Object.keys(comets)[i]].length ;
    }
    cometdes = Object.keys(countobj);
    count = Object.values(countobj);
    

    //Chart,js starts here..!!!!!
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cometdes,
            datasets: [{
                label: '# Number Of Astroids Of This Day',
                data: count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                        }
                    }]
                }
            }
        });
    //Chart.js ends here..      
    
}

function nearestsubmit(comets,l){debugger;

    var countobj={},count=[],cometdes=[],dist;
    for( var i=0 ; i<l ; i++ ){
        dist = 9999;
        for( var j=0 ; j<comets[Object.keys(comets)[i]].length ; j++ ){
            if( dist > parseFloat( comets[Object.keys(comets)[i]][j].close_approach_data[0].miss_distance.lunar ) ){
                dist = parseFloat( comets[Object.keys(comets)[i]][j].close_approach_data[0].miss_distance.lunar );
            }
        }
        countobj[ Object.keys(comets)[i] ] = dist ;
    }
    cometdes = Object.keys(countobj);
    count = Object.values(countobj);

    //Chart,js starts here..!!!!!
    var ctx = document.getElementById('barChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cometdes,
            datasets: [{
                label: 'Lunar Distance Of Nearest Comets This Day',
                data: count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                        }
                    }]
                }
            }
        });
    //Chart.js ends here..  

}

function fastestsubmit(comets,l){

    var countobj={},count=[],cometdes=[],dist;
    for( var i=0 ; i<l ; i++ ){
        dist = 0;
        for( var j=0 ; j<comets[Object.keys(comets)[i]].length ; j++ ){
            if( dist < parseFloat( comets[Object.keys(comets)[i]][j].close_approach_data[0].relative_velocity.kilometers_per_hour ) ){
                dist = parseFloat( comets[Object.keys(comets)[i]][j].close_approach_data[0].relative_velocity.kilometers_per_hour );
            }
        }
        countobj[ Object.keys(comets)[i] ] = dist ;
    }
    cometdes = Object.keys(countobj);
    count = Object.values(countobj);
    //Chart,js starts here..!!!!!
    var ctx = document.getElementById('barChart3').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cometdes,
            datasets: [{
                label: 'Fastest Astroid Of This Day in km/hr.',
                data: count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                        }
                    }]
                }
            }
        });
    //Chart.js ends here..  

}