import React from 'react';

const TableComponent = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {/* Assuming the objects have 'name', 'age', and 'email' properties */}
            <th className="border border-black text-red-200	 bg-red-400	 px-4 py-2">Name</th>
            <th className="border border-black text-red-200	 bg-red-400	 px-4 py-2">Age</th>
            <th className="border border-black text-red-200	 bg-red-400	 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the array and display each object as a table row */}
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-black text-red-200		 bg-red-500	 text-center px-4 py-2">{item.name}</td>
              <td className="border border-black text-red-200		 bg-red-500	 text-center px-4 py-2">{item.age}</td>
              <td className="border border-black text-red-200		 bg-red-500	 text-center px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
