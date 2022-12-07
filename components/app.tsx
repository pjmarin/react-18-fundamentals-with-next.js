import { useState } from "react";
import Post from "../interfaces/post.interface";
import Banner from "./banner";
import PostDetail from "./postDetail";
import PostList from "./postList";

// const App = () => {
//     const [ selectedPost, setSelectedPost ] = useState();
//     // return <Banner headerText="Providing houses all over the world" />
//     return (
//         <>
//             <Banner>Providing houses all over the world</Banner>
//             { selectedPost ? <PostDetail detailedPost={selectedPost} /> : <PostList selectPost={setSelectedPost} /> }
//         </>
//     )
// };

const App = () => {
    const [ selectedPost, setSelectedPost ] = useState();
    const setSelectedPostWrapper = (post: Post | any) => {
        setSelectedPost(post);
    };
    return (
        <>
            <Banner>Providing houses all over the world</Banner>
            { selectedPost ? <PostDetail detailedPost={selectedPost} /> : <PostList selectPost={setSelectedPostWrapper} /> }
        </>
    )
};

export default App;