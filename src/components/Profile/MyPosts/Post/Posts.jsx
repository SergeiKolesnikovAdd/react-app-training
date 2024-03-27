import classes from './Posts.module.scss'

const Posts =(props) => {
return (
        <div className={classes.item}>
            <img className={classes.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBe_5rzu97TH1XrA6uZ6viOrzhxt3EGh0NHa4cCHxDTYAenj4Vw1t4Uslg57UU7dPM&usqp=CAU' alt='alt'/>
            {props.message}
            <div className={classes.reactions}>
            <span className={classes.likes}>likes - {props.likes}</span>
            <span className={classes.dislikes}>dislikes - {props.dislikes}</span>
            <span className={classes.notCare}>doesn't care - {props.notCare}</span>
            </div>
        </div>
)
};

export default Posts