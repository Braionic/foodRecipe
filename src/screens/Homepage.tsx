import React, { useContext } from "react";
import { recipeContext } from "../component/Context";
import Card from "../component/Card";

export default function Homepage() {
  const { data, isLoading } = useContext(recipeContext);
  const recipeList = data?.map((data, index) => {
    return (
      <Card
      key={index}
        title={data.title}
        id={data.id}
        publisher={data.publisher}
        img={data.image_url}
      />
    );
  });

  if(isLoading){
    return <div><h2>Loading</h2></div>
  }
  return (
    <div className="" style={{height: "100vh"}}>
      <div className="sm:flex sm:flex-wrap justify-center gap-4 m-10">
        {data?recipeList:(
          <h1 className="uppercase font-bold">Nothing to show, please search SOMETHING</h1>
        )}
      </div>
    </div>
  );
}
