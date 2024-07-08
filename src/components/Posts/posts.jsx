import './styles.css'
import { Link } from 'react-router-dom';


export const Posts = ({title, id, body, cover}) =>{
    return(
        
        <div className='post'>
            <img src={cover} alt={title} />
            <div className="post-content">
              <h2>{title} {id}</h2>
              <p>{body}</p>
              <div className="container-button">
                <Link className='link-button' to="project_detail">
               <button >Detalhes</button>
               </Link>
              </div>
            </div>
          </div>
    )
}