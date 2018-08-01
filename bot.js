var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /\bPA\b/;
	  botRegex2 = /\bPa\b/;
	  botRegex3 = /\bpa\b/;
	  botRegex4 = /\bPA Minerva\b/;
	  botRegex5 = /\blol\b/;
	  botRegex6 = /\bLol\b/;
	  botRegex10 = /\whaha\w/;
	  botRegex7 = /\bthe\b/;
	  botRegex8 = /\bThe\b/;
	  botRegex9 = /\@Minerva\b/;
	  botRegex11 = /\bWeather\b/;
	  

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex3.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex4.test(request.text)) {
    this.res.writeHead(200);
    postMessage2();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex5.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex10.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }  
  
    if(request.text && botRegex7.test(request.text)) {
    this.res.writeHead(200);
    postMessage4();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

    if(request.text && botRegex8.test(request.text)) {
    this.res.writeHead(200);
    postMessage4();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex9.test(request.text)) {
    this.res.writeHead(200);
    postMessage5();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
/*    if(request.text && botRegex11.test(request.text)) {
    this.res.writeHead(200);
    postMessage6();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
*/
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = 'Phi Alpha to tHe brother who just dished a jawn above! Also, le bo nasty!\n\n'.concat(cool());

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage2() {
  var botResponse, options, body, botReq;

  botResponse = 'Thank you for throwing a phi alpha my way.';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage3() {
  var botResponse, options, body, botReq;

  botResponse = 'lmao what are yall laughin at?';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage4() {
  var botResponse, options, body, botReq;

  botResponse = cool.faceStream();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage5() {
  var botResponse, options, body, botReq;

  botResponse = 'Don\'t mention me hoe. Ill scrape you';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

/*function postMessage6() {
  var botResponse, options, body, botReq;

  const request2 = require('request');

  let url = 'http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&appid=3c7e805f6e8a60d1b01923fee9f22390'

  request2(url, function(err2, response2, body2) {
	  if(err2){
		  console.log('error:', error);
	  } else {
		  let weatherinfo = JSON.parse(body2);

		  var botResponse = "Current Temperature: " + weatherinfo.main.temp + " degrees in " + weatherinfo.name + "\nCurrent Conditions: " + weatherinfo.weather[0].main + "(" + weatherinfo.weather[0].description + ")\nTodays low temperature: " + weatherinfo.main.temp_min + "\nTodays high temperature: " + weatherinfo.main.temp_max + "\nWind Speed: " + weatherinfo.wind.speed + " MPH"
		  	
	  }
  });

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}
*/

exports.respond = respond;