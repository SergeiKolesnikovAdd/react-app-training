import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.scss'

const Profile =() => {
return (
<div className={classes.profileSection}>
    {/* {poster} */}
    <div className={classes.poster}></div>
    {/* {profile} */}
    <div className={classes.profile}>
        <img alt="avatar" className={classes.profile__avatar} src="https://sun9-1.userapi.com/impf/c854228/v854228496/43f04/7QxWo60ndxI.jpg?size=500x500&quality=96&sign=26980d15935f2e447fd7f9f34817f62d&c_uniq_tag=ym4qF89iwm4jhUGGKWVnk98EIPoz02Op2M3xH3f8OD0&type=album" />
        {/* {info} */}
        <div className={classes.profile__info}>
            <span className={classes.detail}></span>
            <span className={classes.detail}>Date of Birth:</span>
            <span className={classes.detail}>City:</span>
            <span className={classes.detail}>Education:</span>
            <span className={classes.detail}>Web-site:</span>
        </div>
    </div>
    <MyPosts/>
</div>
)
};

export default Profile