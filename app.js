function countDown() {
    // // Sets The Timer End Date
    var today = new Date();
    var currentTime= new Date ();
    var time = document.getElementById("cTime");
    time.innerHTML= currentTime.toLocaleTimeString();
    
    // This gets the date
    
    var date = document.getElementById ("cDate");
    date.innerHTML= currentTime.toLocaleDateString();
    
    var dow = document.getElementById("dayOfWeek");
    var weekDays = new Array ("Sun", "Mon", "Wed", "Fri", "Thursday", "Sunday");
    dow .innerHTML = weekDays [currentTime.getDay()]


    var eventDate = new Date("December 25,2022 00:00:00");
    // // Gets Current Time 
    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();
    var remainTime = eventTime - currentTime;
    // //Calculates Time
    var seconds = Math.floor(remainTime / 1000); // 1000 milaseconds in 1 second
    var minutes = Math.floor(seconds / 60);  // 60 seconds in a minute
    var hours = Math.floor(minutes / 60);  // 60 minutes in an hour
    var days = Math.floor(hours / 24);    // 24 hours in a day
    // // Hours In A Day / Minutes In An Hour / Seconds In a Minute 

    hours = hours % 24;
    minutes %= 60;
    seconds %= 60;

    // ? = if  : = else
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    //  //Connects To HTML IDs, Displays Time On Page
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    setTimeout(countDown, 1000); // slows down count ?
}
countDown();
