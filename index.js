var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,

   callback: (error, res, done) => {
      if(error){
         console.log(error);
      } else{
         var $ = res.$;
         console.log($("body").text());
      }
      done();
   } 
});

c.queue('https://sacramento.craigslist.org');
