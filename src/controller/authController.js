import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { models } from "../models/index.js";
import { JWT_SECRET } from "../config/settings.js";

const generateAccessToken = (id, email, role) => {
	return jwt.sign({ email, id, role }, JWT_SECRET, {
		expiresIn: "90d",
	});
};

const changePassword = asyncHandler(async (req, res) => {
	const { new_password: plainTextPassword } = req.body;

	if (!plainTextPassword || typeof plainTextPassword !== "string") {
		return res.json({ status: "error", error: "Invalid password" });
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: "error",
			error: "Password too small. Should be atleast 6 characters",
		});
	}

	try {
		const password = await bcrypt.hash(plainTextPassword, 10);

		await models.user.update(
			{
				password: password,
			},
			{ where: { email: req.user.email } }
		);

		res.status(200).json({ status: "Success", massage: "Password Changed Successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || typeof email !== "string") {
		return res.status(404).json({ status: "error", error: "Invalid email" });
	}
	const user = await models.user.findOne({
		where: { email: email },
	});

	if (!user) {
		return res.status(404).json({ status: "error", error: "User not found" });
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = generateAccessToken(user.id, email);

		return res.status(200).json({
			status: "success",
			user: { first_name: user.first_name, last_name: user.last_name, email: user.email, token: token },
		});
	}

	res.status(400).json({ status: "error", error: "Invalid username/password" });
});

const register = asyncHandler(async (req, res) => {
	const { email, first_name, last_name, password: plainTextPassword, role } = req.body;

	if (!email || typeof email !== "string") {
		return res.json({ status: "error", error: "Invalid username" });
	} else {
		const usedEmail = await models.user.findOne({
			where: { email: email },
		});
		if (usedEmail) return res.status(403).json({ status: "error", error: "Email already exists" });
	}

	if (!plainTextPassword || typeof plainTextPassword !== "string") {
		return res.status(400).json({ status: "error", error: "Invalid password" });
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: "error",
			error: "Password too small. Should be atleast 6 characters",
		});
	}

	const password = await bcrypt.hash(plainTextPassword, 10);

	try {
		const result = await models.user.create({
			email,
			first_name,
			last_name,
			password,
			role,
		});

		const token = generateAccessToken(result.id, result.email, result.role);
		res.status(200).json({
			status: "success",
			user: {
				email,
				first_name,
				last_name,
				token,
				id: result.id,
			},
		});
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: "error", error: "email already in use" });
		}
		throw error;
	}
});

const loadUser = asyncHandler(async (req, res) => {
	try {
		const user = await models.user.findOne({
			where: { email: req.user.email },
		});
		if (user)
			return res.status(200).json({
				status: "success",
				user: { first_name: user.first_name, last_name: user.last_name, email: user.email },
			});
	} catch (error) {
		return res.status(404).json({ status: "error", error: error.message });
	}
});

export default { changePassword, login, register, loadUser };
