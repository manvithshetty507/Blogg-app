const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if(!accessToken) return res.json({error: "user not Logged in"})

    try{
        const validToken = verify(accessToken,"mytoken") // will have the username and id from the token 
        req.user = validToken;
        if(validToken) {
            return next()
        }
    }catch(error) {
        return res.json({error:error})
    }
}

module.exports = {validateToken};