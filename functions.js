function register(req, res){
    const {reg_username, reg_password, reg_age, reg_address} = req.body

    if(reg_username.length ===0)
        return res.json ("Please Input Username")
    if(reg_password.length ===0)
        return res.json ("Please Input Password")
    if(reg_age.length ===0)
        return res.json ("Please Input Age")
    if(reg_address.length ===0)
        return res.json ("Please Input Address")
    return res.json("Successfully registered")

}

function login(req, res){
    const {username,password} = req.body

    if(username != "Admin" && password != "password")
        return res.json("Log In Failed")
    if(username.length === 0 && password.length === 0)
        return res.json("please fill all information")
    return res.json("Log in Successfully")

}


module.exports = {
    register,
    login
    
}