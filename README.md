# Firebase - Deploying

Open your working folder with VS code.

## Step 1 - Install Firebase Tools

We need to install firebase tools globally in the command prompt window.

```
npm install -g firebase-tools
```

## Step 2 - Initialize the Firebase App

- First we need to login to Firebase in the command prompt.

```
firebase login
```

- Run the following command to initialize your app with firebase.

```
firebase init
```

- This command will initialize your app. Write `Y` and press enter if it asks 'Are you ready to proceed?'

- With your arrow down key, go to option 'Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys' and select by pressing space key in your keyboard and press enter key.

- If it asks for 'What do you want to use as your public directory?' then write `.` and press enter

- Write `Y` and press enter for 'Configure as a single-page app (rewrite all urls to /index.html)?'

- Write `N` and press enter for 'Set up automatic builds and deploys with GitHub?'

- Write `N` and press enter for 'File ./index.html already exists. Overwrite?'

## Step 3 - Deploy Firebase App

This is the last step you have to perform. Run the following command from the command prompt to deploy your app.

```
firebase deploy
```

After this step, the console will log your apps Firebase URL. In our case, it is called `https://*********.web.app`. We can run this link in the browser to see our app.
