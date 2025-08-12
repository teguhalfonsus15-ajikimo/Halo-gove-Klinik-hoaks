import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Smartphone, ExternalLink } from "lucide-react";
import qrCodeDemo from "@/assets/qr-code-demo.png";

const DemoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Coba Simulasi Cek Fakta
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pindai kode QR di bawah atau klik tombol untuk mencoba langsung 
              fitur verifikasi informasi melalui WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* QR Code */}
            <div className="text-center">
              <Card className="bg-card border-none shadow-large inline-block">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={qrCodeDemo} 
                        alt="QR Code Demo Klinik Hoaks" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Scan untuk Simulasi
                      </h3>
                      <p className="text-muted-foreground">
                        Akses langsung ke demo WhatsApp Chatbot
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons & Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full text-lg py-4"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Simulasi di WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full text-lg py-4"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Kunjungi klinikhoaks.jatimprov.go.id
                </Button>
              </div>

              {/* Additional Info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Informasi Layanan
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Layanan terintegrasi dengan WhatsApp Business API
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Mendukung inkuiri dari warga secara otomatis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Respon cepat 24/7 untuk verifikasi informasi
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;