const Likes = (props) => {
  
    return (
      <div>
        <label>Likes:   </label>
        <button className="add-button" onClick={props.countLikes}>Like</button>
        <button className="add-button" onClick={props.countLikes}>Dislike</button>
        <p className="like-count"> Total Likes: </p>
      </div>
    )
  }
  
  export default Likes