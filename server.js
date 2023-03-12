const mongoose = require("mongoose");
const app = require(`${__dirname}/app.js`);
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successfully"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
