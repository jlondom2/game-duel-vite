import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AddCategory from "./gif/addCategory";
import GifGrid from "./gif/gifGrid";

const Test = ({ title, value, gifs }) => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newValue) => {
    console.log("New Value is" + " " + newValue);
    setCategories([...categories, newValue]);
  };

  return (
    <>
      <div className="mt-5 text-center">
        <h1>Gift Expert App</h1> <br />
        <div>
          {categories.map((category, index) => {
            return <GifGrid category={category} key={category}></GifGrid>;
          })}
        </div>
        <br />
        <AddCategory onNewCategory={onAddCategory}></AddCategory>
      </div>
    </>
  );
};

export default Test;

Test.propTypes = {
  value: PropTypes.number.isRequired,
};
