interface TimelineProps {
  startDate: string;
  endDate: string;
  title: string;
  place: string;
}

export default function Timeline({
  startDate,
  endDate,
  title,
  place,
}: TimelineProps) {
  return (
    <div className="flex justify-between items-center border-b border-b-slate-200 py-4">
      <div className="grid grid-rows-2">
        <h4 className="text-slate-800">{title}</h4>
        <p className="italic text-slate-400">{place}</p>
      </div>

      <p className="text-slate-600">
        {startDate} - {endDate}
      </p>
    </div>
  );
}
