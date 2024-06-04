import api from "../../services/api";
import Post from "../../components/Post";
import {useState} from 'react';

const Main = () => {

    const [post, setPost] = useState([]);

  async function handleAxios() {
    try {
        const response = await api.get("/posts");
        console.log(response.data);
        setPost(response.data);
    } 
    catch (error) {
        console.log(error);
    }

  }

  return(
    <>
    <section className="container">
        <h1>Mains.Js</h1>
        <button onClick={handleAxios}>Requisicao</button>

        <div className="mt-5 container-posts">
            {
                post.map(post => {
                    return(
                        <>
                        <Post key={post.id} subtitle={post.category} title={post.title}></Post>
                        </>
                    )
                })
            }
        </div>


    </section>
    </>
  )
};

export default Main;
