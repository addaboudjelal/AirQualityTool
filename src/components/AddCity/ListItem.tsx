import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem} from "react-bootstrap";

/**
 * Simple Component that loop and rendrer all the elements in the list/array we receive from parent Component (AddCity)
 * @param dataList: list of the cities
 * @param removeItem: enable us to remove selected city from the list 
 */

const ListItem = ({ dataList, removeItem }: any) => (
    <Row className="justify-content-start">
    { dataList && dataList.map((data: any, index: number) => (
    <Col sm={12} md={6} lg={4} key={`city-id-${index}`}>
        <Card className="my-4 mx-auto bg-light" style={{ width: '18rem' }}>
                <Card.Title className="p-2 pl-4 m-0"><i>City of</i>  <strong>{data.city}</strong> <i className="float-right text-white bg-info badge">{data.country}</i></Card.Title>
            
            <ListGroup className="list-group-flush">
                {data.measurements.map((elem: any, curr: number) => (
                <ListGroupItem key={`mesure-${index}-${curr}`}>
                    <strong className="text-uppercase badge bg-secondary text-white p-2">{elem.parameter}</strong> <span className="fs-2">{elem.value} {elem.unit}</span>
                </ListGroupItem>))}
            </ListGroup>
             <Card.Body>
                <button className="btn btn-primary btn-sm float-right" onClick={() => { console.log("click", index); removeItem(index); }}>REMOVE</button>
            </Card.Body>
        </Card>
    </Col>))}
</Row>);

export default ListItem;