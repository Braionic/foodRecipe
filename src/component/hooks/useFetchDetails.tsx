import React, { useEffect, useState } from "react";

export default function useFetchDetails(apiString: string) {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const fetchMyData = async (api: string) => {
    setIsloading(true);
    try {
      const response = await fetch(api);
      const result = await response.json();
      console.log(result.data.recipes);
      if (result?.data?.recipe) {
        return setData(result.data.recipe);
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
    fetchMyData(apiString);
  }, []);
  return { data, error, isLoading, fetchMyData };
}
