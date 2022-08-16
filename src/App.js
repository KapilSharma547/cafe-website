import React, { useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {

  // useEffect(async () => {
  //   let res = await fetch("https://masai-api.herokuapp.com/coffee/menu");
  //   let result = await res.json();
  //   let arr = result.menu.data
  //   console.log(arr)
  // }, [])

  return (
    <>
      <div className="dvHeader">
        <Header />
      </div>

      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default App;


      // // let url = 'https://jsonplaceholder.typicode.com/photos/500'
      // // let url = 'https://jsonplaceholder.typicode.com/todos'
      // let url ="https://masai-api.herokuapp.com/coffee/menu"