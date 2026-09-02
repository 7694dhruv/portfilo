import { Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thank you! Message submitted successfully.");
    const mailtoUrl = `mailto:7694dhruvmojila@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <span className="section-label mb-3">GET IN TOUCH</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
          Contact With <span className="text-primary">Me</span>
        </h2>
        <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Established fact that a reader will be distracted by design established fact that a reader will acted.
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 bg-white/95 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          Hey Contact With Me!
        </h3>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
          Fill out the form below or reach out to us at{" "}
          <a href="mailto:7694dhruvmojila@gmail.com" className="text-primary font-semibold hover:underline">
            7694dhruvmojila@gmail.com
          </a>
          <br />
          We'd love to learn more about you and what we can build together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="input-field"
          />
          <textarea
            required
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field resize-none"
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button type="submit" className="glow-button">
              <span>Contact With Me</span>
              <Send className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <span>Or call me now</span>
              <a href="tel:9274252089" className="text-primary font-bold hover:underline flex items-center gap-1">
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
