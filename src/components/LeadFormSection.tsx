import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    if (!name || !phone) return;

    const message = encodeURIComponent(`Hi, I'm ${name}. I'd like to book a Lip Blushing consultation. My number: ${phone}`);
    window.open(`https://wa.me/917986259315?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-5 md:px-12 lg:px-20 bg-cream">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">Get in Touch</p>
          <h2 className="font-display text-4xl font-semibold text-navy">Book Your Consultation</h2>
          <p className="text-muted-foreground font-body mt-3 text-sm">Free consultation · No obligations</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-8 shadow-elegant text-center"
          >
            <div className="w-14 h-14 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-rose" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy mb-2">Thank You!</h3>
            <p className="text-muted-foreground font-body text-sm">We'll connect with you on WhatsApp shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-7 shadow-elegant space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-body font-medium text-navy mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-rose/40 transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-body font-medium text-navy mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={15}
                pattern="[0-9+\-\s]{7,15}"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-rose/40 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-rose text-rose-foreground font-body font-semibold py-3.5 rounded-full shadow-rose hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Book Free Consultation
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
