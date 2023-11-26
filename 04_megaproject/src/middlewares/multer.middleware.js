import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // generate unique name
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname); // this is not a good practice, but it's just for testing
  },
});

// export const upload = multer({ storage: storage });
export const upload = multer({ storage }); // here since key and value are the same, we can use this shorthand syntax instead of {storage: storage}
