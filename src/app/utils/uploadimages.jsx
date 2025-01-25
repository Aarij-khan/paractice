import axios from 'axios';

const cloudName = 'dhonaftdo'; // Replace with your Cloudinary cloud name
const uploadPreset = 'images'; // Replace with your Cloudinary upload preset

export const uploadToCloudinary = async (imageUri) => {
  const formData = new FormData();
  formData.append('file', imageUri);
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      formData
    );
    console.log('Upload successful:', response.data);
    return response.data.secure_url; // Returns the secure image URL
  } catch (error) {
    console.error(
      'Error uploading image:',
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
