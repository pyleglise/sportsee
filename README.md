# SportSee

## OpenClassrooms Project 12

|              |                                                      |
| ------------ | ---------------------------------------------------- |
| Project      | 12                                                   |
| Name         | Développez un tableau de bord d'analytics avec React |
| Student      | Pierre-Yves Léglise                                  |
| Version      | 1.0.0                                                |
| Release date | 2023/04/10                                           |
|              |                                                      |

![Aperçu](https://www.axialdata.net/oc/p12-snapshot.jpg)

# Introduction

SportSee is a website application that intend to give you access to various information regarding your health condition and sport activity.

It has been developped using React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Therefore, it has some prerequisites.

# Prerequisites

- NodeJS version 12.18

- Yarn version 1.22.19 or npm version 8.15.0
- NodeJS version 12.18

- Yarn version 1.22.19 or npm version 8.15.0

# Dependencies

- [React](https://reactjs.org/)

- [react-router-dom](https://reactrouter.com/web/guides/quick-start)

- [recharts](https://recharts.org/en-US/)

- [axios](https://axios-http.com/)

- [prop-types](https://github.com/facebook/prop-types)

- Recommended text editor: [Visual Studio Code](https://code.visualstudio.com/)

# Installation

## backend

This project uses a backend API and data.

See : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

1- Clone this repository :

<code>git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard</code>

2- Go into the directory :

<code>cd <YOUR\*PATH>/backend</code>

3- Install the app :

<code>npm install</code> or <code>yarn</code>

4- Start the backend API :

<code>npm run start</code>

5- You can check that the backend API is working correctly :

It should start on your localhost on port 3000.

So if you place a request in your browser with this url :<code>http://localhost:3000/user/12</code>, it should display some datas.

## Frontend (and main app)

Well ! This is the part why we are here !

1- Clone this repository :

<code>git clone https://github.com/pyleglise/sportsee</code>

2- Go into the directory :

<code>cd <YOUR_PATH>/sportsee</code>

3- Install the app :

<code>npm install</code> or <code>yarn</code>

Ok, at this point, we're able to see some work done !

Type <code>npm run start</code>

As the backend is already running on port 3000, it should display this message :

<code>? Something is already running on port 3000.

Would you like to run the app on another port instead? » (Y/n)</code>

Just type Y and it will start on another port.

After few seconds, it should display something like this (the port number may be different) :

<code>You can now view sportsee in the browser.

Local: http://localhost:3001

On Your Network: http://192.168.154.1:3001</code>

Now, in your browser, go to url : http://localhost:3001

The application Sportsee should be open.

## Let's tweak !

The project has it's own mocked API embeded.

That means that it can also be used without a fully fonctionnal backend.

Let's see that !

In the sportsee directory, open the file package.json.

1- Replace this line :

<code>"start": "react-scripts start",</code>

by this line :

<code>"start": "cross-env PORT=8082 react-scripts start",</code>

2- Add this line in the same category (scripts) :

<code>"start-mock": "cross-env REACT_APP_ENVIRONMENT='developement' PORT=8081 react-scripts start",</code>

Ok, now we should have something like this :

<code>"scripts": {\
"start-mock": "cross-env REACT_APP_ENVIRONMENT='developement' PORT=8081 react-scripts start",\
"start": "cross-env PORT=8082 react-scripts start",</code>

Good !

Let's play with this !

You can start both instances of the application. One with the real datas and the real backend, on port 8082 and another one with the mocked API and le mocked data, on the port 8081 :

<code>npm run start\
npm run start-mock</code>

Then you can open 2 browser sessions, on http://localhost:8081 and http://localhost:8082

Check the comments, in the browser console. You should see the differences between the two versions :

<code>==== MOCK environnement : using mocked API with Mirage and mocked datas ==== </code>

or <code>==== API environnement : using backend API and datas ====</code>

# Useful links

- [Live demo 🌍](https://pyleglise.github.io/sportsee/)

- [Repository 📖](https://github.com/pyleglise/sportsee)

- [Documentation 📑](https://pyleglise.github.io/jsdoc-p12/)

- [Figma mock-up 🖼️](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=1%3A2)
