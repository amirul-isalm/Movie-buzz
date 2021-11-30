import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  movieDetails,
  pageNumber,
  selectedCharecter,
  setCharecter,
} from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const DropDown = () => {
  const allCharectersArray = useSelector((state) => state.allCharecters.charecters);
  const pageCount = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  
  const fetchCharecter = async (pageNumber) => {
    
    
    const res = await axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .catch((err) => {});

    dispatch(setCharecter(res?.data.results));
  };
  
  useEffect(() => {
    fetchCharecter(1);
  }, []);
  
  const changepage = () => {
    if (pageCount) {
      
      fetchCharecter(pageCount)
    }
  };


  if (allCharectersArray.length === 0) {
    return (
      <Loader
        style={{ marginTop: "50vh" }}
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
 
  dispatch(selectedCharecter(allCharectersArray[1].name));

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="mt-5  twoDropDwon "
    >
      <Dropdown className="mt-2  me-1 ">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Charecter page (1-9)
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {[...Array(9).keys()].map((count) => (
            <Dropdown.Item key={count}
              onClick={(e) => {
                dispatch(movieDetails([]));
                changepage();
                dispatch(pageNumber(count + 1));
              }}
            >
              {count + 1}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mt-2">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select a charecter to search Movie
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {allCharectersArray.map((charecter, index) => (
            <Dropdown.Item
              onClick={(e) => {
                dispatch(movieDetails([]));
                dispatch(selectedCharecter(charecter.name));
              }}
              key={index}
            >
              {charecter.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
