var sock=io.connect('http://192.168.1.111:4000');
var gaugeChart = AmCharts.makeChart( "chartdiv", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 10,
    "bands": [ {
      "color": "#84b761",
      "endValue": 20,
      "innerRadius": "95%",
      "startValue": 0
    }, {
      "color": "#fdd400",
      "endValue": 30,
      "innerRadius": "85%",
      "startValue": 20
    }, {
      "color": "#cc4748",
      "endValue": 70,
      "innerRadius": "75%",
      "startValue": 30
    } ],
    "bottomText": "0 °C",
    "bottomTextYOffset": 0,
    "endValue": 70
  } ],
  "arrows": [ {} ],
  "export": {
    "enabled": true
  }
} );

iosocket=sock;
iosocket.on('sensor', function (data) {
  var value =data.sg;
  if ( gaugeChart ) {
    if ( gaugeChart.arrows ) {
      if ( gaugeChart.arrows[ 0 ] ) {
        if ( gaugeChart.arrows[ 0 ].setValue ) {
          gaugeChart.arrows[ 0 ].setValue( value );
          gaugeChart.axes[ 0 ].setBottomText( value + " mg/l" );
        }
      }
    }
  }
    });

