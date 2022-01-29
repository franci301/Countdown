function updateTimer() {
    future  = Date.parse("February 28 2022 13:30");
    now     = new Date();
    diff    = future - now;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div> ' + d + ' <span>days</span></div> ' +
        '<div> ' + h + ' <span>hours</span></div> ' +
        '<div> ' + m + ' <span>minutes</span></div> ' +
        '<div> ' + s + ' <span>seconds</span></div> ' ;
  }
var firstInterval = setInterval('updateTimer()', 1000 );
  
function changeDate(newDate){
    future  = Date.parse(newDate);
    now     = new Date();
    diff    = future - now;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
    
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
    
    document.getElementById("timer")
        .innerHTML =
        '<div> ' + d + ' <span>days</span></div> ' +
        '<div> ' + h + ' <span>hours</span></div> ' +
        '<div> ' + m + ' <span>minutes</span></div> ' +
        '<div> ' + s + ' <span>seconds</span></div> ' ;
    
}

function change(){
    var newDate = document.getElementById("dateChange").value
    if(newDate == ''){
        document.getElementById("text").innerHTML = "";
        document.getElementById("text").innerHTML = "Enter Something x";
    }else{
        clearInterval(firstInterval);
        changeDate(newDate);
        setInterval('change()', 1000 )
    }
    
}

if(document.cookie != ''){
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    ca = ca[0].split('=')[1];
    document.getElementById("text").innerHTML = "";
    document.getElementById("text").innerHTML = "Countdown until " + ca;
    
}else{
    document.getElementById("text").innerHTML = "";
    document.getElementById("text").innerHTML = "Countdown until ..." ;
}

function changeText(){
    var text = document.getElementById("getText").value;
    if(text==''){
        document.getElementById("text").innerHTML = "";
        document.getElementById("text").innerHTML = "Enter Something x";
    }else{
        if(document.cookies == null){
            document.cookie = 'text='+text+'; expires=Tue, 1 Mar 2022 12:00:00 GMT';
            document.getElementById("text").innerHTML = "";
            document.getElementById("text").innerHTML = "Countdown until " + text;
        }else{
            document.cookie = 'text='+text+'; expires=Tue, 1 Mar 2022 12:00:00 GMT';
            document.getElementById("text").innerHTML = "";
            document.getElementById("text").innerHTML = "Countdown until " + text;
        }
    }
}