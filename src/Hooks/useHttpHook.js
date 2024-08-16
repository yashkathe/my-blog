import { useEffect, useState } from "react";
import axios from "axios";

const useHttpHook = (link) => {

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/${link}`);
                setData(response.data.data);
                console.log(response.data, response.data.data)
            } catch(err) {
                console.log(err)
                setError(err);
            }
            setIsLoading(false);
        };

        fetchData();

    }, []);

    return { data, error, isLoading };
};

export default useHttpHook