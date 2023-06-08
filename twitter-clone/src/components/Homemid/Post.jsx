// import React, { forwardRef, useEffect, useState } from "react";
// import "./Post.css";
// import { Avatar } from "antd";
// import {
//   CheckCircleOutlined,
//   MessageOutlined,
//   RetweetOutlined,
//   HeartOutlined,
//   VerticalAlignTopOutlined,
// } from "@ant-design/icons";

// export const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
//     const [like, setLike] = useState(0);
//     useEffect(() => {
//       const likecount = localStorage.getItem("inc");

//       if (likecount) {
//         setLike(parseInt(likecount));
//       }
//     }, []);

//     useEffect(() => {
//       localStorage.setItem("inc", like);
//     }, [like]);

//     const [comment, setComment] = useState("");
//     const [commentVisible, setCommentVisible] = useState(false);

//     useEffect(() => {
//       localStorage.getItem("com");
//     });

//     const handleLike = () => {
//       setLike(like + 1);
//     };

//     const handleComment = () => {
//       setCommentVisible(!commentVisible);
//     };

//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && <CheckCircleOutlined className="post__badge" />}{" "}
//                   @{username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           {image && (
//             <img
//               className="post__image"
//               src={image}
//               style={{ height: "100%", width: "100%" }}
//               alt="post"
//             />
//           )}
//           <div className="post__footer">
//             <MessageOutlined
//               fontSize="small"
//               onClick={handleComment}
//               className="post__commentButton"
//             />
//             <RetweetOutlined fontSize="small" />
//             <HeartOutlined
//               fontSize="small"
//               onClick={handleLike}
//               className="post__likeButton"
//             />
//             {/* <span>{localStorage.getItem("likes") || 0}</span> */}
//             <span>{like}</span>

//             <VerticalAlignTopOutlined fontSize="small" />
//           </div>
//           <div
//             className={`commentSection ${commentVisible ? "visible" : ""}`}
//           >
//             <div className="comment-show">
//               <h3>{comment}</h3>
//             </div>
//             <input
//               type="text"
//               onChange={(e) => setComment(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   setComment(e.target.value);
//                 }
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// );
import React, { forwardRef, useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "antd";
import {
  CheckCircleOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

export const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    const [like, setLike] = useState(0);
    useEffect(() => {
      const likecount = localStorage.getItem("inc");

      if (likecount) {
        setLike(parseInt(likecount));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("inc", like);
    }, [like]);

    const [comments, setComments] = useState([]);
    const [commentVisible, setCommentVisible] = useState(false);

    const handleLike = () => {
      setLike(like + 1);
    };

    const handleComment = () => {
      setCommentVisible(!commentVisible);
    };

    const handleAddComment = (e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        setComments([...comments, e.target.value.trim()]);
        e.target.value = "";
      }
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <CheckCircleOutlined className="post__badge" />}{" "}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && (
            <img
              className="post__image"
              src={image}
              style={{ height: "100%", width: "100%" }}
              alt="post"
            />
          )}
          <div className="post__footer">
            <MessageOutlined
              fontSize="small"
              onClick={handleComment}
              className="post__commentButton"
            />
            <RetweetOutlined fontSize="small" />
            <HeartOutlined
              fontSize="small"
              onClick={handleLike}
              className="post__likeButton"
            />
            <span>{like}</span>
            <VerticalAlignTopOutlined fontSize="small" />
          </div>
          <div className={`commentSection ${commentVisible ? "visible" : ""}`}>
            {comments.map((comment, index) => (
              <div key={index} className="comment-show">
                <h3>{comment}</h3>
              </div>
            ))}
            <input
              type="text"
              onKeyDown={handleAddComment}
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
    );
  }
);
