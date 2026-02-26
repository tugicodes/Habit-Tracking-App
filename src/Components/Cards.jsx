export default function Card ({image, title, description}){
    return(
        <div className="cardView">
            <img src={image} alt={title} className="card-image"/>
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
            </div>

            <div className="card-body">
                <p className="card-description">{description}</p>
            </div>

        </div>

    );
}