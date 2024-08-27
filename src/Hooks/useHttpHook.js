import { useEffect, useState } from "react";
import axios from "axios";

const useHttpHook = (link, method = "GET", body = null, headers = {}) => {

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    const backendProd = import.meta.env.VITE_BACKEND_PROD;
    const backendTest = import.meta.env.VITE_BACKEND_TEST;

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                let response;
                if(method === "GET") {
                    response = await axios.get(`${backendProd}/${link}`);
                }
                else if(method === "POST") {
                    response = await axios.post(`${backendProd}/${link}`, body, headers);
                }
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