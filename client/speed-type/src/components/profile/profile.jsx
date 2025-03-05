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
import { MdOutlineCameraAlt,} from "react-icons/md";
import PropTypes from "prop-types";
// import axios from '../../config/axios'
import { uploadProfileImage}from "../../services/imageservice";
export default function ProfileForm({ userProfileImage, onUploadSuccess,  open, handleOpen }) {
  const [avatar, setAvatar] = useState("");
  // const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setAvatar(URL.createObjectURL(file)); 
    }
  };



  const handleUpload = async () => {
    setIsUploading(true);
    try {
      const imageUrl = await uploadProfileImage(file);
      if (imageUrl) {
        setAvatar(imageUrl);
        toast.success("Profile picture uploaded successfully");
        setTimeout(() => {
          handleOpen();
        }, 500);
        onUploadSuccess(imageUrl);
      }
    } catch (error) {
      console.error("Upload failed", error);
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };
  
  // const handleDelete = async () => {
  //   setIsDeleting(true);
  //   try {
  //     const deleteImageUrl = await deleteProfileImage();
  //     if (deleteImageUrl) {
  //       setAvatar("https://i.pravatar.cc/300");
  //       onDeleteSuccess("https://i.pravatar.cc/300");
  //       toast.success("Profile image deleted successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting profile image", error);
  //     toast.error("Could not delete profile image");
  //   } finally {
  //     setIsDeleting(false);
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
          <Avatar src={avatar || 'https://avatar.iran.liara.run/public/boy?username=Ash'} alt="avatar" withBorder={false} className="p-4 w-32 h-32" />
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
            {/* <Button
              variant="outlined"
              className="flex bg-lightred hover:bg-darkred font-roboto font-semibold text-red rounded-[10px] items-center gap-2"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              <MdDeleteOutline className="w-[24px]" />
              <span>Delete</span>
              {isDeleting && <span className="loader flex"></span>}
            </Button> */}
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
        <Button
          variant="gradient"
          className="bg-blue rounded-[10px] flex gap-[8px]"
          onClick={handleUpload}
          disabled={isUploading}
        >
          <span>Save</span>
          {isUploading && <span className="loader flex"></span>}
        </Button>
     
      </DialogFooter>
    </Dialog>
  );
}

ProfileForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  onUploadSuccess: PropTypes.func.isRequired,
  // onDeleteSuccess: PropTypes.func.isRequired,
  userProfileImage: PropTypes.string,
};
