import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // Node.js File System module to read files from the server

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // if (!localFilePath) return null;
    if (!localFilePath) throw new Error("Missing required params");
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully", response.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the file from the server
    return null;
  }
};

export {uploadOnCloudinary};
