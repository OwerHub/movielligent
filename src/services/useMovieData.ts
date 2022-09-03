import { useEffect, useState } from "react";


function getProfileData() {

let localStorageDatas = localStorage.getItem('movielligent')

if (localStorageDatas) {
    localStorageDatas = JSON.parse(localStorageDatas)
} 

return localStorageDatas

  // return JSON.parse(localStorage.getItem('profile'));
}

export  function useProfileData() {
  const [profile, setProfile] = useState(getProfileData());

  useEffect(() => {
    function handleChangeStorage() {
      setProfile(getProfileData());
    }

    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);

  return profile;
}