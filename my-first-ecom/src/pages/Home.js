import React, { useEffect, useState } from "react";

const url = 'https://api.noroff.dev/api/v1/online-shop';



function Home() {
    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    let { id } = useParams();

    useEffect(()=> {

        async function getData() {
            try {
                setIsError(false);
                setIsLoading(true);
                const reponse = await fetch(url);
                const json = await Response.json();
                setPosts(json);
                setIsLoading(false);
            } catch(error) {
                setIsLoading(false);
                setIsError(true);
            }
        }

        getData();
    }, []);

    if (isLoading) {
        return <div>Loading products</div>
    }
    if (isError) {
        return <div>Error loading data</div>
    }

    return (
        <div>
            {posts.map((post)=> (
                <div>
                    <div>{post.id}</div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <p>{post.rating}</p>
                    
                </div>
            ))}
        </div>
    );



}

export default Home;