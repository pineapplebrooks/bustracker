var val = 1;

if (val == 1) {

    fetch("https://api.translink.ca/rttiapi/v1/buses/22001?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22001"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22002?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22002"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22003?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22003"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22004?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22004"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22005?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22005"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22006?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22006"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22008?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22008"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22010?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22010"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22011?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22011"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22012?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22012"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22013?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22013"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22014?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22014"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/22015?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y, "22015"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23001?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23001"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23002?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23002"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23003?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23003"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23005?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23005"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23006?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23006"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23007?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23007"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23008?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23008"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23009?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23009"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23013?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23013"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23014?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23014"));

    fetch("https://api.translink.ca/rttiapi/v1/buses/23015?apikey=y5bOI7LMowHXuGX3aLWA")
        .then(x => x.text())
        .then(y => handle(y, "23015"));
}

function handle(link, busNum) {

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(link, "text/xml");

    var timeRec = xmlDoc.getElementsByTagName("RecordedTime")[0].firstChild.nodeValue;
    var secRec = 0;

    if (timeRec.substring(9, 110) == "pm") {
        secRec += (parseInt(timeRec.substring(0, 2)) + 12) * 3600;
    } else {
        secRec += parseInt(timeRec.substring(0, 2)) * 3600;
    }

    secRec += parseInt(timeRec.substring(3, 5)) * 60;
    secRec += parseInt(timeRec.substring(6, 8)) * 1;

    var d = new Date;
    var timeNow = d.toTimeString();
    var secNow = 0;

    secNow += parseInt(timeNow.substring(0, 2)) * 3600;
    secNow += parseInt(timeNow.substring(3, 5)) * 60;
    secNow += parseInt(timeNow.substring(6, 8)) * 1;

    if ((secNow - secRec) < 900 && (secNow > secRec)) {

        var routeNo = xmlDoc.getElementsByTagName("RouteNo")[0].firstChild.nodeValue;
        var routeDest = xmlDoc.getElementsByTagName("Destination")[0].firstChild.nodeValue;

        var routeName = busNum.concat(" - ", routeNo, " ", routeDest);

        document.getElementById(busNum).getElementsByClassName("routename")[0].firstChild.nodeValue = routeName;
    }
}

//Next Steps: Implementing all buses and using one API call for all of them
//Make one request for all buses and parse that xml file until reaching desired bus nums

//When a bus is inactive, there will be a 15 minute period where it will show as active
//because API does not provide date, only time and this function subtracts that time
//from the current time (e.g. if it's last rec time was 8:30 and it's 2:15 thats fine, 
//but when it becomes 8:32, then it will display as active).