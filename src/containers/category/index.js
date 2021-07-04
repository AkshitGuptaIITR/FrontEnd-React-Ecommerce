import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../actions';
import Layout from '../../components/Layout';
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import Input from "../../components/UI/input";

const Category = (props) => {

    const [categoryName, setCategoryName] = useState('');

    const [parentCategoryId, setParentCategoryId] = useState('');

    const [categoryImage, setCategoryImage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {

        const form = new FormData();
        
        form.append('name', categoryName);
        form.append('parentID', parentCategoryId);
        form.append('categoryImage', categoryImage);

        dispatch(addCategory(form));

        setShow(false);
    }

    const handleShow = () => setShow(true);

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        console.log(category);
    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat.name}>
                    {cat.name}
                    {cat.children.length > 0 ? (
                        <ul>
                            {renderCategories(cat.children)}
                        </ul>
                    ) : null}
                </li>
            )
        }

        return myCategories;
    }

    const createCategoryList = (categories, option = []) => {
        for (let cat of categories) {
            option.push({ value: cat._id, name: cat.name });
            if (cat.children.length > 0) {
                createCategoryList(cat.children, option);
            }
        }

        return option;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add</button>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        Label=""
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <select
                        value={parentCategoryId}
                        className="form-control"
                        onChange={(e) => setParentCategoryId(e.target.value)}
                    >
                        <option value="">
                            select Category
                        </option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option value={option.value} key={option.value}>{option.name}</option>
                            )
                        }
                    </select>

                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )
}

export default Category