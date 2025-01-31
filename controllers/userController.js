import User from "../models/user.js";

export async function getUsers(req, res) {
  const listUser = await User.find({});
  console.log(listUser);
  res.status(200).json({ message: "Success", data: { listUser } });
}
