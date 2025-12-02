import Experience from "@/components/Experience";

export default function Experiences() {
  return (
    <aside className="mt-8">
      <h2 className="font-black text-xl">Experiences</h2>
      <Experience
        startDate="April 2020"
        endDate="August 2020"
        title="Internship - Mobile Developer"
        place="Luxembourg Institute of Health (LIH)"
      />
      <Experience
        startDate="October 2020"
        endDate="September 2022"
        title="Work-study programme - UX/UI designer & Developer "
        place="Luxembourg Institute of Health (LIH)"
      />
      <Experience
        startDate="October 2023"
        endDate="December 2024"
        title="Permanent contract - UX UI Designer & Developer"
        place="ThePlaceToWish"
      />
    </aside>
  );
}
