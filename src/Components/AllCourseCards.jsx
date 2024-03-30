import { useNavigate } from "react-router-dom";

const AllCourseCards = () => {
  const navigate = useNavigate();

  const sampleDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus, quisquam laboriosam provident alias itaque, labore temporibus beatae aperiam earum magnam, deserunt asperiores. Voluptate maxime id consequatur quasi aliquam facilis.";
  const data = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3FbgS-i3R5aBA3U81rp5iosPvTzG9W1SLtwOUrDfXA&s",
      title: "Java",
      desc: sampleDesc,
      uid: "dk9ujkfjdkjf23iu",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PB7gDdA6O7gpwXX-cDoelORPic-1rSP6xRUfJQX_zw&s",
      title: "AWS",
      desc: sampleDesc,
      uid: "dk9jkfjdkjf23iu",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLr6j-Lg9kGC6aMNdG0dGdnbrzxdeopgw5feO4zFLXw&s",
      title: "C++",
      desc: sampleDesc,
      uid: "dk9ujkfjdjf23iu",
    },
    {
      src: "https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png",
      title: "Python",
      desc: sampleDesc,
      uid: "dk9ujkfjdkjf2iu",
    },
  ];
  return (
    <div>
      <div className="px-2 sm:px-8 mt-10">
        <h3 className="text-[var(--dark-grey)] text-3xl mb-6">
          Enroll in your Favorite Stack
        </h3>
        <ul className="flex flex-wrap gap-8 justify-center">
          {data.map((stack, idx) => (
            <li
              key={idx}
              className="bg-white w-[300px] min-w-[250px] max-w-[500px] md:min-w-[300px] flex-1 shrink-0"
            >
              <button
                className="text-left"
                onClick={() => navigate(`/course/${stack.uid}`)}
              >
                <div className="relative w-full h-[200px] overflow-hidden hover:opacity-80">
                  <img
                    src={stack.src}
                    alt={stack.title}
                    className="absolute min-w-full min-h-full"
                  />
                </div>
                <div className="px-4 py-5 hover:opacity-85 hover:shadow-2xl">
                  <h4 className="text-2xl font-bold mb-2">{stack.title}</h4>
                  <p className="text-sm">{stack.desc}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCourseCards;
