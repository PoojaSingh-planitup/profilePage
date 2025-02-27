import React, { useState } from 'react';

const Profile = () => {
  const [profileName, setProfileName] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleDeletePicture = () => {
    setProfilePicture(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setProfileName('');
    setUsername('');
    setStatus('');
    setAboutMe('');
    setProfilePicture(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Profile Picture Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Profile Picture</h2>
          <div className="flex items-center space-x-4">
            {/* Circle for Profile Picture */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>

            {/* Change Picture Button */}
            <label
              htmlFor="profile-picture"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Change Picture
              <input
                type="file"
                id="profile-picture"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </label>

            {/* Delete Picture Button */}
            <button
              type="button"
              onClick={handleDeletePicture}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete Picture
            </button>
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="profile-name" className="block text-gray-700 text-sm font-bold mb-2">
              Profile Name
            </label>
            <input
              type="text"
              id="profile-name"
              value={profileName}
              onChange={handleProfileNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={handleStatusChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="about-me" className="block text-gray-700 text-sm font-bold mb-2">
              About Me
            </label>
            <textarea
              id="about-me"
              value={aboutMe}
              onChange={handleAboutMeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
