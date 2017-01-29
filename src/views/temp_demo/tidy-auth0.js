var lock = new Auth0(
  {
    domain: 'accounts.tidyhq.com/oauth/authorize',
    clientID: '2cb57d001424767c9fe87b2887b6e79148aef8e6e0fc26bb1a5254a7bf6ef0902',
    callbackURL: 'http://compsoc.org.au/',
    responseType: 'code'
  }
);
window.onload = function() {
  var btn_login = document.getElementById('btn-login');

  btn_login.addEventListener('click', function() {
    var url = 'https://' + lock._domain + '';
    var params = 'client_id='+lock._clientID+'&redirectURI='+'http://compsoc.org.au/'+'&responseType='+lock._responseType;
    console.log(url + '?' + params);
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
      if (xhr.status == 200) {
        console.log(xhr);
        var iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'position: absolute; top:10%; left: 10%; width: 90%;height: 90%;')
        iframe.setAttribute('srcdoc', xhr.response);
        btn_login.parentNode.appendChild(iframe);
        document.location = xhr.responseURL;
        // document.write(xhr.response);
      } else {
        alert("Request failed: " + xhr.statusText);
      }
    };

    xhr.send(params);
  });
}

// lock.on("authenticated", function(authResult) {
//   lock.getProfile(authResult.idToken, function(error, profile) {
//     if (error) {
//       // Handle error
//       return;
//     }
//     localStorage.setItem('id_token', authResult.idToken);
//     // Display user information
//     show_profile_info(profile);
//   });
// });

// var retrieve_profile = function() {
//   var id_token = localStorage.getItem('id_token');
//   if (id_token) {
//     lock.getProfile(id_token, function (err, profile) {
//       if (err) {
//         return alert('There was an error getting the profile: ' + err.message);
//       }
//       // Display user information
//       show_profile_info(profile);
//     });
//   }
// };

// var show_profile_info = function(profile) {
//   var avatar = document.getElementById('avatar');
//   document.getElementById('nickname').textContent = profile.nickname;
//   btn_login.style.display = "none";
//   avatar.src = profile.picture;
//   avatar.style.display = "block";
//   btn_logout.style.display = "block";
// };

// // ...
// retrieve_profile();


var logout = function() {
  localStorage.removeItem('id_token');
  window.location.href = "/";
};