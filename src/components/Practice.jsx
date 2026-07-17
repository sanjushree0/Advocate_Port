import useReveal from "../hooks/useReveal";

const AREAS = [
  {
    title: "Criminal Law",
    desc: "Defense and prosecution across trial and appellate criminal matters, from bail applications to full trial advocacy.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M10 34L26 18M26 18L34 26M26 18L30 14M34 26L38 22M34 26L30 30"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 40H18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="36" r="2.4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Civil Litigation",
    desc: "Representing individuals and businesses in contract, tort and civil rights disputes before trial courts.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 8V40M14 14L8 26C8 29.3 10.7 30 14 30C17.3 30 20 29.3 20 26L14 14ZM34 14L28 26C28 29.3 30.7 30 34 30C37.3 30 40 29.3 40 26L34 14ZM10 14H24H38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 40H34"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Property & Real Estate",
    desc: "Title verification, partition suits and property disputes handled with careful documentation and diligence.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M8 22L24 8L40 22"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20V40H36V20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 40V28H28V40"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Public Prosecution",
    desc: "Representing the State in criminal proceedings with a firm commitment to due process and evidentiary rigor.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 6L38 12V22C38 32 32 38 24 42C16 38 10 32 10 22V12L24 6Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M18 24L22.5 28.5L31 19"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Practice() {
  const headRef = useReveal();

  return (
    <section id="practice" className="practice">
      <div className="wrap">
        <div ref={headRef} className="practice__head reveal">
          <p className="eyebrow practice__eyebrow">Areas of Practice</p>
          <h2 className="section-heading practice__heading">
            Focused counsel across the matters that shape everyday life.
          </h2>
        </div>

        <div className="practice__grid">
          {AREAS.map((area, i) => {
            return <PracticeCard key={area.title} area={area} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function PracticeCard({ area, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`practice__card reveal reveal-delay-${(index % 4) + 1}`}
    >
      <span className="practice__icon">{area.icon}</span>
      <h3 className="practice__card-title">{area.title}</h3>
      <p className="practice__card-desc">{area.desc}</p>
    </div>
  );
}
