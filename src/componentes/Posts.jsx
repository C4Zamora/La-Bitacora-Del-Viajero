import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../componentes/Blog.css';
import Footer from '../componentes/Footer'; 


    
export const Posts = () => {
    const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";
    const [posts, setPosts] = useState([]);

    // Fetch all posts on component mount
    useEffect(() => {
        fetch(`${urlApi}/blogs`)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);
    return (
        <main>
          <nav className="navbar">
        <h1 id="blog-texto">La bitácora del viajero</h1>
        <Link to="/">
            <button className="login-button">Inicio</button>
          </Link>
      </nav>
      <div className="banner">
        <div>
          <img src="/src/img/banner.jpg" alt="Slide 1" />
        </div>
        <div className="botones-select">
          <Link to="/blog"><button className="boton-select1">Mis Post</button></Link>
          <Link to="/Posts"><button className="boton-select2">Ver Post</button></Link>
        </div>
      </div>


            <div className="posts-container">
                {posts.length === 0 ? (
                    <p>Cargando posts...</p>
                ) : (
                    posts.map((post) => (
                        <div className="post" key={post.id}>
                            <h4>{post.name}</h4>
                            <p><strong>Ubicación:</strong> {post.location}</p>
                            <p>{post.review}</p>
                            {post.imageUrl && <img src={post.imageUrl} alt={post.name} />}
                        </div>
                        
                    ))
                )}
            </div>
            <Footer></Footer>
        </main>
    );
};

