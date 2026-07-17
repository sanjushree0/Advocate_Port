import lawyerImg from "../assets/lawyer.png";
import useReveal from "../hooks/useReveal";

const CREDENTIALS = [
  "Senior Government Lawyer",
  "Public Prosecutor",
  "Criminal & Civil Litigation",
  "District & High Court Practice",
];

export default function About() {
  const portraitRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="wrap about__inner">
        <div ref={portraitRef} className="about__portrait reveal">
          <div className="about__portrait-ring" aria-hidden="true"></div>
          <div className="about__portrait-frame">
            <img src={lawyerImg} alt="Portrait of Advocate Sivaramakrishnan J." />
          </div>
          <div className="about__portrait-badge">
            <span className="about__portrait-badge-num">30+</span>
            <span>Years of Practice</span>
          </div>
        </div>

        <div ref={textRef} className="about__content reveal reveal-delay-1">
          <p className="eyebrow about__eyebrow">About the Advocate</p>
          <h2 className="section-heading about__heading">
            Three decades of disciplined advocacy, in service of the law.
          </h2>

          <p className="about__paragraph">
            Sivaramakrishnan J. has practiced law for more than thirty years,
            serving as a Senior Government Lawyer and Public Prosecutor with a
            focused record across criminal and civil litigation. His practice
            is built on a close reading of statute, careful preparation, and a
            direct, unembellished style of argument before the court.
          </p>

          <p className="about__paragraph">
            As Public Prosecutor, he has represented the State across a wide
            range of criminal matters, upholding due process while pursuing
            outcomes grounded firmly in evidence and law. His civil practice
            spans property, contract and title disputes, where the same
            attention to detail and procedure guides every matter he takes on.
          </p>

          <p className="about__paragraph">
            Clients and colleagues alike describe his approach as candid and
            dependable — a lawyer who explains the law plainly, sets realistic
            expectations, and prepares every case as though it were the only
            one on the docket.
          </p>

          <ul className="about__credentials">
            {CREDENTIALS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
