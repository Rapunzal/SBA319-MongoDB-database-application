import User from "../models/user.js";

export async function getUsers(req, res) {
  const listUser = await User.find({});
  console.log(listUser);
  res.status(200).json({ message: "Success", data: { listUser } });
}

export async function addUser(req, res, next) {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    await newUser.save();
    console.log(newUser);
    res.send("User added");
  } catch (e) {
    console.log(e);
    next(e);
    //res.send(e);
  }
}

export async function updateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function deleteUser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("User deleted successfully");
    res.json("User deleted successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}
