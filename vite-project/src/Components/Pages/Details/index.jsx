import React, { useEffect, useState } from "react";
import "./";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/Products/"+id);
    const jsondata = await response.json();
    console.log(jsondata);
    setData(jsondata);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return(
  <>
  <img src={data.image}/>
  <p>{data.name}</p>
  </>
    
  )
  
};

export default Details;
