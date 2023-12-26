import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/settings.js";

const tokenVerify = (req, res, next) => {
	let token = req.headers["authorization"];

	if (token) {
		// Remove Bearer from string
		token = token.slice(7);
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.json({
					success: 0,
					message: "Invalid Token...",
				});
			} else {
				req.user = decoded;
				next();
			}
		});
	} else {
		return res.json({
			success: 0,
			message: "Access Denied! Unauthorized User",
		});
	}
};

export default tokenVerify;
