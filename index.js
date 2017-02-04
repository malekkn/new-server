var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handelRequest);

var content = 'hi';
content = fs.readFileSync('./www/index.html','utf-8');



function handelRequest(request, response){
	
	var userName = url.parse(request.url, true).query.name;
	userName = (userName !== undefined ?userName:'' );
	// response.writeHead(200, 'allright');
	content = content.replace("anonymous", userName);
	response.setHeader('Content-Type','text/html')
	response.write(content);
	response.end();

}
server.listen(3000);