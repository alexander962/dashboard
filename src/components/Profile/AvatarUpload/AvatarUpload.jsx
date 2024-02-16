import React from 'react';
import { avatarExp, editeIcon } from '../../../assets/images';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const AvatarUpload = () => {
  const { userToken, userData, avatar, setAvatar, isImageLoaded } = useAuth();

  const handleImageChange = async event => {
    const file = event.target.files[0];
    const apiUrl = process.env.REACT_APP_API_URL;
    const formData = new FormData();
    formData.append('image', file);

    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const response = await axios.post(`${apiUrl}/users`, formData, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });

          if (response.status === 200 || response.status === 201) {
            const timestamp = new Date().getTime();
            setAvatar(`${process.env.REACT_APP_URL}/${userData?.id}?t=${timestamp}`);
          }
        } catch (error) {
          console.error(error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label
        className={`relative cursor-pointer w-[158px] h-[158px] inline-block rounded-full ${
          isImageLoaded ? '' : 'bg-gray-200'
        }`}
      >
        {isImageLoaded ? (
          <>
            <img className="w-[100%] h-[158px] rounded-full object-cover" src={avatar} alt="Selected avatar" />
            <img src={editeIcon} alt="" className="absolute bottom-[10px] right-[15px]" />
          </>
        ) : (
          <div className="relative cursor-pointer w-[158px] h-[158px] rounded-full flex items-center justify-center">
            <img src={avatarExp} alt="Choose an avatar" />
            <img src={editeIcon} alt="" className="absolute bottom-[10px] right-[15px]" />
          </div>
        )}
        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
      </label>
    </div>
  );
};

export default AvatarUpload;
