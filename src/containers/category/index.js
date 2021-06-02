import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';
import Layout from '../../components/Layout';


const Category = (props) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());

    }, []);
    // console.log(category.categories.categoryList)   

    const renderCategories = (categories) => {
        // console.log(categories+"sbdj");

        console.log(categories);
        const myCategories = [];
        // categories?.categoryList?.map(item => {
        //    console.log(item)
        // })
        // for (let category1 in categories) {
        //     myCategories.push(
        //         
        //     )
        // }
        // console.log("categories")
        return categories;
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Category