import React from 'react'

const Cinsiyet = () => {
  return (
    <div className='flex'>
        <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Erkek</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
  </label>
</div>

<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Kadın</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
  </label>
</div>
        
    </div>
  );
};

export default Cinsiyet

/*

import React from 'react'

const Cinsiyet = () => {
  return (
    <div className='flex'>
        <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Erkek</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
  </label>
</div>

<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Kadın</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
  </label>
</div>
        
    </div>
  );
};

export default Cinsiyet
*/