import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowLeft, Phone, Brain } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 shadow-glow mb-12">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ingin membangun layanan cek fakta berbasis chatbot di wilayah Anda?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Kami bantu digitalisasi literasi dan verifikasi informasi di komunitas Anda.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Tim HaloGov
              </Button>
            </CardContent>
          </Card>

          {/* Navigation Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Button 
              variant="outline" 
              className="h-auto p-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex flex-col items-center gap-3"
            >
              <ArrowLeft className="w-6 h-6" />
              <div className="text-center">
                <div className="font-semibold">Studi Kasus Lainnya</div>
                <div className="text-sm opacity-75">/studi-kasus</div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="h-auto p-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex flex-col items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              <div className="text-center">
                <div className="font-semibold">Kontak Kolaborasi</div>
                <div className="text-sm opacity-75">/kontak</div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="h-auto p-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex flex-col items-center gap-3"
            >
              <Brain className="w-6 h-6" />
              <div className="text-center">
                <div className="font-semibold">Fitur Cek Fakta Lainnya</div>
                <div className="text-sm opacity-75">/fitur/cekfakta</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;