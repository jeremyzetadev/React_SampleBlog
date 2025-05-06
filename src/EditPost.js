import React from 'react';
import {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

const EditPost = ({posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}) => {
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString() === id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post, setEditTitle, setEditBody])
  return (
      <main className="NewPost">
        {editTitle &&
        <>
            <h1>Edit Post</h1>
            <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange = {(e)=>setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e)=>setEditBody(e.target.value)}
                />
                <button className="editButton" type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
            </form>
        </>
        }
      </main>
  )
}

export default EditPost
