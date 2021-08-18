import React from "react";
import "./styles.css";
import Comment from "./Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

export default function App() {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}
