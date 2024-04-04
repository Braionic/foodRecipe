import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
} from "react";
import useFetch from "./hooks/useFetch";
import { Navigate, useNavigate } from "react-router-dom";
export interface dataInterface {
  title: string;
  publisher: string;
  id: string;
  image_url: string;
}

interface value {
  recipeValue: string | undefined;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setRecipeValue?: Dispatch<SetStateAction<string>>;
  data: dataInterface[];
  isLoading: boolean;
  handleFavourite: (id: string | undefined) => void;
  favouriteCopy: (string | undefined)[];
}
export const recipeContext = createContext<Partial<value>>({});
export default function Context({ children }: { children: ReactNode }) {
  const [recipeValue, setRecipeValue] = useState("");
  const [newRecipeValue, setNewRecipeValue] = useState("");
  const [favourite, setFavourite] = useState<(string | undefined)[]>([]);
  const { data, error, isLoading } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeValue}&skip=40`,
    recipeValue
  );

  let favouriteCopy = [...favourite];
  const handleFavourite = (id: string | undefined) => {
    const res: boolean = favouriteCopy?.indexOf(id) === -1;
    const findIndex = favouriteCopy.findIndex((number) => number == id);
    if (res) {
      favouriteCopy.push(id);
    } else {
      favouriteCopy.splice(findIndex, 1);
    }
    setFavourite(favouriteCopy);
    console.log(favouriteCopy);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setNewRecipeValue(recipeValue);
  };
  return (
    <recipeContext.Provider
      value={{
        recipeValue,
        handleChange,
        handleSubmit,
        handleFavourite,
        data,
        isLoading,
        favouriteCopy,
      }}
    >
      <div>{children}</div>
    </recipeContext.Provider>
  );
}
