const path = require('path');

const aboutController={
    about: (req,res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
    },
}


module.exports= aboutController;