
import React from "react";

const categories = [
  {
    id: 1,
    name: "Music & Instruments",
    description: "Learn guitar, piano, or vocal lessons from local experts.",
    icon: "🎸",
  },
  {
    id: 2,
    name: "Languages",
    description: "Practice spoken English, Bengali, or foreign languages.",
    icon: "🗣️",
  },
  {
    id: 3,
    name: "Programming & Tech",
    description: "Get coding help or offer lessons in web and app development.",
    icon: "💻",
  },
  {
    id: 4,
    name: "Health & Fitness",
    description: "Yoga, dance, and workout sessions guided by trained locals.",
    icon: "🧘‍♀️",
  },
  {
    id: 5,
    name: "Art & Crafts",
    description: "Drawing, painting, and creative workshops for all ages.",
    icon: "🎨",
  },
  {
    id: 6,
    name: "Cooking & Baking",
    description: "Learn traditional and modern recipes with local chefs.",
    icon: "👩‍🍳",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-12 bg-base-200 text-center rounded-2xl">
      <h2
        className="text-3xl font-bold text-primary mb-8 animate__animated animate__fadeInDown"
      >
        Popular Skill Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-${index}s`}
          >
            <div className="card-body items-center text-center">
              <span className="text-5xl mb-3">{cat.icon}</span>
              <h3 className="card-title text-lg text-secondary">{cat.name}</h3>
              <p className="text-gray-600">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
