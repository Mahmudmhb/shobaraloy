"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const testimonials = [
  {
    id: 1,
    image: "https://wpkixx.com/html/socimo/images/resources/research-avatar.jpg",
    name: "John Doe",
    role: "Software Engineer",
    text: "This service was amazing! I highly recommend it to everyone.",
  },
  {
    id: 2,
    image: "https://wpkixx.com/html/socimo/images/resources/research-avatar2.jpg",
    name: "Jane Smith",
    role: "Marketing Specialist",
    text: "A wonderful experience! Customer service was excellent.",
  },
  {
    id: 3,
    image: "https://wpkixx.com/html/socimo/images/resources/slider3.jpg",
    name: "Michael Johnson",
    role: "Product Manager",
    text: "I love the product! It exceeded my expectations.",
  },
  {
    id: 4,
    image: "https://wpkixx.com/html/socimo/images/resources/research-avatar.jpg",
    name: "Sarah Williams",
    role: "UX Designer",
    text: "Super easy to use and the team was very supportive.",
  },
  {
    id: 5,
    image: "https://wpkixx.com/html/socimo/images/resources/research-avatar2.jpg",
    name: "David Brown",
    role: "Business Analyst",
    text: "Would definitely recommend this to my friends and colleagues.",
  },
  {
    id: 6,
    image: "https://wpkixx.com/html/socimo/images/resources/slider3.jpg",
    name: "Emily Davis",
    role: "Entrepreneur",
    text: "One of the best decisions I've made. Truly fantastic!",
  },
];


const itemsPerView = 3; // Number of items visible
const totalItems = testimonials.length;

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 < totalItems - (itemsPerView - 1) ? prev + 1 : 0)); 
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - itemsPerView : prev - 1));
  };

  return (
    <div className="relative w-11/12 mx-auto overflow-hidden p-6 ">
      {/* <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2> */}
      
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full">
          <BiChevronLeft size={30} />
        </button>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ duration: 0.5 }}
            style={{ width: `${(totalItems / itemsPerView) * 100}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 p-4  text-center  ">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full border-1 p-[6px] border-[#26ACE2] mb-4"
                />
                <h3 className="font-semibold text-xl text-black">{testimonial.name}</h3>
                <h3 className="font-semibold text-lg text-[#26ACE2]">{testimonial.role}</h3>
                <p className="text-gray-600 mt-2">{testimonial.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Next Button */}
        <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full">
          <BiChevronRight size={30} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalItems - (itemsPerView - 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
