import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Home() {
    return <div>Home</div>
};

Home();

function ProductPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();

    

    useEffect(()=>{
        async function getData(url) {
            try {

                
                setIsLoading(true);
                setIsError(false);

                const reponse = await fetch(url);
                const json = await reponse.json();

                setData(json);
            } catch(error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
    }, [id]);

    if(isLoading || !data){
        return <div>Loading</div>
    }
    if(isError) {
        return <div>Error</div>
    }

    console.log(data);

    return (
        <div>
            <div>{data.id}</div>
            <div>ID: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>{data.imageUrl}</div>
            <div><p>{data.description}</p></div>
            <div>Price: {data.price}</div>
        </div>
    );


}

export default ProductPage;