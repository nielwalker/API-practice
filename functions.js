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
    return res.json({message: "Successfully registered", 
        username:reg_username,
        password: reg_address,
        age: reg_age,
        address: reg_address
    })

}

function login(req, res){
    const {username,password} = req.body

    if(username.length === 0)
        return res.json("Please fill all information")
    if(password.length === 0)
        return res.json("Please fill all information")
    if(username != "Admin")
        return res.json("Wrong username")
    if(password != "password")
        return res.json("Wrong password")
    return res.json("Log in Successfully")

}


module.exports = {
    register,
    login
    
}