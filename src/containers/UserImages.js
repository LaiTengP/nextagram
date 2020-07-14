import axios from 'axios'
import React, {useState, useEffect} from 'react';
import LoadingIndicator from "../components/LoadingIndicator"
import { Row, Col } from "reactstrap"
    
const UserImages = (props) => {
  const {userId} = props
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);
 
  
  useEffect(() => {
    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
    .then(result => {
      console.log(result.data)
      setImages(result.data)
      setLoading(false)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }, [userId]);

  if (loading) {
    return <LoadingIndicator width="100px" strokeWidth="3" color="purple"/>
  }

  return (
    <>
    <Row>
      {
        images.map((image,index)=>{
          return (
            <Col sm="4" className='p-3 p-sm-0' key={`${userId}-images${index}`} >
              <img src={image} alt="user images" style={{objectFit:'cover'}} width="100%" height="250" className='p-1 mx-auto image-fluid'/>
            </Col>
          )
        })
      }        
    </Row>
    </>
  )
}

export default UserImages;
