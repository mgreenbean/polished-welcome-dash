
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Testimonials data
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

  function firstNameAndLastInitial(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[1][0]}.`;
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center max-w-3xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-visible w-full px-2 sm:px-0">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center px-2 sm:px-4"
            >
              <Card className="rounded-xl border border-blue-200 bg-white/90 shadow-lg mx-auto max-w-2xl w-full transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 mr-1" strokeWidth={2} />
                    ))}
                  </div>
                  <p className="text-slate-800 mb-7 leading-relaxed text-lg font-normal">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-black text-base leading-tight">
                        {firstNameAndLastInitial(testimonial.name)}
                      </div>
                      <div className="text-slate-500 text-sm leading-tight">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Dots indicator only */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-blue-200 hover:bg-blue-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            style={{ outline: "none", border: "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

