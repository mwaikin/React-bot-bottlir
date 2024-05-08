import React from 'react';

function SortBar({ handleSortAction }) {
  const parentDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '5rem',
    marginBottom: '2rem',
    background: '#f8f9fa',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const sortOptionStyle = {
    flex: '1',
    padding: '0.5rem',
    margin: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid #ced4da',
    borderRadius: '3px',
    background: 'green',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
    transition: 'background 0.3s ease',
  };

  const iconStyle = {
    marginLeft: '0.5rem',
  };

  const handleSortClick = (sortBy) => {
    handleSortAction(sortBy);
  };

  return (
    <div style={parentDivStyle}>
      <h1 style={{ fontSize: '1.5rem', marginRight: '1rem' }}>Sort Bots By:</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={sortOptionStyle}
          onClick={() => {
            handleSortClick('health');
          }}
        >
          Health <i className="fas fa-sort" style={iconStyle}></i>
        </div>

        <div
          style={sortOptionStyle}
          onClick={() => {
            handleSortClick('damage');
          }}
        >
          Damage <i className="fas fa-sort" style={iconStyle}></i>
        </div>

        <div
          style={sortOptionStyle}
          onClick={() => {
            handleSortClick('armor');
          }}
        >
          Armor <i className="fas fa-sort" style={iconStyle}></i>
        </div>
      </div>
    </div>
  );
}

export default SortBar;
