import type { FC } from "react";
import type { IPost } from "../models/IPost";

interface IPostItemProps {
  post: IPost;
}
const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      {post.views && <div>{post.views}</div>}
      <button>Delete</button>
    </>
  );
};
export default PostItem;
