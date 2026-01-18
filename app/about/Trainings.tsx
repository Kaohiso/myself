import { JSX } from "react";
import Timeline from "@/components/Timeline";

export default function About(): JSX.Element {
  return (
    <aside className="mt-8">
      <h2 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">Studies</h2>
      <Timeline
        startDate="2024"
        endDate="Today"
        title="Training in illustration and 3D modelling"
        place="Self-taught"
      />
      <Timeline
        startDate="2020"
        endDate="2022"
        title="Master's degree in Cognitive Science"
        place="Institute of Digital Sciences, Management Cognition (IDMC)"
      />
      <Timeline
        startDate="2018"
        endDate="2020"
        title="Bachelor's Degree in Cognitive Science"
        place="Institute of Digital Sciences, Management Cognition (IDMC)"
      />
      <Timeline
        startDate="2016"
        endDate="2018"
        title="IUT in Computer Science, Metz"
        place="Luxembourg Institute of Health (LIH)"
      />
    </aside>
  );
}
