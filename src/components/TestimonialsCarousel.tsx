
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Website-matching colors & card design tweaks
const CARD_STYLE =
  "rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1";

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

type Comment = {
  name: string;
  initials: string;
  location: string;
  message: string;
};

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Auto-advance every 7 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Generate initials for display
  function getInitials(name: string) {
    return name
      .split(" ")
      .map((word) => word[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  }

  // Only store/display "First Name + Last Initial"
  function firstNameAndLastInitial(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[1][0]}.`;
  }

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!nameInput.trim() || !messageInput.trim() || !locationInput.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (nameInput.length > 40 || locationInput.length > 60 || messageInput.length > 400) {
      setError("One or more fields exceed the maximum allowed length.");
      return;
    }

    setComments([
      ...comments,
      {
        name: nameInput.trim(),
        initials: getInitials(nameInput.trim()),
        location: locationInput.trim(),
        message: messageInput.trim(),
      },
    ]);
    setNameInput("");
    setLocationInput("");
    setMessageInput("");
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
                      <div className="font-bold text-gray-900 text-base sm:text-lg">
                        {firstNameAndLastInitial(testimonial.name)}
                      </div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                      {/* Role intentionally removed */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator only */}
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

      {/* Comments Section */}
      <div className="mt-14 max-w-2xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-6 text-center">Share Your Experience</h3>
        <form
          onSubmit={handleCommentSubmit}
          className="bg-white/95 rounded-xl shadow-lg border border-blue-100 px-5 py-6 sm:px-8 sm:py-8 mb-8 space-y-5"
        >
          {error && (
            <div className="text-red-600 text-sm font-medium mb-2 text-center">{error}</div>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              className="sm:flex-1"
              placeholder="Your first & last name"
              maxLength={40}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
            <Input
              className="sm:flex-1"
              placeholder="Your city, state (e.g., Austin, TX)"
              maxLength={60}
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              required
            />
          </div>
          <Textarea
            className="min-h-[80px] text-base"
            placeholder="What do you love about SellMySeats?"
            maxLength={400}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            required
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-emerald-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition-all duration-200"
            >
              Post Comment
            </Button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-5">
          {comments.length === 0 && (
            <div className="text-center text-slate-500">No comments yet. Be the first to share your story!</div>
          )}
          {comments.map((comment, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-100 shadow"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-base shadow-lg flex-shrink-0">
                {comment.initials}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {firstNameAndLastInitial(comment.name)}
                  <span className="ml-2 text-slate-400 text-xs font-normal">{comment.location}</span>
                </div>
                <div className="text-gray-700 text-base mt-1 break-words">{comment.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

