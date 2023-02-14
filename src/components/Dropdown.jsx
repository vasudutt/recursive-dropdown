import React, { useState } from 'react';

function Dropdown({ data, parent = [] }) {
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(data[e.target.value]);
  };

  const handleClick = () => {
    setSaved(true);
  };

  const showButton = () => {
    if (selectedOption === undefined)
      return (
        <button
          disabled={true}
          className="bg-green-300 px-4 py-2 rounded-md disabled:bg-red-300"
        >
          Save
        </button>
      );

    if (selectedOption?.struct && selectedOption?.struct.length > 0)
      return (
        <Dropdown
          data={selectedOption.struct}
          parent={[...parent, selectedOption]}
        />
      );

    return (
      <button
        onClick={handleClick}
        className="bg-green-300 px-4 py-2 rounded-md disabled:bg-red-300"
      >
        Save
      </button>
    );
  };

  return (
    <div className="mx-auto">
      <select
        className="rounded border border-gray-200 px-2 py-1 cursor-pointer"
        onChange={handleChange}
        id=""
      >
        <option value="none" selected disabled hidden>
          --Select an Option--
        </option>
        {data.map((dropOption, idx) => {
          return (
            <option key={idx} value={idx} className="cursor-pointer">
              {dropOption.name}
            </option>
          );
        })}
      </select>

      <br />
      <br />

      {showButton()}

      {saved && (
        <div>
          {' '}
          <p>Data is Saved!</p>{' '}
          {parent.map((node) => (
            <p className="relative border-l-2 border-black pl-2">
              {node.name}
            </p>
          ))}{' '}
          <p className="relative border-l-2 border-black pl-2">
            {selectedOption.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
