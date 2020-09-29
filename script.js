let buttons = document.getElementsByClassName("buttonLink");

for (let i = 0; i < buttons.length; i++) {
	const _value = buttons[i].value

	buttons[i].addEventListener(
		"click",
		function() {
			chrome.tabs.create({"url": _value})
		}
	);

};
var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyB9KQztimM4CNgyG4IjFByQOjFnH1jtRv4',
      'clientId': '795596770129-92j940pt0jefb1q0nqo02ded4rr34tal.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/youtube.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}
var isAuthorized;
var currentApiRequest;

/**
 * Store the request details. Then check to determine whether the user
 * has authorized the application.
 *   - If the user has granted access, make the API request.
 *   - If the user has not granted access, initiate the sign-in flow.
 */
function sendAuthorizedApiRequest(requestDetails) {
  currentApiRequest = requestDetails;
  if (isAuthorized) {
    // Make API request
    // gapi.client.request(requestDetails)

    // Reset currentApiRequest variable.
    currentApiRequest = {};
  } else {
    GoogleAuth.signIn();
  }
}

/**
 * Listener called when user completes auth flow. If the currentApiRequest
 * variable is set, then the user was prompted to authorize the application
 * before the request executed. In that case, proceed with that API request.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    isAuthorized = true;
    if (currentApiRequest) {
      sendAuthorizedApiRequest(currentApiRequest);
    }
  } else {
    isAuthorized = false;
  }
}
var request = gapi.client.setToken(tokenObject)({
  'method': 'GET',
  'path': '/youtube/v3/channels',
  'params': {'part': 'snippet', 'mine': 'true'}
});
// Execute the API request.
request.execute(function(response) {
  console.log(response);
});