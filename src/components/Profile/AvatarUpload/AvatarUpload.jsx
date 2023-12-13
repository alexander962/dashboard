import React, { useState } from 'react';
import { avatar, editeIcon } from '../../../assets/images';

const AvatarUpload = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label
        className={`relative cursor-pointer w-[158px] h-[158px] inline-block rounded-full ${
          imageSrc ? '' : 'bg-gray-200'
        }`}
      >
        {imageSrc ? (
          <>
            <img className="w-[100%] h-[158px] rounded-full object-cover" src={imageSrc} alt="Selected avatar" />
            <img src={editeIcon} alt="" className="absolute bottom-[10px] right-[15px]" />
          </>
        ) : (
          <div className="relative cursor-pointer w-[158px] h-[158px] rounded-full flex items-center justify-center">
            <img src={avatar} alt="Choose an avatar" />
            <img src={editeIcon} alt="" className="absolute bottom-[10px] right-[15px]" />
          </div>
        )}
        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
      </label>
    </div>
  );
};

export default AvatarUpload;
