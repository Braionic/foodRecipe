import React, {
  useContext,
  Dispatch,
  SetStateAction,
  ProviderProps,
} from "react";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { recipeContext } from "./Context";

const { log } = console;

export default function Header() {
  const { recipeValue, handleChange, handleSubmit } = useContext(recipeContext);
  const Navigate = useNavigate()
  log(recipeValue);
  return (
    <nav className="flex justify-between p-5">
      <h3 className=""><Link to=".">FoodRecipe</Link> </h3>
      <div>
        <form onSubmit={(e)=>handleSubmit?.(e)}>
        <input
          value={recipeValue}
          onChange={(e) => {handleChange?.(e), Navigate('/')}}
          className="py-1 px-4 rounded-full shadow-md shadow-red-200 outline-0 focus:text-gray-500 focus:bg-red-300"
          type="text"
          name="recipe"
          placeholder="search recipe"
        />
        </form>
      </div>

      <ul className="flex gap-2">
        <li>
          <NavLink to=".">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourite</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
