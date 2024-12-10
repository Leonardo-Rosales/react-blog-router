import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import { BASE_URI } from "../../Config"

export default function Show() {

    const [post, setPost] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`${BASE_URI}/posts/${id}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data);

            })
            .catch(err => console.error(err))
    }, [id])


    return (
        <main>

            <div className="container">
                <button onClick={() => navigate(-1)}>
                    back
                </button>
            </div>
            <section>
                <figure>
                    <img src={`${BASE_URI}/${post.image}`} alt="" />
                </figure>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>
                        <strong>Tags: </strong>{post.tags ? post.tags.join(', ') : ''}
                    </p>
                </div>
            </section>
        </main>
    )
}