import React from 'react';

export const spinner = (loading) => {
  if (loading) {
   return(
    <div className="loading-spinner-container">
      <div className="loading-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
   )
  }
}