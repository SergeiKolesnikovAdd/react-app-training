import classes from './MyPosts.module.scss'
import Posts from './Post/Posts'

const MyPosts =() => {
return (
    <div className={classes.posts}>
        NEW POSTS
        <textarea className=''>

        </textarea>
        <button className={classes.button}>Add post</button>
        <Posts message='hi, how are you'
                likes='22'
                dislikes='0'
                notCare='0'
        />
        <Posts message='it is my first post'
                likes='34'
                dislikes='0'
                notCare='0'
        />
    </div>
)
};

export default MyPosts