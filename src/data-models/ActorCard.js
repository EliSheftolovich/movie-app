import moment from "moment";
import { Card, Col } from "react-bootstrap";

const ActorCard = (props) => {
  let age = moment().diff(props.dob, 'years',false);
    return (
      <Col xs={12} md={4} style={{paddingTop: "5vh"}}>
        <Card >
        <Card.Img variant="top" src = {props.actorsPic}  />
        <Card.Body>
          <Card.Title><a href={props.imdbLink} target="_blank">{ props.Fname +' '+ props.Lname}</a></Card.Title>
          
            <h6>First Name: {props.Fname}</h6>
            <h6>Last Name: {props.Lname}</h6>
            <h6>Birthday: {props.dob}</h6>
            <h6>IMDB link:<a href={props.imdbLink}> Click Here</a></h6>
            <h6>Age: {age}</h6>
          
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      </Col>
    )
}

export default ActorCard;