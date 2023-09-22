module.exports  =  reqFilter = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.send("Please enter age");
    } else if (age < 18) {
        res.send("You cannot access this page, sorry...");
    } else {
        // res.send("So you are " + age + " years old");
        next();
    }
}