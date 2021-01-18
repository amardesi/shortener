import { useEffect, useState } from "react";
/*  Fetch error/loading indicator hook courtesy Henrik Sommerfeld https://www.henriksommerfeld.se/
    initialUrl: "/_api/hummus"
    initialData: [] //usually empty array or object
*/
function ApiHook (path, options, initialData) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {

    const handleFetchResponse = response => {
      setHasError(!response.ok);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      setIsLoading(false);
      return response.ok && response.json ? response.json() : initialData;
    };

    async function fetchData () {
      setIsLoading(true);
      const response = await fetch(path, options);
      console.log(response);
      const data = await handleFetchResponse(response);
      return data;
    };

    if (path)
      fetchData().then(data => setFetchedData(data));

  }, [path, options, initialData]);

  return { isLoading, hasError, data: fetchedData };
};

export default ApiHook;