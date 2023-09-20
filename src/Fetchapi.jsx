import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [apidata, setapiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setapiData(data);
        setIsLoading(false); // Set loading state to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading state to false on error
      }
    }

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once on component mount.

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        apidata.map((elem, i) => <p key={i}>{elem.rating.count}</p>)
      )}
    </div>
  );
};

export default FetchAPI;
