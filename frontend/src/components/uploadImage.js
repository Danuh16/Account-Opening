import React,{ useState,useContext} from 'react';
import ImageUploading from 'react-images-uploading';
import { Formik, Field } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import axios from 'axios';

export default function UploadImage() {



  const [images,setImages] = useState({
    myFile:"",
  });
    const maxNumber = 1;
  
  const url = "/uploadImage";
  const createImage = (newImage) => axios.post(url, newImage);
    
      const createPost = async (post) => {
        try {
          await createImage(post);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        createPost(images);
      };
    
      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
      const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImages({ ...images, image: base64 });
      };

  const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        };
  const { uploadImage, setUploadImage,prev, submit } = useContext(MultiStepFormContext);
        console.log(uploadImage)
  return (
   
   
      <Formik
          initialValues={uploadImage}
          onSubmit={async (values) => {
          await setUploadImage(values);
          submit();
  }}>
  
  {({ values}) => {
  return (
    <div>
      <ImageUploading                     
        width={500}
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          <div className="upload">
            <button
              style={{width:'30%',border: '1px solid #ffce03',backgroundColor:'#faefc4',color:'black' ,marginLeft:'35%',marginTop:'10%',height:'40px'}}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click to Upload
            </button>
                 {imageList.length>=1 && imageList.map((image, index) => {

              <div key={index} className="image-item">
                <img src={image["dataURL"]} alt="" width="100%" 
                    label='Image' 
                    name='image' 
                    value={values.image} 
                    accept=".jpeg,.png,jpg"
                    onChange={(e)=> handleFileUpload}/>
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} 
                          style={{width:'5%',border: '1px solid #ffce03',backgroundColor:'#faefc4',color:'black' }}>
                          Update
                  </button>
                  <button onClick={() => onImageRemove(index)} 
                          style={{width:'5%',border: '1px solid #ffce03',backgroundColor:'#faefc4',color:'black' }}>
                          Remove
                  </button>
                </div>
              </div>
  })}
          </div>
        )}
      </ImageUploading>
      
      {({ imageList, onImageUpload, onImageRemoveAll, errors }) =>
        errors && (
          <div>
            {errors.maxNumber && (
              <span>Number of selected image exceed maxNumber</span>
            )}
            {errors.acceptType && (
              <span>Your selected file type is not allow</span>
            )}
            {errors.maxFileSize && (
              <span>Selected file size exceed maxFileSize</span>
            )}
            {errors.resolution && (
              <span>Selected file is not match your desired resolution</span>
            )}
          </div>
        )
      }
    <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'18%',textAlign:'center'}}>
            <Button 
              type={"primary"} 
              onClick={prev}>
                Prev
            </Button>
            <Button 
              type={"primary"} 
              onClick={handleSubmit}>
                Submit
            </Button>
    </div> 
    </div>
    );
  }}
     </Formik>
  ); }
