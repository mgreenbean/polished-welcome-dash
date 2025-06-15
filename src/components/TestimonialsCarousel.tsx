
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Website-matching colors & card design tweaks
const CARD_STYLE =
  "rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1";

// Updated testimonials
const testimonials = [
  {
    name: "Sarah J.",
    location: "New York, NY",
    role: "Concert Enthusiast",
    content:
      "Made $1,200 in profits last month alone! The automated process is incredible – I just forward emails and watch my tickets sell.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Mike C.",
    location: "Los Angeles, CA",
    role: "Sports Fan",
    content:
      "Sold my Lakers season tickets in hours, not days. The pricing suggestions helped me maximize profit while staying competitive.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emma R.",
    location: "Chicago, IL",
    role: "Theater Lover",
    content:
      "Customer support is amazing! They helped me through my first sale and I've been hooked ever since. 24/7 support really means 24/7.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David T.",
    location: "Houston, TX",
    role: "Event Reseller",
    content:
      "The platform pays for itself. I've doubled my ticket sales revenue since joining. The analytics help me price perfectly every time.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Lisa P.",
    location: "Miami, FL",
    role: "Festival Goer",
    content:
      "Best decision I made this year! Turned my unused festival tickets into a nice profit. The process was so smooth and fast.",
    rating: 5,
    avatar: "LP",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance every 7 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered]);

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
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className={CARD_STYLE}>
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mt-auto space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg font-bold text-white text-sm sm:text-base">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
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
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 hover:opacity-100 w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
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
                ? "bg-blue-600 scale-125 shadow-lg"
                : "bg-blue-200 hover:bg-blue-300 hover:scale-110"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

