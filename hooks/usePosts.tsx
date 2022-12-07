import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const usePosts = () => {
    const [ posts, setPosts ] = useState([]);
    // const [ loadingState, setLoadingState ] = useState(loadingStatus.isLoading);
    const { get, loadingState } = useGetRequest("./api/posts.json");

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await get();
            setPosts(posts);
        };

        fetchPosts();
    }, []);

    return { posts, setPosts, loadingState };
};

export default usePosts;