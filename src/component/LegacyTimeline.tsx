import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { events } from "@/constants/constant";

const LegacyTimeline = () => {
  return (
    <section className="w-screen px-6 md:px-20 py-12 bg-[#F8F0E5]">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#8B4513]">
        Discover India's Legacy
      </h2>
      <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">
        A journey through India's history, from Vedic scriptures to modern
        independence.
      </p>

      <VerticalTimeline animate={true} layout="1-column-left">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.year}
            contentStyle={{
              background: "#FFF5E1",
              color: "#333",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              borderRadius: "10px",
              padding: "1.2rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid #8B4513" }}
            icon={
              <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden bg-white shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-[65%] h-[65%] object-cover"
                />
              </div>
            }
          >
            <div className="text-center">
              <h4 className="text-lg md:text-xl font-semibold text-[#5A3E2B]">
                {event.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {event.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default LegacyTimeline;
