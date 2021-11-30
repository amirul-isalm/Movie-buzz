import axios from "axios";
import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../redux/actions/ProductAction";
import SingleMovie from "./SingleMovie";

const FilmInfo = () => {
  const allCharectersArray = useSelector(
    (state) => state.allCharecters.charecters
  );

  const movieForTarget = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();
  const clickedCharecter = useSelector((state) => state.charecter);

  const target = allCharectersArray?.filter((SingleCharecter) => SingleCharecter.name === clickedCharecter);



  const movies = target[0]?.films;

    const fetchCharecter = async () => {
        const moviesArray = [];
      for (let i = 0; i < movies?.length; i++) {
          const element = movies[i];
          const res = await axios.get(`${element}`).catch((err) => { });
          moviesArray.push(res.data);
      }

console.log(moviesArray)
        dispatch(movieDetails(moviesArray));


  
      
    }

  useEffect(() => {
    fetchCharecter();
  }, [movies]);

  if (clickedCharecter === "") {
   return <h3 className="mt-5">Please, <br /> Select  Your Favourit Charecter From the DropDown</h3>
       }
  if (movieForTarget.length === 0) {
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
    
    
  
  return (
    <div>
      <h4 className="mt-2">
        {" "}
        <b>{target[0].name}'s</b> Total Movie {movieForTarget.length}
      </h4>
      '
      <div className="container my-4 " style={{ alignItems: "center" }}>
        <Row className="g-3 g-lg-3">
          {movieForTarget.map((moviee, _index) => (
            <Col key={_index} xs={12} sm={6} md={4}>
              <SingleMovie key={_index} moviee={moviee}></SingleMovie>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FilmInfo;
