import FunChallenge from "../components/home/funchallenges";
import Herohome from "../components/home/herohome";
import UserFeedback from "../components/home/userfeedback";
function Home () {
    return (
        <div>
        <Herohome />
            <FunChallenge/>
            <UserFeedback/>
        </div>
    )
}

export default Home;