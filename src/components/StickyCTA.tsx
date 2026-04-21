import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917986259315?text=Hi%2C%20I%27m%20interested%20in%20Lip%20Blushing";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-gradient-rose text-rose-foreground font-body font-semibold py-3 rounded-full flex items-center justify-center gap-2 text-sm shadow-rose"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href="tel:+917986259315"
        className="flex-1 bg-navy text-primary-foreground font-body font-semibold py-3 rounded-full flex items-center justify-center gap-2 text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </div>
  );
}
