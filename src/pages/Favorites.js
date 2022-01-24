import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if (favoritesCtx.totalFavorities === 0 ) {
        content = <p>You got no favorites yet. Start adding some</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} ></MeetupList>
    }

    return <section>
        <h1>My Favorite</h1>
        {content}
    </section>
}

export default Favorites;