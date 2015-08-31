var http=require('http');
var httpServer=http.createServer(function(request,response){


	console.log("Client Connected");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end('response end');
});
httpServer.listen(8086,function(){

	console.log("hello connected");
});