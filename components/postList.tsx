import React, { useEffect, useState } from "react";
import HouseRow from "./postRow";
import House from "../interfaces/house.interface";
import Post from "../interfaces/post.interface";
import * as housesFromJson from "./../public/api/houses.json";
import PostRow from "./postRow";

import usePosts from "../hooks/usePosts";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

// const housesArray = [
//     {
//         id: 1,
//         address: "12 valley of kings, Geneva",
//         country: "Switzerland",
//         price: 90000
//     },
//     {
//         id: 2,
//         address: "89 road of Forks, Bern",
//         country: "Switzerland",
//         price: 50000
//     }
// ];

// const HouseList = () => {
//     return(
//         <div>
//             <div className="row mb-2">
//                 <h5 className="themeFontColor text-center">Houses currently in the market</h5>
//             </div>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <td>Address</td>
//                         <td>Country</td>
//                         <td>Asking price</td>
//                     </tr>
//                 </thead>
//                 <tbody></tbody>
//             </table>
//         </div>
//     );
// };

// En lugar de contener todo el html dentro de un div, ya que react no acepta varios componentes sibling,
// podemos utilizar React.Fragment
const HouseListReactFragment = () => {
    return(
        <React.Fragment>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">Houses currently in the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>userId</td>
                        <td>Id</td>
                        <td>title</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </React.Fragment>
    );
};

// En lugar de utilizar React.Fragment, utilizamos la sintaxis abreviada, que es un tag vacio
// const HouseList = () => {
//     return(
//         <>
//             <div className="row mb-2">
//                 <h5 className="themeFontColor text-center">Houses currently in the market</h5>
//             </div>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <td>Address</td>
//                         <td>Country</td>
//                         <td>Asking price</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { houses.map(house => (
//                         <HouseRow key={house.id} house={house} />
//                     )) }
//                 </tbody>
//             </table>
//         </>
//     );
// };


// const PostList = (props: any) => {
    const PostList = ({ selectPost }: { selectPost: (post: Post | any) => void }) => {
    // const [ houses, setHouses ] = useState(housesArray);
    // const [ posts, setPosts ] = useState([]);

    // useEffect(() => {
    //     const fetchHouses = async () => {
    //         const respuesta = await fetch("api/posts.json");
    //         const posts = await respuesta.json();
    //         setPosts(posts);
    //         // fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
    //         //     // const houses = await data.json();
    //         //     setHouses([...data]);
    //         // });
    //         // const houses = await response.json();
    //     };

    //     fetchHouses();
    // }, []); // El array vacio del segundo parametro de useEffect es para evitar re-rendering

    const { posts, setPosts, loadingState } = usePosts();

    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }

    // const addHouse = (event: Event | undefined, house: House) => {
    const addPost = () => {
        // setPosts([...posts, { id: 3, userId: 1, title: "titulo1", body: "body1" }]);
        // return houses;
    };

    return(
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">Houses currently in the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>userId</td>
                        <td>Id</td>
                        <td>title</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>
                    { posts.length ? posts.map(post => (
                        // <PostRow key={post['id']} individualPost={post} selectPost={props.selectPost} />
                        <PostRow key={post['id']} individualPost={post} selectPost={selectPost} />
                    )) : <tr><td></td><td></td><td></td><td></td></tr> }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addPost}>Add house</button>
        </>
    );
};
    
export default PostList;