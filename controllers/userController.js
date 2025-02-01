import User from "../models/user.js";

export async function getUsers(req, res) {
  const listUser = await User.find({});
  console.log(listUser);
  res.status(200).json({ message: "Success", data: { listUser } });
}

export async function addUser(req, res) {
  try {
    const newUser = new User({
      name: req.body.name,
    });
    await newUser.save();
    console.log(newUser);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
  res.send("User added");
}

export async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json("User updated successfully");
  } catch (e) {
    console.log(e);
  }
}

export async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("User deleted successfully");
    res.json("User deleted successfully");
  } catch (e) {
    console.log(e);
  }
}
