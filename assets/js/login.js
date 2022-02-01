$(document).ready(function () {
  $('#loading').show();
  var currentUser, currentUserProfile, userProfile, userProtectedProfile, userUsername, userFullname, userRole;
  var appID = '18075c64-f224-4a69-9ae2-1a89f43df30a'
  userbase.init({ appId: appID })
  .then((session) => session.user ? setLogin(session.user) : setLogout())
  .finally(() => loadPage());
})
function setLogin(user) {
    $('.user').show();
    $('.guest').hide();
    var currentUser = user;
    if (user.profile) {
      var userProfile = user.profile;
      var userUsername = user.username;
      if (userProfile.hasOwnProperty('sec')) {
        var accessToken = user.profile.sec;
      }
      if (userProfile.hasOwnProperty('fullname')) {
        var userFullname = userProfile.fullname;
      }
    }
    if (user.protectedProfile) {
      var userProtectedProfile = user.protectedProfile;
      if (userProtectedProfile.hasOwnProperty('role')) {
        var userRole = userProtectedProfile.role;
      }
    }
    if (userRole == 'editor') {
      $('.editor').show();
      editor(user);
    } else {
      $('.editor').hide();
    }
    $('.userFullname').text(userFullname);
    $('.userFullnameInput').val(userFullname);
    $('.userUsername').text(userUsername);
    $('.userUsernameInput').val(userUsername);

    afterLogin(user);
}
function setLogout(){
  $(document).ready(function () {
    $('.guest').show();
    $('.editor').hide();
    $('.user').hide();
    guest();
  })
}
function handleLogout() {
  userbase.signOut()
    .then(() => {
      console.log('22');
      window.location.replace("/login/");
    })
    .catch((e) => document.getElementById('logout-error').innerText = e)
}
function loadPage() {
  $('#loading').hide();
}
function afterLogin() {
}
function guest() {
  console.log('test');
}
function editor(user) {

}
