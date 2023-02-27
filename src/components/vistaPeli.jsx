import {Link} from "react-router-dom"
const VistaPeli = (props) => {
    const{nombre,anio,imagen,id,Runtime} = props
    return (
        <Link to={id} className="card">
            <div className="card">
                <div className="card-image">
                <figure className="image">
                    <img src={imagen} alt= "placeholder image"/>
                </figure>
                </div>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{nombre}</p>
                        <p className="subtitle is-6">{anio}</p>
                        
                    </div>
                </div>

            </div>

        </Link>

    )

}
export default VistaPeli