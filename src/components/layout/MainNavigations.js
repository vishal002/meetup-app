import { Link } from 'react-router-dom';
import classes from './MainNavigations.module.css';

function MainNavigations() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} >All Meetups</Link>
                    </li>
                    <li>
                        <Link to={'/new-meetup'} >Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to={'/favorites'} >My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>)
}

export default MainNavigations;