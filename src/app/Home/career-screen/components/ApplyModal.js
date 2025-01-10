import React from 'react';

const ApplyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full m-5 md:m-0">
        <h3 className="text-3xl font-bold mb-2 text-center">Start Your Journey</h3>
        <p className="text-center mb-6 text-gray-600">Fill out the form below to become part of our vibrant community.</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Contact No."
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Experience In years"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Applying For"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="file"
            className="w-full p-2 border rounded-lg text-teal-600 cursor-pointer"
            title="CV/Resume (Attach File)"
          />
          <textarea
            placeholder="Tell Us Something About Yourself"
            className="w-full p-2 border rounded-lg"
            rows="3"
          ></textarea>
          <select
            className="w-full p-2 border rounded-lg text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>How Did You Hear About Us</option>
            <option value="Option 1">Referral</option>
            <option value="Option 2">Website</option>
            <option value="Option 3">Instagram</option>
            <option value="Option 4">LinkedIn</option>
            <option value="Option 5">Facebook</option>
            <option value="Option 6">Medium</option>
            <option value="Option 7">Pinterest</option>
          </select>
          <button type="submit" className="w-full p-2 bg-teal-500 text-white rounded-lg">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 p-2 bg-gray-300 rounded-lg w-full">Close</button>
      </div>
    </div>
  );
};

export default ApplyModal;
