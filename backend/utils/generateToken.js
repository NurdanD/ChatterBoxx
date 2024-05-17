import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie =(userId,res) =>{

    const token =jwt.sign({userId}, process.env.JWT_SECRET, {     //token oluşturuyoruz. 3 kısımdan oluşuyor. JWT_SECRET sayesinde gizlilik sağlanıyor.
        expiresIn:'15d',                                           //tokenın 15 gün sonra sona eriyor. 
    }); 

    res.cookie("jwt", token, {
        maxAge:15 * 24 * 60 * 60 * 1000,  //15 günü milisaniye cinsine çevirdik
        httpOnly:true,  //cookie yalnızca HTTP'ye erişebilir. XSS SALDIRILARI ENGELLENİR.
        sameSite:"strict",  //CSRF SALDIRILARI ENGELLENİR.
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;