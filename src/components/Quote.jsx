import useReveal from "../hooks/useReveal";

export default function Quote() {
  const ref = useReveal();

  return (
    <section className="quote">
      <div className="quote__lines" aria-hidden="true"></div>
      <div className="wrap">
        <div ref={ref} className="quote__inner reveal">
          <span className="quote__mark" aria-hidden="true">&#8220;</span>
          <p className="quote__text">
            The law is not merely argued — it is upheld, case by case,
            fact by fact, until truth carries its own weight in the room.
          </p>
          <p className="quote__attr">— Sivaramakrishnan J., Advocate &amp; Public Prosecutor</p>
        </div>
      </div>
    </section>
  );
}
