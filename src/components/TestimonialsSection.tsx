
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Concert Enthusiast",
      content: "Made $1,200 in profits last month alone! The automated process is incredible - I just forward emails and watch my tickets sell.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Sports Fan",
      content: "Sold my Lakers season tickets in hours, not days. The pricing suggestions helped me maximize profit while staying competitive.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Theater Lover",
      content: "Customer support is amazing! They helped me through my first sale and I've been hooked ever since. 24/7 support really means 24/7.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Sellers Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful ticket sellers who trust SellMySeats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
