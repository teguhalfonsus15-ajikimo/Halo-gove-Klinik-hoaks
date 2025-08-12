import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoJatim from "@/assets/logo-jatim.png";
import whatsappMockup from "@/assets/whatsapp-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo & Tags */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logoJatim} 
                alt="Logo Pemprov Jawa Timur" 
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                  #klinikhoaks
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                  #cekfakta
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                  #disinformasi
                </Badge>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Lawan Hoaks Bersama{" "}
                <span className="text-warning font-black">Klinik Hoaks</span>{" "}
                Diskominfo Jatim
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl">
                Layanan verifikasi informasi publik berbasis WhatsApp Chatbot untuk masyarakat Jawa Timur. 
                Terintegrasi langsung dengan sistem Klinik Hoaks milik Pemprov.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Simulasikan Sekarang
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Kembali ke Studi Kasus Lainnya
              </Button>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={whatsappMockup} 
                alt="WhatsApp Klinik Hoaks Mockup" 
                className="w-full max-w-lg mx-auto shadow-large rounded-2xl"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary-glow/20 blur-3xl rounded-full scale-75 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;