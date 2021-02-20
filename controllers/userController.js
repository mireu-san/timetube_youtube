export const join = (req, res) => 
    res.send("Join", { pageTitle: "Join" });
export const login = (req, res) => 
    res.send("Log in", { pageTitle: "Log in" });
export const logout = (req, res) => 
    res.send("Log out", { pageTitle: "Log out" });

export const userDetail = (req, res) => 
    res.send("User Detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => 
    res.send("Edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => 
    res.send("Change Password", { pageTitle: "Change Password" });
