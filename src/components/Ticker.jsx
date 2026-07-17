const ITEMS = [
  "Criminal Law",
  "Civil Litigation",
  "Property & Real Estate",
  "Public Prosecution",
  "Bail & Anticipatory Bail",
  "Contract Disputes",
  "Appellate Practice",
];

export default function Ticker() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {track.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item}
            <span className="ticker__dot">&#8226;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
