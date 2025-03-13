import React from "react";
import { useState, useEffect } from "react";
import Comment from "./Comment";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  //store comments in local storage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    if (savedComments) {
      setComments(savedComments);
    }
  }, []);
  //update local storage when comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  //add comment to comments array
  const addComment = (parentId, text) => {
    if (text === "") return alert("please write something");
    //new comment object
    const newCommentObj = {
      id: Date.now(),
      text,
      likes: 0,
      replies: [],
    };
    if (parentId === null) {
      setComments([...comments, newCommentObj]); //
      setNewComment("");
    } else {
      setComments(updateReplies(comments, parentId, newCommentObj));
    }
  };

  const updateReplies = (comments, parentId, newCommentObj) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return { ...comment, replies: [...comment.replies, newCommentObj] };
      }
      return {
        ...comment,
        replies: updateReplies(comment.replies, parentId, newCommentObj), //recursion
      };
    });
  };
  //it will handle out like logic
  const handleLike = (id) => {
    setComments(updateLike(comments, id));
  };

  const updateLike = (comments, id) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return { ...comment, replies: updateLike(comment.replies, id) }; //recursion
    });
  };
  //it will handle edit logic
  const handleEdit = (id, newText) => {
    setComments(updateEdit(comments, id, newText));
  };

  const updateEdit = (comments, id, newText) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, text: newText };
      }
      return { ...comment, replies: updateEdit(comment.replies, id, newText) }; //recursions
    });
  };

  const handleDelete = (id) => {
    setComments(deleteComment(comments, id));
  };

  const deleteComment = (comments, id) => {
    return comments
      .filter((comment) => comment.id !== id)
      .map((comment) => ({
        ...comment,
        replies: deleteComment(comment.replies, id),
      }));
  };

  return (
    <div>
      <h2>Nested comments project</h2>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={() => addComment(null, newComment)}>Add Comment</button>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onLike={handleLike}
            onReply={addComment}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
