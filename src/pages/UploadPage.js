import React, {useState} from 'react';

const UploadPage = () => {
  const [imageFile, setImageFile] = useState(null)

  axios({
    method: 'POST',
    url: 'https://insta.nextacademy.com/api/v1/images/',
    data: {
      image_url: imageFile,
    }
  })
  .then(response => {
    toast.success("Uploaded successfully!", {
    })
  })
  .catch(error => {
    console.error(error.response.data.message)
    for (let message of error.response.data.message){
        toast.error((message),{
        });
    }
  })


    return(
      // Your code will go here
    )
}

export default UploadPage;