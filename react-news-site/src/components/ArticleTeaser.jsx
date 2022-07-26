import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

// function ArticleTeaser (props){
function ArticleTeaser ({id, title, created_date}){
    return(
        <Container>
            <hr/>
            <Row>
                <Col lg='8'>
                    <h2 >
                        <Link to={`/articles/${id+1}`} >{title} </Link>
                    </h2>
                </Col>
                <Col lg='4'>
                    <p>{created_date}</p>
                </Col>
            </Row>
        </Container>
    )
}
export default ArticleTeaser;