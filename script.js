function showTime()
  {
    var date = new Date();
    var h = date.getHours(); // gives btw 0-23
    var m = date.getMinutes(); // gives btw 0-59
    var s = date.getSeconds(); // gives btw 0-59
    var session = "AM";

    if(h==0){
      h = 12;
    }

    if(h>12)
    {
      h = h-12;
      session = "PM";
    }

    h = (h<10) ? "0"+h : h;
    m = (m<10) ? "0"+m : m;
    s = (s<10) ? "0"+s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyclockDisp").innerText = time;
    document.getElementById("MyclockDisp").textContent = time;
    
    setTimeout(showTime , 1000);
  }

  showTime();