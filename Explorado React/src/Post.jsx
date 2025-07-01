import FollowButton from "./FollowButton.jsx";
import LikeButton from "./LikeButton.jsx";

const userImage = "https://i.redd.it/s9i9tgqa39re1.gif";
const postImage = "https://i.pinimg.com/originals/b8/66/9b/b8669bf6565f2be8664b626ae91664ba.gif";

export default function Post() {
    return (
        <div className="post">
            <div className="user-info">
                <img id="profile-img" src={userImage} alt="Profile Image" />
                <p>VegetaMajin001</p>
                <FollowButton />
            </div>
            <img id="post-img" src={postImage} alt="Post Image" />
            <LikeButton />
        </div>
    );
}