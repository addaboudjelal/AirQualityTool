import React from 'react'
import ApiStatus from './ApiStatus';
import AddCity from '../AddCity';
import { Container, Row, Col} from 'react-bootstrap';
const App = () => {
    return (<Container>
        <Row>
            <Col>
                <h1>Air Quality Tool</h1>
                <ApiStatus />
            </Col>
        </Row>
        <Row>
            <AddCity />
        </Row>
    </Container>)
}

export default App;