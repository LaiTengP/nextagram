import React, {useState, useEffect} from "react"
import axios from 'axios'
import UserImages from '../containers/UserImages'
import { Container } from "reactstrap"

const MyProfilePage = () => {
    const [user, setUser] = useState({}) 

    useEffect(()=>{
        axios.get(`https://insta.nextacademy.com/api/v1/users/me`, 
        {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
          .then(result => {
            setUser(result.data)
          })
          .catch(error => {
            console.log('ERROR: ', error)
        })
      },[])
    

    return (
    <>
        <Container>
            {
            user?
                <div className="text-center m-3">
                    <h1> Hi,I am <b>{user.username}</b> ! &#x2665; </h1>
                    <img src={user.profile_picture} alt="" width="200px" height="200px" style={{borderRadius: "50%"}}/>
                    <hr />
                    <UserImages userId={user.id}/>
                </div>
                : null
            }
        </Container>
    </>
  )
}

export default MyProfilePage