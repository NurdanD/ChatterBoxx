
import User from "../models/user.model.js";

//Uygulamada sol taraftaki sidebar yaratıldı
export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");  //Giriş yapan kullanıcı dışındaki kullanıcılar sidebarda gözükecek.

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
