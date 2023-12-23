import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // Node.js File System module to read files from the server

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //console.log("File uploaded successfully", response.url);
    fs.unlinkSync(localFilePath); // delete the file from the server
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteOldImageFromCloudinary = async (publicId) => { // publicId is the id of the image on cloudinary server
  try {
    if (!publicId) return null;
    const response = await cloudinary.uploader.destroy(publicId);
    return response;
  } catch (error) {
    return null;
  }
};

export {uploadOnCloudinary, deleteOldImageFromCloudinary};
