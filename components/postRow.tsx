import currencyFormatter from "../helpers/currencyFormatter";
import House from "../interfaces/house.interface";
import Post from "../interfaces/post.interface";

// // Destructuring not working
// const HouseRow = ({ house: { address: string, country: string, price: number } }) => {
//     return(
//         <tr>
//             <td>{house.address}</td>
//             <td>{house.country}</td>
//             <td>{house.price}</td>
//         </tr>
//     )
// };


const PostRow = (props: { individualPost: Post, selectPost: Function }) => {
    return(
        <tr onClick={() => props.selectPost(props.individualPost)}>
            <td>{props.individualPost.userId}</td>
            <td>{props.individualPost.id}</td>
            <td>{props.individualPost.title}</td>
            <td>{props.individualPost.body}</td>
        </tr>
    )
};

export default PostRow;