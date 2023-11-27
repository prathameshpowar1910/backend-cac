import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation
  // check if user exists
  // check for images,check for avatar
  // upload to cloudinary, avatar
  // create user object - create entry in db
  // remove password and request token fields from response
  // check for user creation
  // send response

  const {fullName, email, username, password} = req.body

  console.log("email : ", email)
});

export { registerUser };
