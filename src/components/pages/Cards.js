import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.scss';

function Cards({ project, index }) {


  return (
    <Card style={{ width: '22rem' }}>
      <div className="card-img">
        <Card.Img variant="top" src={project.project_img} />
      </div>
      <Card.Body>
        <Card.Title>{project.project_name}</Card.Title>
        <Card.Text>
          {project.project_des}
        </Card.Text>
        <Button className='check-button' href={project.project_link} target='_blank'>Take Me</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
