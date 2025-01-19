import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

export default function ProfileForm({ open, handleOpen }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Upload Profile Picture</DialogHeader>
      <DialogBody>
        <p className="mb-4">
          Please select a profile picture to upload. Ensure the image is in
          PNG, JPG, or JPEG format.
        </p>
        <input type="file" accept="image/png, image/jpeg, image/jpg" />
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Upload</span>
        </Button>
      </DialogFooter>
    </Dialog> 
  );
}

ProfileForm.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired
}

