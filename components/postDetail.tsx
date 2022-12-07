import Post from "../interfaces/post.interface";

const PostDetail = (props: { detailedPost: Post }) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-12">
                        <ul>
                            {Object.entries({0: props.detailedPost.id, 1: props.detailedPost.userId, 2: props.detailedPost.title, 3: props.detailedPost.body}).map((postProps: any) => <li key={+postProps[0]}><strong>{postProps[1]}</strong></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;