import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <Row className='my-5 mb-5'>
            <Col sm="12" className='justify-content-center d-flex'>
                <div>
                    <Button className='btn mx-2'>Menu</Button>
                    <Button className='btn mx-2'>Petit-Déjeuné</Button>
                    <Button className='btn mx-2'>Déjeuné</Button>
                    <Button className='btn mx-2'>Menu du Soir</Button>
                </div>
               
            </Col>
        </Row>
    );
};

export default Category;