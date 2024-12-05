// Google API Keys
const developerKey = 'YOUR_DEVELOPER_KEY'; // here i want a api key 
const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // i want google client id
const scope = ['https://www.googleapis.com/auth/drive.file']; // drive acess

// Initialize picker on button click
document.getElementById('googleDriveButton').addEventListener('click', () => {
  loadPicker();
});

// Load Google Picker and Authentication API
function loadPicker() {
  gapi.load('auth', { callback: onAuthApiLoad });
  gapi.load('picker', { callback: onPickerApiLoad });
}

let oauthToken; 

function onAuthApiLoad() {
  gapi.auth.authorize(
    {
      client_id: clientId,
      scope: scope,
      immediate: false,
    },
    handleAuthResult
  );
}

function onPickerApiLoad() {
  console.log('Picker API loaded.');
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token; 
    createPicker(); // Create the Google Picker
  } else {
    alert('Authorization failed. Please try again.');
  }
}

function createPicker() {
  if (oauthToken) {
    const picker = new google.picker.PickerBuilder()
      .addView(google.picker.ViewId.DOCS) // Allow selecting documents
      .setOAuthToken(oauthToken)
      .setDeveloperKey(developerKey)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true); 
  }
}

function pickerCallback(data) {
  if (data.action === google.picker.Action.PICKED) {
    const fileId = data.docs[0].id; // Get the file ID of the selected file
    alert(`File selected with ID: ${fileId}`);
  }
}
