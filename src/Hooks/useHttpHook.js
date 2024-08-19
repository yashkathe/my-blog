import { useEffect, useState } from "react";
import axios from "axios";

const useHttpHook = (link) => {

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    const backendProd = import.meta.env.VITE_BACKEND_PROD;
    const backendTest = import.meta.env.VITE_BACKEND_TEST;

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${backendProd}/${link}`);
                setData(response.data.data);
            } catch(err) {
                console.log(err);
                setError(err);
            }
            setIsLoading(false);
        };

        fetchData();

    }, [ link ]);

    return { data, error, isLoading };
};

export default useHttpHook;