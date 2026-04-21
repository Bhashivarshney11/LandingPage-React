import { motion } from "framer-motion";
import beforeAfter1 from "@/assets/before.png";
import beforeAfter2 from "@/assets/before-after-2.jpg";

const results = [
  { image: beforeAfter1, alt: "Lip blushing before and after — full face transformation" },
  { image: beforeAfter2, alt: "Lip blushing before and after — close-up lips" },
];

export default function BeforeAfterSection() {
  return (
    <section id="results" className="py-20 px-5 md:px-12 lg:px-20 bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">Real Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            Before &amp; After
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-elegant"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
