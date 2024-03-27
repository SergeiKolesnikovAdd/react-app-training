import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import classes from './Content.module.scss'

const Content = () => {
    return (
        <div className={classes.section}>
            <Navbar/>
            <Profile/>
        </div>
    )
};

export default Content;