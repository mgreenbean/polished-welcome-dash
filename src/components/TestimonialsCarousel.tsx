
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    },
    {
      name: "David Thompson",
      role: "Event Reseller",
      content: "The platform pays for itself. I've doubled my ticket sales revenue since joining. The analytics help me price perfectly every time.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      role: "Festival Goer",
      content: "Best decision I made this year! Turned my unused festival tickets into a nice profit. The process was so smooth and fast.",
      rating: 5,
      avatar: "LP"
    }
  ];

  // Auto-advance every 7 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length, isHovered]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden px-4 sm:px-0">
        <div 
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-2 sm:px-4"
            >
              <Card className="hover:shadow-xl transition-all duration-300 border border-blue-100 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm sm:text-base">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm sm:text-base">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 hover:opacity-100 w-10 h-10 sm:w-12 sm:h-12"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 hover:opacity-100 w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125 shadow-lg' 
                : 'bg-blue-200 hover:bg-blue-300 hover:scale-110'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
