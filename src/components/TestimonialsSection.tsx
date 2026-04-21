import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", location: "South Delhi", text: "Absolutely love my lips! The color is so natural, and the process was completely painless. Best decision ever.", rating: 5 },
  { name: "Ananya M.", location: "Gurgaon", text: "I was nervous at first, but the team made me so comfortable. My lips look like I'm always wearing the perfect lipstick shade.", rating: 5 },
  { name: "Rhea K.", location: "Noida", text: "The Korean technique they use is incredible. It's been 8 months and my lips still look freshly done. Highly recommend!", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-elegant"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm font-body leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-base font-semibold text-navy">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
