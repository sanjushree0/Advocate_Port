import useReveal from "../hooks/useReveal";

export default function Map() {
  const headRef = useReveal();
  const frameRef = useReveal();

  return (
    <section id="location" className="location">
      <div className="wrap">
        <div ref={headRef} className="location__head reveal">
          <p className="eyebrow location__eyebrow">Chambers</p>
          <h2 className="section-heading location__heading">
            Visit the office in Coimbatore, Tamil Nadu.
          </h2>
        </div>

        <div ref={frameRef} className="location__frame reveal reveal-delay-1">
          <iframe
            title="Office location of Advocate Sivaramakrishnan J."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3221652822526!2d76.9636358748086!3d11.01443738914915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590071892871%3A0xbeb459e5d225fd8c!2sAdvocate%20Sivaramakrishnan%20Office!5e0!3m2!1sen!2sin!4v1767613093446!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
