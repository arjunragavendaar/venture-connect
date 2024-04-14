var UserProfile = (function () {
    var udata;
    var getUserData = function () {
      return udata;
    };
    var setUserData = function (UserData) {
        udata = UserData;
  
    };
    return {
      getUserData: getUserData,
      setUserData: setUserData
    }
  
  })();
  
  export default UserProfile;