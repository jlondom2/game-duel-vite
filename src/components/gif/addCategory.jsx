import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

export const addCategory = ({ onNewCategory }) => {
  /////////////

  const [inputValue, setInputValue] = useState("");

  //Handle Change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = event.target.cat.value;

    if (newCategory.length < 1) {
      alert("Value should  not be empty");
      return;
    }

    //////////////////

    onNewCategory(newCategory);
    setInputValue("");
  };

  return (
    <>
      <Container>
        <Row>
          <div className="card">
            <p>
              <strong>Add Your category</strong>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                id="cat"
                value={inputValue}
                placeholder="Type Category"
              />
              <br />
              <input type="submit" />
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default addCategory;
