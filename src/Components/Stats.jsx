import { Doughnut } from "react-chartjs-2";
import { auth } from "../firebase/config";

const Stats = () => {
  const user = auth.currentUser;
  const data = [
    {
      label: "Completed",
      value: 1,
    },
    {
      label: "Remaining",
      value: 1,
    },
  ];

  const enrolled = [
    {
      name: "Java super stack",
      uid: "skfj324",
    },
    {
      name: "Java sper stack",
      uid: "skfj324",
    },
  ];

  const remaining = [
    {
      name: "Java sper stack",
      uid: "skfj324",
    },
  ];

  const completed = enrolled.filter(
    (enrolledCourse) =>
      !remaining.some(
        (remainingCourse) =>
          enrolledCourse.name === remainingCourse.name &&
          enrolledCourse.uid === remainingCourse.uid
      )
  );

  return (
    <div className="px-2 sm:px-8 pt-4 pb-10 md:py-10">
      <p className="font-semibold mb-5">
        Hi{" "}
        <span className="text-[var(--accent)] font-normal">
          {user.displayName} 😊
        </span>
      </p>
      {enrolled.length > 0 && (
        <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
          <div className="flex justify-between md:flex-col gap-5 mb-10 md:mb-0">
            <div>
              <h4 className="font-semibold text-xl ">Your Remaining Courses</h4>
              <ul>
                {remaining.map((course) => (
                  <li
                    onClick={() => navigate(`/course/${course.uid}`)}
                    className="mt-2 "
                  >
                    •{" "}
                    <span className="underline hover:no-underline cursor-pointer text-[var(--grey-80)]">
                      {course.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl ">Your Completed Courses</h4>
              <ul>
                {completed.map((course) => (
                  <li
                    onClick={() => navigate(`/course/${course.uid}`)}
                    className="mt-2 "
                  >
                    •{" "}
                    <span className="underline hover:no-underline cursor-pointer text-[var(--grey-80)]">
                      {course.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Doughnut
            data={{
              labels: ["Completed", "Remaining"],
              datasets: [
                {
                  label: "Course",
                  data: [completed.length, remaining.length],
                  backgroundColor: ["#ffdf8b", "#b3d4f2"],
                },
              ],
            }}
            className="!w-[200px] !h-[200px] sm:!w-[300px] sm:!h-[300px] self-center"
          />
        </div>
      )}
    </div>
  );
};

export default Stats;
