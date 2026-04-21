import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your desired lip shape, color, and assess skin tone for the perfect match." },
  { num: "02", title: "Numbing", desc: "A topical anesthetic is applied for 20 minutes to ensure a comfortable experience." },
  { num: "03", title: "Color Mapping", desc: "Your lip shape is carefully outlined and the custom pigment shade is confirmed." },
  { num: "04", title: "Blushing", desc: "Using a nano-machine, pigment is gently deposited into the upper dermal layer." },
  { num: "05", title: "Aftercare", desc: "You receive a complete aftercare kit and guidance for optimal healing results." },
];

export default function ProcedureSection() {
  return (
    <section id="procedure" className="py-20 px-5 md:px-12 lg:px-20 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">The Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground">
            How It Works
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <span className="text-rose font-display text-3xl font-bold shrink-0 w-12">{s.num}</span>
              <div className="border-l border-primary-foreground/15 pl-5 pb-2">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">{s.title}</h3>
                <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
