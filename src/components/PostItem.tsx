import type { FC } from "react";
import type { IPost } from "../models/IPost";

interface IPostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}
const PostItem: FC<IPostItemProps> = (props: IPostItemProps) => {
  const { post, update, remove } = props;
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };
  const handleUpdate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const title = prompt() || "";
    update({ ...post, title } as IPost);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      {post.views && <div>{post.views}</div>}
      <button onClick={handleUpdate}>UPDATE</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
export default PostItem;
