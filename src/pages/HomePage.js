import React, {useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserImages from '../containers/UserImages'
import { Link } from 'react-router-dom';
import LoadingIndicator from "../components/LoadingIndicator"
import axios from 'axios'

const HomePage = () => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      console.log(result.data)
      setUsers(result.data)
      setIsLoading(false)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }, []);

  if (isLoading) {
    return <LoadingIndicator width="500px" strokeWidth="15" color="pink"/>
  }
  
  return (
    <Container fluid={true}>
        {/* <h1 id="title">Nexxxxxxxxtagram</h1> */}
        {users.map(user => (
            <Card className="border-right-0 border-left-0" key={user.id}>
              <Row>
                <Col sm="2">
                  <CardImg className="rounded-circle border border-secondary" top width="100%" src={user.profileImage} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{user.id}: {user.username}</CardTitle>
                    {/* <CardSubtitle>xxxxxxxxx</CardSubtitle> */}
                    {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Link to= {`/users/${user.id}/${user.username}`}> See more</Link>
                  </CardBody> 
                </Col >
                <Col sm="10">
                    <UserImages userId = {user.id} />
                </Col >
              </Row>
            </Card>    
            ))}   
  </Container>
  );
}

export default HomePage;


