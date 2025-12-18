import Timeline from "@/components/Timeline";
import { JSX } from "react";

export default function Experiences(): JSX.Element {
  return (
    <aside className="mt-8">
      <h2 className="font-black text-xl">Experiences</h2>
      <Timeline
        startDate="October 2023"
        endDate="September 2025"
        title="Permanent contract - UX/UI Designer & Web/Mobile Developer"
        place="ThePlaceToWish"
      />
      <Timeline
        startDate="October 2020"
        endDate="September 2022"
        title="Work-study programme - UX/UI designer & Developer "
        place="Luxembourg Institute of Health (LIH)"
      />
      <Timeline
        startDate="April 2020"
        endDate="August 2020"
        title="Internship - Mobile Developer"
        place="Luxembourg Institute of Health (LIH)"
      />
    </aside>
  );
}
