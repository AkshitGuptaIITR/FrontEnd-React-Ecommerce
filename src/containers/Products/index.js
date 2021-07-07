import React from 'react'
import Layout from '../../components/Layout'
import { Modal, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useState } from 'react';
import Input from "../../components/UI/input";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product';
import NewModal from '../../components/UI/Model';

const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [show, setShow] = useState(false);
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    const handleClose = () => {
        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for (let pic of productPictures) {
            form.append('productPicture', pic);
        }

        dispatch(addProduct(form));

        setShow(false);
    }

    const handleShow = () => setShow(true);

    const createCategoryList = (categories, option = []) => {
        for (let cat of categories) {
            option.push({ value: cat._id, name: cat.name });
            if (cat.children.length > 0) {
                createCategoryList(cat.children, option);
            }
        }

        return option;
    }

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

    const handleProductPictures = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ])
    }

    const renderProducts = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Product Pictures</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h3>Product</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
                <NewModal
                    modalTitle={"Add Product"}
                    handleClose={handleClose}
                    show={show}
                >
                    <Input
                        Label="Name"
                        value={name}
                        placeholder={'Product Name'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        Label="Quantity"
                        value={quantity}
                        placeholder={'Quantity'}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Input
                        Label="Price"
                        value={price}
                        placeholder={'Price'}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        Label="Desicription"
                        value={description}
                        placeholder={'Description'}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select name="" id="" className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="">Select Option</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option value={option.value} key={option.value}>{option.name}</option>
                            )
                        }
                    </select>
                    {
                        productPictures.length > 0 ?
                            productPictures.map((pic, index) => <div key={index}> {JSON.stringify(pic.name)} </div>) : null
                    }
                    <input type="file" name="productPicture" onChange={handleProductPictures} />
                </NewModal>
            </Container>
        </Layout>
    )
}

export default Products
