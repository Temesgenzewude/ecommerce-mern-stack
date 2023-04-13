import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions";
import HeaderLayout from "../../components/Layout/HeaderLayout";
import Input from "../../components/UI/Input/Input";
import CustomModal from "../../components/UI/Modals/CustomModal";

export default function Products(props) {
  const [name, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPicture, setProductPicture] = useState("");

  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPicture) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form));

    setShow(false);
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });

      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  const handleProductPicture = (e) => {
    setProductPicture([...productPicture, e.target.files[0]]);
  };

  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Description</th>
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
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <HeaderLayout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()} </Col>
        </Row>
      </Container>

      <CustomModal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Product"}
      >
        <Input
          type={"text"}
          value={name}
          placeholder={"Product Name"}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          type={"number"}
          value={quantity}
          placeholder={"Product Quantity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          type={"number"}
          value={price}
          placeholder={"Product Price"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type={"text"}
          value={description}
          placeholder={"Product Description"}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Product Category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {productPicture.length > 0
          ? productPicture.map((pic, index) => (
              <Row>
                <Col key={index}> {pic.name}</Col>
              </Row>
            ))
          : null}
        <input
          type="file"
          name="productPicture"
          onChange={handleProductPicture}
        />
      </CustomModal>
    </HeaderLayout>
  );
}
