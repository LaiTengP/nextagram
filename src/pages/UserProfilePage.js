import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import UserImages from '../containers/UserImages'
import { Container } from "reactstrap"

const UserProfilePage = () => {
    const {id, username} = useParams()
    console.log(id, username)

    const [user, setUser] = useState({}) 

    useEffect(() => {
      axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
        .then((result) => {
          setUser(result.data)
        })
    }, [id])
    

    return (
    <>
    <Container>
      <div className="text-center m-3">
        <h1> Hi,I am <b>{username}</b> ! &#x2665; </h1>
        <img src={user.profileImage} alt="" width="200px" height="200px" style={{borderRadius: "50%"}}/>
        <hr />
        <UserImages userId={id}/>
      </div>
    </Container>
    </>
  )
}

export default UserProfilePage