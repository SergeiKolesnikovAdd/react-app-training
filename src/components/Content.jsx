import Navbar from './Navbar';
import Profile from './Profile';
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