import DesktopImage from "../resources/image-header-desktop.jpg"

const CardImage = () => {
    return ( 
        <div className="card-img">
            <img 
                className="card-main-img" 
                src={DesktopImage} 
                alt="header"
            />
        </div>
    );
}

export default CardImage;