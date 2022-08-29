import Alert from 'react-bootstrap/Alert';

function Esmi(props){
    const name = props.name;
    return(
        <>
      
        <Alert key="success" variant="success">
          My name is {name} , Nice to meet you ! 
        </Alert>
      
    </>
    );
}
export default Esmi;