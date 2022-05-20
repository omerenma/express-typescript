import express from "express";
import {} from "./src/routes/loginRoutes";
const app = express();
//app.use(router)
app.use("/api", login);
app.listen(4000, () => {
	console.log("App running on port 4000");
});
