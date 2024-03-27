import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.section}>
            <a href="/profile" className="" >Profile</a>
            <a href="/dialogs" className="" >Messages</a>
            <a href="/news" className="" >News</a>
            <a href="/music" className="" >Music</a>
            <a href="/settings" className="" >Settings</a>
        </nav>
    )
};

export default Navbar;