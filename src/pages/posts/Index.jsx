import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URI } from "../../Config"
import Card from "../../components/card/Card"
import { Link } from "react-router-dom"

export default function Index() {

    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => {
                setPosts(res.data)
                console.log(res.data);

            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])



    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='title'>I nostri post</h1>
                </div>
                <div className="container">
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <Card post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}