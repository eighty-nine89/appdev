# appdev: MINI-PROJECT for 2022/2023 Academic year
- To start the project:
- note: The " node_modules " of this project was not pushed to this repository due to large size and time, hence the steps below helps install all all need dependencies for this project to run.

- Create a folder on your desktop and download appdev code and appdev-sanity code in the other repository from Github into the folder.
install dev dependencies (You need a strong internet connectivity for the project.) 

cd appdev && npm install
- You will need to use the sanity api keys used to develop the project in the other repository.
-  navigate to the appdev folder path (cd appdev) and installs the dependencies and packages needed to run porject(npm install)

cd appdev-sanity && npm install
- navigate to the appdev-sanity folder path (cd appdev-sanity) and installs the dependencies and packages needed to run porject(npm install)

npx expo start
- Download the EXPO App on your phone(Create an account) as a simulator and run The project using the statement in line 13.
- Open the project in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.





- How to make your phone a simulator after downloading EXPO
- You need to be in the directory of your poject folder.

npm install -g eas-cli

eas login

eas whoami

eas build:configure

- eas.json will be built in your porject, open it with an IDE (Visual Studio Code) and insert the code in the "cli" line.

"simulator" : {
  "ios" : {
    "simulator" : true
  }
}

eas build --platform ios --profile simulator

- After the build is complete, download the file and extract the file and drag it onto your ios simulator on desktop screen to open it or,
- open EXPO on ios phone, " run npx expo start " on terminal and scan the QR code with ios phone camera on the terminal to open app.

