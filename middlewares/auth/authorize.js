const authorize = (arrType) => (req, res, next) => {
    const { user } = req;
    console.log("user: ", user);

    if(arrType.findIndex((ele)=>ele===user.type) > -1) {
        next();
    }else{
        res.status(403).send("Ban da dang nhap thanh cong, nhung k cos quyen!")
        next();
    }
};

module.exports = {
    authorize
};

