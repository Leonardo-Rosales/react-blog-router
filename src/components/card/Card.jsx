import placeHolderImage from "../../assets/placeholder.svg"
import { BASE_URI } from "../../Config"
import style from "../card/Card.module.css"
import { Link } from 'react-router-dom'
export default function Card({ post = {} }) {

    const { tags = [], title, image, content, id } = post
    const identify = tags.join(', ')

    return (
        <div>
            <div>

                <img src={placeHolderImage} alt="" />

            </div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <p>
                    <strong>Tags: </strong>{identify}
                </p>
                <Link to={`/posts/${id}`}>Vai alla pagina di dettaglio</Link>
            </div>
        </div>
    )
}