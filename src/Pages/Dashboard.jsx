import AllCourseCards from "../Components/AllCourseCards";

const DashBoard = () => {
    const isEnrolled = false;
    return (
        <div>
            {!isEnrolled && <AllCourseCards />}
        </div>
    )
}

export default DashBoard;