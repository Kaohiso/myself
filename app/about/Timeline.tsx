import { ReactNode } from "react";

interface Items extends Item {
  side?: string;
  icon: ReactNode;
}

interface Item {
  startDate: string;
  endDate: string;
  degree: string;
  place: string;
}

const ContentTimeline: React.FC<Item> = ({
  degree,
  place,
  startDate,
  endDate,
}) => (
  <div className="flex flex-col">
    <p className="text font-bold text-gray-800">{degree}</p>
    <p className="text text-sm italic text-gray-500">{place}</p>
    <p className="text-sm text-gray-300">
      {startDate} - {endDate}
    </p>
  </div>
);

export default function Timeline(items: Items[]) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="grid grid-cols-[1fr_auto_1fr]">
          {/* Ligne 1 : texte + rond */}
          <>
            {/* Texte à gauche */}
            <div className="flex items-center justify-end">
              {item.side === "left" && (
                <ContentTimeline
                  degree={item.degree}
                  place={item.place}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              )}
            </div>

            {/* Rond (horizontalement aligné avec le texte) */}
            <div className="flex items-center justify-center mx-4">
              <div className="w-24 h-24 bg-red-300 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Texte à droite */}
            <div className="flex items-center justify-start">
              {item.side === "right" && (
                <ContentTimeline
                  degree={item.degree}
                  place={item.place}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              )}
            </div>
          </>

          {/* Ligne 2 : barre verticale uniquement */}
          {i < items.length - 1 && (
            <>
              <div></div>

              <div className="flex justify-center">
                <div className="w-2 bg-red-300 h-12">{}</div>
              </div>

              <div></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
