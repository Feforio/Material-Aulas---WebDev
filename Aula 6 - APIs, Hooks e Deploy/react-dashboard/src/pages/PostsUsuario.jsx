import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function PostsUsuario (){
    const parametros = useParams();

    useEffect{() => {
        fetch(`https://jsonplaceholder.typecode.com/posts?userID=${parametros.id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []};

    return {
        
    }
}