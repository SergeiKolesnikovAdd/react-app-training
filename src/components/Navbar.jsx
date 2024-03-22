import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.section}>
            <a href="#" className="" >Profile</a>
            <a href="#" className="" >Messages</a>
            <a href="#" className="" >News</a>
            <a href="#" className="" >Music</a>
            <a href="#" className="" >Settings</a>
        </nav>
    )
};

export default Navbar;