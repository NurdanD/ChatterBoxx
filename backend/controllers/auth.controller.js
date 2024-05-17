import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//Kayıt modeli
export const signup = async(req, res) => {
    try {
      const{fullName, username, password, confirmPassword, gender} = req.body;   //Kullanıcıdan girdileri alıyoruz.


      if (password !== confirmPassword) {
        return res.status(400).json({error:"Password don't match"});   //Girilen parolanın eşleşme durumunu kontrol ederiz.
      }

      const user= await User.findOne({username});           //Kullanıcı adının sistemde daha öncesinde var olup olmadığını kontrol ederiz.

      if (user) {
        return res.status(400).json({error:"Username already exists"});     //Kullanıcı daha önceden sisteme kayıtlıysa hata mesajı yollarız.
      }

      //PAROLAYI HASH FONKSİYONUNA SOKUYORUZ
      const salt =await bcrypt.genSalt(10);
      const hashedPassword= await bcrypt.hash(password,salt);   //Hash fonksiyonuna giren parola şifrelenmiş olur.
                                                                //Bu sayede veritabanına gizlice erişilse bile parolaların güvenliği sağlanır.


      const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}';
      const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}';

      const newUser= new User({                 //Kontroller yukardaki gibi sağlandıktan sonra sorun yoksa kullanıcıya kaydederiz.
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      });

      if(newUser){
        generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();

      res.status(201).json({           //Postman üzerinden kontrol sağlarken kullanıcı kayıt edilince bu çıktıyı alıyoruz.
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic:newUser.profilePic,
      });
      } else{
        res.status(400).json({error:"Invalid user data"});
      }



    } catch (error) {                   //Kullanıcı kaydı sağlanmazsa bu hata mesajını alırız.
      console.log("Error in signup controller", error.message);
      res.status(500).json({error:"Internal Server Error"});
        
    }
    
};

//Giriş modeli
export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user= await User.findOne({username});
        const isPasswordCorrect= await bcrypt.compare( password,user?.password || "");  //Şifre kontrolü 

        if (!user || !isPasswordCorrect) 
        {
            return res.status(400).json({error: "Geçersiz kullanıcı adı veya parola"});   //Şart sağlanmıyorsa hata veriyoruz.
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({           //Postman üzerinden kontrol sağlarken kullanıcı kayıt edilince bu çıktıyı alıyoruz.
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic:user.profilePic,
          });
        }
        
        catch (error) {
        console.log("Çıkış denetleyicisinde hata", error.message);
        res.status(500).json({error:"Dahili Sunucu Hatası"});  
        
    }
    
};

export const logout = async(req, res) => {

    try {
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "Başarıyla çıkış yapıldı"});
    }  catch (error) {
       console.log("Çıkış denetleyicisinde hata", error.message);
       res.status(500).json({error:"Dahili Sunucu Hatası"});
    }
};








