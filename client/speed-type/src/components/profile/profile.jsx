import { useState, useEffect } from "react";
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
import axios from '../../config/axios'
export default function ProfileForm({ open, handleOpen }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("https://via.placeholder.com/40");
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setAvatar(URL.createObjectURL(file)); // Temporarily show selected avatar
    }
  };

  const fetchImages = async (imageId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/image/${imageId}`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error.response?.data || error.message);
    }
  };

  // Handle profile picture upload
  const handleUpload = async () => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("userImage", file);
      formData.append("peter", "parker")

      const response = await axios.post(`http://localhost:3001/api/profile/image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image uploaded successfully", response.data);
      setAvatar(response.data.newImage.url); // Set the uploaded image as avatar
      fetchImages(); // Refresh the image list
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error.message);
    }
  };

  // Handle deleting the profile picture
  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`http://localhost:3001/api/image/${imageId}`); 
      setAvatar("https://via.placeholder.com/40"); 
      alert("Profile picture deleted successfully.");
      fetchImages(); // Refresh the image list
    } catch (error) {
      console.error("Error deleting image:", error.response?.data || error.message);
      alert("Failed to delete the profile picture.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Dialog open={open} handler={handleOpen} className="rounded-[10px]">
      <DialogHeader>Profile</DialogHeader>
      <DialogBody>
        <div className="flex flex-col justify-center items-center">
          <Avatar src={avatar} alt="avatar" withBorder={false} className="p-4 w-32 h-32" />
          <div className="flex gap-[16px] py-[24px] items-center flex-row">
            <Button
              variant="outline"
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
              variant="outline"
              className="flex bg-lightred hover:bg-darkred font-roboto font-semibold text-red rounded-[10px] items-center gap-2"
              onClick={() => handleDelete(images[0]?._id)} // Delete first image as an example
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
};
