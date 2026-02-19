import { Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="animate-fade-in">
      <span className="section-label mb-4 inline-block">GET IN TOUCH</span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
        Contact With <span className="text-primary">Me</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Established fact that a reader will be distracted by design established fact that a reader will acted.
      </p>

      <div className="glass-card p-6 md:p-8">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          Hey Contact With Me!
        </h3>
        <p className="text-muted-foreground mb-6">
          Fill out the form below or reach out to us at{" "}
          <a href="mailto:helloexample@gmail.com" className="text-primary hover:underline">
            7694dhruvmojila@gmail.com
          </a>
          <br />
          We'd love to learn more about you and what we can build together.
        </p>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input-field"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="input-field resize-none"
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button type="submit" className="glow-button">
              <span>Contact With Me</span>
              <Send className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Or call me now</span>
              <a href="tel:1234567890" className="text-primary hover:underline flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 9274252089 
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
