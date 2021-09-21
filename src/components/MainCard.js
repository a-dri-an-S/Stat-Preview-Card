import CardImage from './CardImage';
import CardInfo from './CardInfo';
import "./Styles/styles.css";

const MainCard = () => {
    return ( 
        <section className="card-main">
            <CardInfo />
            <CardImage />
        </section>
    );
}

export default MainCard;