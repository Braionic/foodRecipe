import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "./Context";
interface testing {
  id?: string;
  title?: string;
  image_url?: string;
  publisher?: string;
  ingredients?: [
    {
      description: string;
      quantity: number;
      unit: string;
    }
  ];
}
export default function RecipeDetailsCard({
  recipeId,
}: {
  recipeId: string | undefined;
}) {
  const [data, setData] = useState<testing>({});
  const [isLoading, setIsLoading] = useState(false);
  const { handleFavourite, favouriteCopy } = useContext(recipeContext);
  useEffect(() => {
    async function handleFetch() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        );
        const result = await response.json();
        if (result?.data?.recipe) {
          setData(result?.data?.recipe);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    handleFetch();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading please wait</h1>
      </div>
    );
  }
  return (
    <div className="grid  grid-cols-2 my-5 p-10">
      <div className="rounded overflow-hidden mx-5 min-w-8">
        <img src={data?.image_url} className="w-full h-32 md:h-96 object-cover hover:object-fill" />
      </div>
      <div className="details-container">
        <p className="text-xs">{data?.publisher}</p>
        <p className="font-bold">{data?.title}</p>

        <button
          onClick={() => handleFavourite?.(data?.id)}
          className="bg-black py-2 px-4 text-white rounded my-2 text-xs"
        >
          {favouriteCopy?.indexOf(data.id) === -1? "Add to favourite": "Remove from Favourite"}
        </button>

        <p className="font-bold">Ingredients:</p>
        {data.ingredients?.map((ingredient, index) => (
          <div key={index}>
            <span className="font-semibold text-sm">{`${ingredient?.quantity} ${ingredient?.unit} ${ingredient?.description}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
