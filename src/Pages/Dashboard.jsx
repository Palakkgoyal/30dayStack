import AllCourseCards from "../Components/AllCourseCards";
import Stats from "../Components/Stats";

const DashBoard = () => {
    const isEnrolled = false;
    return (
        <div>
            <Stats />
            {!isEnrolled && <AllCourseCards />}
        </div>
    )
}

export default DashBoard;