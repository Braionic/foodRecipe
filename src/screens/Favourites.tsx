import React, { useContext } from "react";
import { recipeContext } from "../component/Context";
import Card from "../component/Card";

export default function Favourites() {
  const { favouriteCopy, data } = useContext(recipeContext);
  console.log(data);
  const listFilter = data?.filter((item) => favouriteCopy?.includes(item.id));
  const recipeList = listFilter?.map((data, index) => {
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

  return (
    <>
    <h1 className="text-center font-bold mt-5 text-xl">Your Favourites</h1>
      <div className="sm:flex sm:flex-wrap justify-center gap-4 m-10">
        {favouriteCopy?.length ? recipeList : <div>No Item in your favourite</div>}
      </div>
    </>
  );
}
