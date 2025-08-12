import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Brain, Link, Building } from "lucide-react";

const ResultsSection = () => {
  const metrics = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      number: "21.000+",
      label: "Interaksi pengguna sejak peluncuran",
      color: "text-primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      number: "8.400+",
      label: "permintaan verifikasi hoaks ditangani",
      color: "text-accent"
    },
    {
      icon: <Link className="w-8 h-8" />,
      number: "Ratusan",
      label: "artikel disinformasi terverifikasi otomatis",
      color: "text-warning"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "100%",
      label: "Dukungan langsung dari Pemprov Jawa Timur",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Hasil Implementasi Klinik Hoaks
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dampak nyata layanan verifikasi informasi dalam melawan penyebaran hoaks 
              dan meningkatkan literasi digital masyarakat Jawa Timur.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-card border-none shadow-medium hover:shadow-large transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${metric.color} mb-4 flex justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-foreground">
                      {metric.number}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {metric.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="bg-gradient-primary border-none text-primary-foreground shadow-large">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-xl lg:text-2xl font-medium mb-6 italic">
                  "Melalui Klinik Hoaks ini, masyarakat tidak hanya mendapatkan klarifikasi, 
                  tetapi juga edukasi. Ini bagian dari literasi digital kita."
                </blockquote>
                <cite className="text-lg font-semibold not-italic">
                  — Kepala Dinas Kominfo Jawa Timur
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;