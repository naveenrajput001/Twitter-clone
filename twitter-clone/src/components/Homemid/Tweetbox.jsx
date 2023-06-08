import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "antd";

export function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  //Happens after tweet trigger
  const sendTweet = (e) => {
    e.preventDefault();

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      displayName: "Naveen Singh",
      username: "Rana G",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.ibb.co/wpfwCkq/everything.jpg",

      // "https://c8.alamy.com/zooms/9/f812ac99952345a885520b02b8007c25/2hcgdan.jpg",
    };

    if (newPost.text === "") {
      alert("please write some text in tweetbox");
    } else {
      localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
    }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            size="large"
            src={
              "https://i.ibb.co/wpfwCkq/everything.jpg"
              // "https://c8.alamy.com/zooms/9/f812ac99952345a885520b02b8007c25/2hcgdan.jpg"
            }
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="primary"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
