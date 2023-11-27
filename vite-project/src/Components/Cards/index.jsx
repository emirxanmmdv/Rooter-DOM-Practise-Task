import React, { useEffect } from "react";
import useFetch from "../Hook/useFetch";
import "./cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const { data, fetchData } = useFetch();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
      {data &&
        data.map((item) => (
          <div className="card">
            <ul key={item.id}>
              <li className="image">
                <img src={item.image} />
              </li>
              <li className="category">{item.category}</li>
              <li className="name">{item.name}</li>
              <li className="price">{item.price}</li>
              <Link to={`/Details/${item.id}`}>
                <button className="clickBtn">Mənə Toxun</button>
              </Link>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Cards;
