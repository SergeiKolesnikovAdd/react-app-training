import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt="social_net_logo" className={classes.icon} src="https://i.pinimg.com/736x/a6/29/4b/a6294b51a35a1e60beb9c0e4fa7694bb.jpg"/>
        </header>
    )
};

export default Header;