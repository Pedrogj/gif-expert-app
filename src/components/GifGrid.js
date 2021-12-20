import React, {useState, useEffect} from "react";

const GifGrid = ({ category }) => {
  
  const [state, setState] = useState(0);
  
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=DN0MXFyoDuvrLtEsfHa7rB90fcIMauES";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  return (
    <div>
      <h3>{state}</h3>
      <h3>{category}</h3>
      <button onClick={() => setState( state + 1)}></button>
    </div>
  );
};

export default GifGrid;
