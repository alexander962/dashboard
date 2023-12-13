import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import AvatarUpload from '../components/Profile/AvatarUpload/AvatarUpload';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import TabsProfile from '../components/Profile/TabsProfile/TabsProfile';
import ProfileForm from '../components/Profile/ProfileForm/ProfileForm';
import SecurityForm from '../components/Profile/SecurityForm/SecurityForm';
import ProfileInfo from '../components/Profile/ProfileInfo/ProfileInfo';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');
  const [name, setName] = useState('Alex Sham');
  const [email, setEmail] = useState('alex@gmail.com');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const handleSaveName = data => {
    const { name, email } = data;
    setName(name);
    setEmail(email);
    setEdit(false);
    reset();
  };

  const handleSavePassword = data => {
    // const { confirmPassword, password, passwordPrev } = data;
    setEdit(false);
    reset();
  };

  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Profile" />
          <div className="flex justify-between gap-[20px] items-start bg-gray-bg rounded-2xl py-[32px] px-[24px] max-[769px]:flex-col-reverse">
            <div
              className="flex items-start gap-[71px] w-full max-w-[700px] max-[1025px]:items-start max-[1025px]:gap-[32px]
             max-[769px]:flex-col max-[769px]:w-full max-[769px]:gap-[4px]"
            >
              <AvatarUpload />
              {edit ? (
                <div className="w-full">
                  <TabsProfile activeTab={activeTab} onTabChange={setActiveTab} />
                  {activeTab === 'Profile' ? (
                    <form onSubmit={handleSubmit(data => handleSaveName(data))}>
                      <ProfileForm errors={errors} register={register} email={email} name={name} />
                    </form>
                  ) : (
                    <form onSubmit={handleSubmit(data => handleSavePassword(data))}>
                      <SecurityForm errors={errors} register={register} watch={watch} />
                    </form>
                  )}
                </div>
              ) : (
                <ProfileInfo name={name} email={email} />
              )}
            </div>
            <div className="max-[769px]:flex max-[769px]:w-full max-[769px]:mb-[22px]">
              {edit ? (
                <button
                  className="rounded bg-gray-bg border border-[#454545] py-[4px] px-[26px] text-white text-[16px] font-bold hover:border-white
               transition-colors duration-300 max-[769px]:ml-auto whitespace-nowrap"
                  onClick={() => setEdit(false)}
                >
                  Go back
                </button>
              ) : (
                <button
                  className="rounded bg-btn-active py-[4px] px-[45px] text-white text-[16px] font-bold hover:bg-btn-hover
               transition-colors duration-300 max-[769px]:ml-auto"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
