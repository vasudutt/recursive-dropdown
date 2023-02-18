import React, { useState } from 'react';

function Folders({ data, parent = [] }) {
  const [showChild, setShowChild] = useState({});

  const toggleShowChild = (id) => {
    setShowChild((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="ml-2 pl-2 border-l-2 border-black">
      {data.map((directory, idx) => {
        return (
          <div key={idx} className="flex gap-2">
            {directory.struct ? (
              <p
                id={idx}
                value={idx}
                className="cursor-pointer"
                onClick={() => {
                  toggleShowChild(directory.id);
                }}
              >
                {directory.name}
                <span className="ml-1 font-light">has child</span>
              </p>
            ) : (
              <p id={idx} value={idx} className="cursor-pointer">
                {directory.name}
              </p>
            )}

            <div className={!showChild[directory.id] && 'hidden'}>
              {directory.struct && (
                <Folders data={directory.struct} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Folders;
