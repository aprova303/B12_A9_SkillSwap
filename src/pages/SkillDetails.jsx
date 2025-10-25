// ...existing code...
import React, { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SkillDetails = () => {
  const skills = useLoaderData(); // expects array loaded by route loader (fetch('/skills.json'))
  const { id } = useParams();
  const skill = Array.isArray(skills)
    ? skills.find((s) => String(s.skillId) === String(id))
    : null;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect to login if not authenticated; keep current path in state so Login can return
  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { state: { from: location.pathname }, replace: true });
    }
  }, [user, navigate, location]);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Booked session for ${name || "Guest"}`);
    setName("");
    setEmail("");
  };

  if (!skill) {
    return <div className="p-4">No skill selected.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-base-100 shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{skill.skillName}</h2>
            <p className="text-sm opacity-70">{skill.category}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Provider:</strong>
              <div>{skill.providerName}</div>
            </div>
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Provider Email:</strong>
              <div>{skill.providerEmail}</div>
            </div>
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Price:</strong>
              <div>${skill.price}</div>
            </div>
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Rating:</strong>
              <div>{skill.rating} / 5</div>
            </div>
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Slots Available:</strong>
              <div>{skill.slotsAvailable}</div>
            </div>
            <div className="p-3 bg-base-200 rounded-md">
              <strong>Skill ID:</strong>
              <div>{skill.skillId}</div>
            </div>
          </div>

          <div className="mt-2 p-4 bg-base-200 rounded-md">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm">{skill.description}</p>

          </div>

          <form onSubmit={handleSubmit} className="mt-2">
            <h3 className="font-semibold mb-2">Book Session</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
// ...existing code...