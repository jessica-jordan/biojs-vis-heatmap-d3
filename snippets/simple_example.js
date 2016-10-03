// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-heatmap-d3");
var xhr = require("xhr");
xhr("./data/dummy.json", function(err,resp,data){
  var jsonData = JSON.parse(data);
  var sampleData = jsonData;
  console.log(jsonData);
  var instance = new app({
    jsonData: sampleData, 
    user_defined_config: {
      colorLow: 'black',
      colorMed: 'white',
      colorHigh: 'red'
    },
    canvas_margin: {
      top: 300,
      bottom: 10,
      left: 20,
      bottom: 1200 // not sure how to access that config...
    },
    target: yourDiv.id
  });
});
