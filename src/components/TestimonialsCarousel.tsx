
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Testimonials data with varied star ratings
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
    rating: 4.5,
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
    rating: 4.5,
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

// Add a clone of the first testimonial at the end for seamless looping
const carouselTestimonials = [...testimonials, testimonials[0]];

const TRANSITION_SPEED = 700; // ms, for smooth animation
const INTERVAL_TIME = 7000;   // ms, for auto-slide

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every INTERVAL_TIME seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      goToNext();
    }, INTERVAL_TIME);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Infinite loop logic
  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
    startAutoSlide();
  };

  // When the carousel transitions to the cloned slide (at end), snap back to real first slide instantly
  useEffect(() => {
    if (!isTransitioning && currentIndex === testimonials.length) {
      // Remove transition, go to real first (index 0)
      setTimeout(() => {
        setCurrentIndex(0);
        setIsTransitioning(false);
      }, 0);
    }
  }, [isTransitioning, currentIndex]);

  // Listen for transitionend (for snapping instantly)
  const handleTransitionEnd = () => {
    if (currentIndex === testimonials.length) {
      // End of carousel (fake slide) - disable transition & reset to real first
      setIsTransitioning(false);
    }
  };

  function firstNameAndLastInitial(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[1][0]}.`;
  }

  // Render stars with support for half stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 text-amber-400 mr-1 fill-current" strokeWidth={2} />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative mr-1">
          <Star className="h-4 w-4 text-gray-300 fill-current" strokeWidth={2} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 text-amber-400 fill-current" strokeWidth={2} />
          </div>
        </div>
      );
    }

    // Empty stars to make 5 total
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 mr-1" strokeWidth={2} />
      );
    }

    return stars;
  };

  // Calculate the transformX value for moving the carousel
  const getTransformValue = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto">
      <div className="overflow-visible w-full px-2 sm:px-0">
        <div
          className="flex transition-all"
          style={{
            transition: isTransitioning
              ? `transform ${TRANSITION_SPEED}ms cubic-bezier(0.5, 0, 0.5, 1)`
              : "none",
            transform: getTransformValue(),
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center px-2 sm:px-4"
            >
              <Card className="rounded-xl border border-slate-200 bg-slate-50/70 shadow-sm mx-auto max-w-xl w-full transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed text-base font-normal">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm leading-tight">
                        {firstNameAndLastInitial(testimonial.name)}
                      </div>
                      <div className="text-slate-500 text-xs leading-tight">
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
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              (currentIndex % testimonials.length) === index
                ? "bg-slate-400 scale-110"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            onClick={() => goToIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            style={{ outline: "none", border: "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
