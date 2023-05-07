const cloudinary = require("cloudinary").v2;

const base64ToHttps = (dataURI) => {
  let URLEnd;
  cloudinary.config({
    cloud_name: "dztfrtajl",
    api_key: "667977251421997",
    api_secret: "xSGbKD9hpB-wQya5bHzc_c4Nao8",
  });

  async function uploadToCloudinary(base64Image) {
    try {
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        upload_preset: "ml_default", // Replace with your Cloudinary upload preset name
      });

      return uploadResult.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  }
  // Example usage
  const base64Image = dataURI;

  uploadToCloudinary(base64Image)
    .then((secureUrl) => {
      URLEnd = secureUrl;
    })
    .catch((error) => {
      console.error("Error uploading image:", error);
    });

  return URLEnd;
};

export default base64ToHttps;