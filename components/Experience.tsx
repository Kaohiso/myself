interface ExperienceProps {
  startDate: string;
  endDate: string;
  title: string;
  place: string;
}

export default function Experience({
  startDate,
  endDate,
  title,
  place,
}: ExperienceProps) {
  return (
    <div>
      <h4 className="text-gray-800">{title}</h4>
      <p className="italic text-gray-500">{place}</p>
      <p className="text-gray-300">
        {startDate} - {endDate}
      </p>
    </div>
  );
}
