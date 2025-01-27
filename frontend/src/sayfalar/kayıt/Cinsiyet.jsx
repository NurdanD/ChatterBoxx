import React from 'react'

const Cinsiyet = ({onCinsiyetKutusu,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
  <label className="cursor-pointer label ${selectedGender === 'male' ? 'selected' : ''}">
    <span className="label-text">Erkek</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" 
    checked = {selectedGender==="male"}
    onChange={() => onCinsiyetKutusu("male")}
    />

  </label>
</div>

<div className="form-control">
  <label className="cursor-pointer label ${selectedGender === 'female' ? 'selected' : ''}">
    <span className="label-text">Kadın</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-success" 
    checked = {selectedGender==="female"}
    onChange={() => onCinsiyetKutusu("female")} />
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