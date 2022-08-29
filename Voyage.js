import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Voyage.css'

function Voyage(props){

    const link = props.link ;
    const desc = props.desc ;
    const destination = props.destination;
    
    return(
    

<Card className='mycard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{destination}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">let's visit {destination}</Button>
      </Card.Body>
    </Card>

    
    );
}
export default Voyage;