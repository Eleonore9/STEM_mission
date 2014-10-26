function initialize() {
    var london, map, marker, infobox;
    
    london = new google.maps.LatLng(51.5056, 0.0756);
    liberia= new google.maps.LatLng(6.3167, 10.8);
    
    var spanner ='../img/mechanic2.png';
    
    var chemical='../img/Lab_icon2.png';
    
    map = new google.maps.Map(document.getElementById("map"), {
         zoom: 1,
         center: london,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    marker = new google.maps.Marker({
        map: map,
        position: london,
        visible: true,
        icon: spanner
    });
    
    marker2 = new google.maps.Marker({
        map: map,
        position: liberia,
        visible: true,
        icon: chemical
    });

    infobox = new InfoBox({
         content: document.getElementById("infobox"),
         disableAutoPan: false,
         maxWidth: 150,
         pixelOffset: new google.maps.Size(-140, 0),
         zIndex: null,
         boxStyle: {
            background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
            opacity: 0.75,
            width: "280px"
        },
        closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
    

    
    google.maps.event.addListener(marker, 'click', function() {
        infobox.open(map, this);
        map.panTo(loc);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
