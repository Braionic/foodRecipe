import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useFetch(apiString: string, value:string) {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsloading] = useState(false);
 
  const fetchData = async (api: string) => {
    setIsloading(true);
    try {
      const response = await fetch(api);
      const result = await response.json();
      console.log(result.data.recipes);
      if (result?.data?.recipes && result.data.recipes.length) {
        
        return setData(result.data.recipes);
      }
    } catch (error) {
      if (error) {
        return setError(error);
      }
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData(apiString);
  }, [apiString, value]);
  return { data, error, isLoading, fetchData };
}
