import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../componentes/Blog.css';

export const Blog = () => {
    const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [location, setLocation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [toEditPost, setToEditPost] = useState(null);

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
      fetch(`${urlApi}/blogs`)
        .then((response) => response.json())
        .then((data) => setPosts(data.filter((post) => post.userId === user.id)));
    }, []);

    const onChange = (e) => {
      const { name, value } = e.target;
      if (name === "name") setName(value);
      else if (name === "review") setReview(value);
      else if (name === "location") setLocation(value);
      else if (name === "imageUrl") setImageUrl(value);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name,
        review,
        location,
        imageUrl,
        userId: user.id,
      };
      const postCreated = await fetch(`${urlApi}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setPosts([...posts, await postCreated.json()]);
    };

    const deletePost = (id) => {
      fetch(`${urlApi}/blogs/${id}`, { method: "DELETE" });
      setPosts(posts.filter((post) => post.id !== id));
    };

    const editPost = (id) => {
      const post = posts.find((post) => post.id === id);
      setToEditPost(post);
    };

    const sendToEditPost = async () => {
        const postEdited = await fetch(`${urlApi}/blogs/${toEditPost.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(toEditPost),
        });
        const postEditedJson = await postEdited.json();
        setPosts(posts.map((post) => (post.id === postEditedJson.id ? postEditedJson : post)));
        setToEditPost(null);
      };

  return (
    <main>
      <nav className="navbar">
        <h1 id="blog-texto">La bitácora del viajero</h1>
      </nav>
      <div className="banner">
        <div>
          <img src="/src/img/Lugar1.jpg" alt="Slide 1" />
        </div>
        <div className="botones-select">
          <Link to="/MisPost"><button className="boton-select1">Mis Post</button></Link>
          <Link to="/Post"><button className="boton-select2">Ver Post</button></Link>
        </div>
      </div>

      <div className="new-post-container">
        <h2>Nuevo Post</h2>
        <h3>{user.name}</h3>
        <h3>Tienes {posts.length} posts publicados</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Nombre" name="name" onChange={onChange} />
          <input type="text" placeholder="Ubicación" name="location" onChange={onChange} />
          <input type="text" placeholder="URL de la imagen" name="imageUrl" onChange={onChange} />
          <textarea placeholder="Reseña" name="review" onChange={onChange}></textarea>
          <button type="submit">Publicar</button>
        </form>

        <div className="posts-container">
          {posts.map((post) =>
            toEditPost && toEditPost.id === post.id ? (
              <div className="post" key={post.id}>
                <input type="text" value={toEditPost.name} onChange={(e) => setToEditPost({ ...toEditPost, name: e.target.value })} />
                <input type="text" value={toEditPost.location} onChange={(e) => setToEditPost({ ...toEditPost, location: e.target.value })} />
                <input type="text" value={toEditPost.imageUrl} onChange={(e) => setToEditPost({ ...toEditPost, imageUrl: e.target.value })} />
                <textarea value={toEditPost.review} onChange={(e) => setToEditPost({ ...toEditPost, review: e.target.value })}></textarea>
                <button onClick={() => sendToEditPost()}>Guardar</button>
              </div>
            ) : (
              <div className="post" key={post.id}>
                <div className="actions">
                  <div className="action" onClick={() => deletePost(post.id)}></div>
                  <div className="action" onClick={() => editPost(post.id)}></div>
                </div>
                <h4>{post.name}</h4>
                <p>{post.review}</p>
                <p><strong>Ubicación:</strong> {post.location}</p>
                {post.imageUrl && <img src={post.imageUrl} alt={post.name} />}
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};
