function initialize() {

    var MY_MAPTYPE_ID = 'custom_style';

    var london, liberia, sanfran, tokyo, map, marker, infobox;
    
    london = new google.maps.LatLng(51.5056, 0.0756);
    liberia= new google.maps.LatLng(6.3167, 10.8);
    sanfran= new google.maps.LatLng(37.7833, -122.4167);
    tokyo = new google.maps.LatLng(35.6895, 139.6917);
    
     var spanner ='https://raw.githubusercontent.com/Eleonore9/STEM_mission/master/static/img/mechanic2.png';

    var chemical='https://raw.githubusercontent.com/Eleonore9/STEM_mission/master/static/img/Lab_icon2.png';

    var computer= 'http://maps.google.com/mapfiles/kml/pal4/icon37.png';

    var numbers = 'http://maps.google.com/mapfiles/kml/pal3/icon15.png';

    var featureOpts = [
    {
      stylers: [
        { hue: '#8cce23' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#6623ce' }
      ]
    }
  ];

    var mapOptions = {
    zoom: 2,
    center: london,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
    
    map = new google.maps.Map(document.getElementById("map"),  mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    
  marker = new google.maps.Marker({
        map: map,
        position: london,
        visible: true,
        icon: spanner,
        draggable:true,
        animation: google.maps.Animation.BOUNCE
    });
    
    marker2 = new google.maps.Marker({
        map: map,
        position: liberia,
        visible: true,
        icon: chemical,
        draggable:true,
        animation: google.maps.Animation.DROP
    });

    marker3 = new google.maps.Marker({
        map: map,
        position: sanfran,
        visible: true,
        icon: computer,
        draggable:true,
        animation: google.maps.Animation.DROP
    });

    marker4 = new google.maps.Marker({
        map: map,
        position: tokyo,
        visible: true,
        icon: numbers,
        draggable:true,
        animation: google.maps.Animation.DROP
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

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


google.maps.event.addDomListener(window, 'load', initialize);
