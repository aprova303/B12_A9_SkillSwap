import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, Links, useLocation } from 'react-router';
import Login from './Login';
import { Navigate } from 'react-router';

const ProfilePage = () => {
  const { user, updateProfile } = useContext(AuthContext) || {};
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');


  const location = useLocation();
console.log(location)

  const handleUpdate = async (e) => {
    e?.preventDefault();
    if (typeof updateProfile === 'function') {
      try {
        await updateProfile({ displayName: name, photoURL: photo });
        toast.success('Profile updated');
        setEditing(false);
      } catch (err) {
        console.error(err);
        toast.error(err?.message || 'Update failed');
      }
    } else {
      toast.success('Profile updated (local only)');
      setEditing(false);
    }
  };

  if (!user) {
    return (
      <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-base-100 shadow rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt={user.displayName || 'User'}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.displayName || 'No name'}</h2>
          <p className="text-sm opacity-70">{user.email || 'No email'}</p>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => {
              setEditing((s) => !s);
              setName(user.displayName || '');
              setPhoto(user.photoURL || '');
            }}
          >
            {editing ? 'Cancel' : 'Update Profile'}
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleUpdate} className="mt-4 grid gap-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            placeholder="Full name"
            required
          />

          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered"
            placeholder="https://..."
          />

          <div className="mt-2">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      )}

    
    </div>
  );
};

export default ProfilePage;