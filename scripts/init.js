const fs 	   	= require('fs');
const readline 	= require("readline");
const rl 		= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Express port? (default: 80)", express_port => {
	rl.question("MongoDB username? (default: mongoUserDefault)", mongo_user => {
		rl.question("MongoDB password? (default: mongoPasswordDefault)", mongo_password => { 

			express_port = express_port || 80;
			mongo_user   = mongo_user   || "mongoUserDefault";
			mongo_password = mongo_password || "mongoPasswordDefault";

			let content = `EXPRESS_PORT=${express_port}\n`;
			content += `MONGO_USER=${mongo_user}\n`;
			content += `MONGO_PASSWORD=${mongo_password}\n`;

			fs.writeFileSync('.env', content);

			rl.close();
		});
	});
});

rl.on("close", function() {
    console.log("\nEnjoy development !!!");
    process.exit(0);
});