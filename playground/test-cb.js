function callBackFunction(errors, value) {
    if(errors){
        console.log(errors);
        return new Error(errors);
    }

    // xu ly value
    console.log(value);
    return value;
}

// callBackFunction(null, "./public");
callBackFunction({ message: "thieu tu khoa" }, "./public");
