
import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="overflow-x-auto px-4 py-10 ">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="px-4 py-2">SN</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Enrollment Number</th>
            <th className="px-4 py-2">Contact Number</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Department</th>
           
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.sn}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.enrollmentNumber}</td>
              <td className="border px-4 py-2">{item.contactNumber}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.department}</td>
              <td className="border px-4 py-2 max-w-md">
                <div className="max-h-16 overflow-y-auto">
                  {item.description}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
