import React from "react";
import { useState } from "react";
const Comment = ({ comment, onLike, onReply, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleEdit = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  const handleReply = () => {
    if (replyText.trim() !== "") {
      onReply(comment.id, replyText);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "1px solid #ccc",
        paddingLeft: "10px",
      }}
    >
      {isEditing ? (
        <p>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </p>
      ) : (
        <p>{comment.text}</p>
      )}

      {isEditing ? (
        <>
          <div>
            <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>{" "}
            <button onClick={handleEdit}>Save</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <button onClick={() => onLike(comment.id)}>
              Like ({comment.likes})
            </button>
            <button onClick={() => setShowReplyInput(!showReplyInput)}>
              Reply
            </button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
          </div>{" "}
        </>
      )}

      {showReplyInput && (
        <div>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReply}>Reply</button>
        </div>
      )}
      <div>
        {comment.replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            onLike={onLike}
            onReply={onReply}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
