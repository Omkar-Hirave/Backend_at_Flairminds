const os = require('os');
console.log("Free RAM we have is -->",os.freemem()/(1024*1024*1024));
console.log("Host name of the PC is--> ",os.hostname());
console.log("Platform of the PC is--> ",os.platform());
console.log("Host name of the PC is--> ",os.userInfo());

