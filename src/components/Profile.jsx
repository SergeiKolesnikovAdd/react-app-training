
const Profile =() => {
return (
<div className="profile-section">
    {/* {poster} */}
    <div className="poster"></div>
    {/* {profile} */}
    <div className="profile">
        <img alt="avatar" className="profile-avatar" src="https://sun9-1.userapi.com/impf/c854228/v854228496/43f04/7QxWo60ndxI.jpg?size=500x500&quality=96&sign=26980d15935f2e447fd7f9f34817f62d&c_uniq_tag=ym4qF89iwm4jhUGGKWVnk98EIPoz02Op2M3xH3f8OD0&type=album" />
        {/* {info} */}
        <div className="profile-info">
            <span className="profile-info__detail"></span>
            <span className="profile-info__detail">Date of Birth:</span>
            <span className="profile-info__detail">City:</span>
            <span className="profile-info__detail">Education:</span>
            <span className="profile-info__detail">Web-site:</span>
        </div>
    </div>
    {/* {posts} */}
    <div className=""></div>
</div>
)
};

export default Profile