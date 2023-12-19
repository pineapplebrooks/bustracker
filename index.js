var val = 1;

if (val == 1) {

    fetch("https://api.translink.ca/rttiapi/v1/buses/22001?apikey=Mlo50PiKJSJNgbhezi9E")
        .then(x => x.text())
        .then(y => handle(y));

    function handle(link) {

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(link, "text/xml");

        var routeNo = xmlDoc.getElementsByTagName("RouteNo")[0].firstChild.nodeValue;
        var routeDest = xmlDoc.getElementsByTagName("Destination")[0].firstChild.nodeValue;

        var routeString = "22001";
        var routeName = routeString.concat(" - ", routeNo, " ", routeDest);

        document.getElementById(routeString).getElementsByClassName("routename")[0].firstChild.nodeValue = routeName;
    }

}

//Next Steps: Implementing all buses and using one API call for all of them
//Make one request for all buses and parse that xml file until reaching desired bus nums