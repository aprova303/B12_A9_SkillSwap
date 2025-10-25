import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const {skillId, skillName, rating, price, image } = skill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="h-48">
        <img src={image} alt={skillName} className="object-cover w-full h-full" />
      </figure>

      <div className="card-body">
        {/* Skill Name */}
        <h2 className="card-title text-lg font-semibold text-primary">
          {skillName}
        </h2>

        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span className="font-medium text-gray-700">{rating}</span>
        </div>

        {/* Price */}
        <p className="text-gray-700 font-semibold">Price: ${price}</p>

        {/* Button */}
        <div className="card-actions justify-end mt-2">
          <Link to={`/skillDetails/${skillId}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;