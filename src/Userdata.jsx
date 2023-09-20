import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Userdata.css";

const Userdata = () => {
  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await userResponse.json();
        setUsers(userData);

        // Fetch image data
        const imageResponse = await axios.get(
          "https://finalspaceapi.com/api/v0/character/?limit=10"
        );
        const characterData = imageResponse.data;
        const imageUrls = characterData.map((elem) => elem.img_url);
        setImages(imageUrls);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error while fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="wrapper">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            {images.map((elem, index) => (
              <div className="card-item" key={index}>
                <div className="imageinfo">
                  <img src={elem} alt={`Character ${index + 1}`} />
                </div>
                <div className="info">
                  <h1 style={{ color: "grey" }}>
                    <span style={{ color: "black" }}>Customer Full Name: </span>
                    {users[index].name}
                  </h1>
                  <h3 style={{ color: "blue" }}>
                    <span style={{ color: "black" }}>Customer Email:</span>{" "}
                    {users[index].email}
                  </h3>
                  <p style={{ color: "green" }}>
                    <span style={{ color: "black" }}>Customer Place: </span>
                    {users[index].address.city}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Userdata;
