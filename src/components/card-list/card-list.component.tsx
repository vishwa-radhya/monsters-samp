import './card-list.styles.css';
import { Monster } from '../../App';
import Card from "../card/card.component";
type CardListProps={
    monsters:Monster[];
}

const CardList =({monsters}:CardListProps)=> {
    return(
        <div className="card-list">  
            {monsters.map((monster)=> {
                return(
                <Card monster={monster} />
    )})}
        </div>
    )
}
export default CardList;