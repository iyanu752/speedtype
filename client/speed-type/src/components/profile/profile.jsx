import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
//   Input,
} from "@material-tailwind/react";
import { MdOutlineCameraAlt, MdDeleteOutline } from "react-icons/md";
import PropTypes from "prop-types";
// import axios from '../../config/axios'
import { uploadProfileImage, deleteProfileImage }from "../../services/imageservice";
export default function ProfileForm({ userProfileImage, onUploadSuccess, open, handleOpen }) {
  const [avatar, setAvatar] = useState("");
  // const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setAvatar(URL.createObjectURL(file)); 
    }
  };



  const handleUpload = async () => {
    try {
      const imageUrl = await uploadProfileImage(file);
      if (imageUrl) {
        setAvatar(imageUrl);
        toast.success("Profile picture uploaded sucessfully")
        setTimeout(() => {
          handleOpen()
        }, 500);
        setAvatar(imageUrl)
        onUploadSuccess(imageUrl)
      }
    } catch (error) {
      console.error("upload failed", error)
      toast.error("Failed to upload image")
    }
  };

  // Handle deleting the profile picture
  // const handleDelete = async () => {
  //   try {
  //     const userData = localStorage.getItem('user')
  //     const userId = userData.profileImg
  //     await deleteProfileImage(userId)
  //     setAvatar("https://via.placeholder.com/40"); 
  //     toast.sucess("Profile picture deleted successfully.");
  //     // fetchImage();
  //   } catch (error) {
  //     console.error("Error deleting image:", error.response?.data || error.message);
  //     alert("Failed to delete the profile picture.");
  //   }
  // };

  useEffect(() => {
    setAvatar(userProfileImage)
     //todo: rework this and user as user service
  }, [userProfileImage]);

  return (
    <Dialog  open={open} handler={handleOpen} className="rounded-[10px]">
      <DialogHeader>Profile</DialogHeader>
      <DialogBody>
        <div className="flex flex-col justify-center items-center">
          <Avatar src={avatar} alt="avatar" withBorder={false} className="p-4 w-32 h-32" />
          <div className="flex gap-[16px] py-[24px] items-center flex-row">
            <Button
              variant="outlined"
              className="flex bg-light-blue-100 hover:bg-light-blue-200 font-roboto font-semibold text-black rounded-[10px] items-center gap-2"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <MdOutlineCameraAlt className="w-[24px]" />
              Add Picture
            </Button>
            <input
              id="fileInput"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              variant="outlined"
              className="flex bg-lightred hover:bg-darkred font-roboto font-semibold text-red rounded-[10px] items-center gap-2"
              // onClick={() => handleDelete(images[0]?._id)} 
            >
              <MdDeleteOutline className="w-[24px]" />
              Delete
            </Button>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-[32px]">
            <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div> */}
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" className="bg-blue rounded-[10px]" onClick={handleUpload}>
          <span>Save</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

ProfileForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  onUploadSuccess: PropTypes.func.isRequired,
  userProfileImage: PropTypes.string,
};
