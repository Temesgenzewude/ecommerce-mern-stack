import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import HeaderLayout from "../../components/Layout/HeaderLayout";
import Input from "../../components/UI/Input/Input";
import CustomModal from "../../components/UI/Modals/CustomModal";

export default function Category(props) {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImg, setCategoryImg] = useState("");

  // Moved to App.js in order to fitch all categories in the initial reload
  // useEffect(() => {
  //   dispatch(getAllCategories());
  // }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    const form = new FormData();

    const cat = {
      categoryName,
      parentCategoryId,
      categoryImg,
    };

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImg", categoryImg);

    dispatch(addCategory(form));

    // After dispatching addCategory , we have to empty category name and parentId
    setCategoryName("");
    setParentCategoryId("");

    setShow(false);
  };
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let myCategories = [];

    for (let category of categories) {
      myCategories.push(
        <li key={category._id}>
          {category.name}

          {category.children.length > 0 ? (
            <ul> {renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });

      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  const handleCategoryImg = (e) => {
    setCategoryImg(e.target.files[0]);
  };

  return (
    <HeaderLayout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Categories</h3>

              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>

      <CustomModal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Category"}
      >
        <Input
          type={"text"}
          value={categoryName}
          placeholder={"Category Name"}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <select
          className="form-control"
          value={parentCategoryId}
          onChange={(e) => setParentCategoryId(e.target.value)}
        >
          <option>Select Parent Category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <input type="file" name="categoryImg" onChange={handleCategoryImg} />
      </CustomModal>
    </HeaderLayout>
  );
}
