import mongoose = require("mongoose");

import IUser = require("../types/models/user");

interface IUserModel extends IUser, mongoose.Document { }

var userSchema = new mongoose.Schema({
	email: String,
	password: String,
	displayName: String
});

export const User = mongoose.model<IUserModel>("User", userSchema);
