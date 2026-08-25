import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
          {user.name.firstname.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold capitalize text-gray-900">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            ✉
          </div>

          <div>
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-sm font-medium text-gray-700">{user.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
            ☎
          </div>

          <div>
            <p className="text-xs text-gray-400">Phone</p>
            <p className="text-sm font-medium text-gray-700">{user.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
            📍
          </div>

          <div>
            <p className="text-xs text-gray-400">Address</p>
            <p className="text-sm font-medium capitalize text-gray-700">
              {user.address.number}, {user.address.street}
            </p>
            <p className="text-sm capitalize text-gray-500">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <button className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
