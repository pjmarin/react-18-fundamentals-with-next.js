import { useCallback, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useGetRequest = (url: string) => {
    const [ loadingState, setLoadingState ] = useState(loadingStatus.isLoading);

    // also working
    // const get = async () => {
    //     setLoadingState(loadingStatus.isLoading);
    //     try {
            
    //         // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         const response = await fetch(url);
    //         const allPosts = await response.json();
    //         // setPosts(allPosts);
    //         setTimeout(() => setLoadingState(loadingStatus.loaded), 2000);
    //         return allPosts;
    //     } catch(err) {
    //         setLoadingState(loadingStatus.hasErrored);
    //     }
    // };

    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
            
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const response = await fetch(url);
            const allPosts = await response.json();
            // setPosts(allPosts);
            setTimeout(() => setLoadingState(loadingStatus.loaded), 2000);
            return allPosts;
        } catch(err) {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);

    return { get, loadingState }
};


export default useGetRequest;