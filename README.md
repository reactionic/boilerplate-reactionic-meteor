# boilerplate-reactionic-meteor

NOTE: this is still under development.  But feel free to poke around.

A simple app to make getting started on reactionic-meteor apps easier.  Think something like [BASE](https://github.com/themeteorchef/base) from the meteorchef.

I have spent some time building an app, and thought it would be nice to share some of things I have learned through a boilerplate that could be useful to others getting started with hybrid mobile app development.

Also, I do this in a hope to get more people using this technology stack.  And contributing.  That way it becomes more mature, and all of our projects are better for it.

## Installation

Clone this repository to your local machine.  Then run:

```
npm install
meteor run
```

## Goals

* Provide a good starting place to write hybrid mobile apps.
* Try to abibe as much as possible to the official [Meteor Guide](http://guide.meteor.com/)
* Provide a good example of data flow. [A really good idea](http://guide.meteor.com/react.html#using-createContainer).
  * The example to look at is `WelcomeContainer` and `Welcome` components in the source.
  * The point is to show that your UI components should have no notion on where information is coming from.  Information should just be passed in as properties and then reacted to.
  * `WelcomeContainer` accomplishes this by pulling the necessary user object from Meteor and the pass it on to `Welcome`.

## The Stack

The technology stack I'm proposing to use...

* [Meteor](https://www.meteor.com/) >= 1.3.0
  * With all its awesome reactive data at the core
  * 1.3 added incredible support for using any NPM module
  * 1.3 also added an incredbile best practices [guide](http://guide.meteor.com/)
* [React](https://facebook.github.io/react/index.html) >= 15.0.0
  * The best way to create awesome reactive UI
* [React-Router](https://github.com/reactjs/react-router) >= 2.4.0
  * Works well with React (but not required by react, FYI)
  * Required for used with React-Ionic
* [React-Ionic](http://reactionic.github.io/) >= 1.0.0
  * A wonderful wrapper of [Ionic CSS](http://ionicframework.com/docs/components/) into reusable React components
  * Accomplishes things angular accomplishes for fully Ionic apps. Yay, React > Angular ;)
    * [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) for nice CSS style transitions
    * [Snap.js](https://github.com/jakiestfu/Snap.js/)
    * And more..


## Notes

### Fixtures

Just so you all know, I have added an initial user of test/test so you can quickly hop in to main part of the app.  Be sure to remove that from `fixtures.js` if you use this as your boilerplate.

### Security

I have already removed `insecure` and `autopublsh` to try and encourage developers to start thinking with methods and publicatins/subscriptions earlier.  It has been long [discussed and concluded](http://guide.meteor.com/security.html#allow-deny) that this is the best way to go.  But for initial protyping feel free to add them back in.  However, I would still encourage you to use `ReactMeteorData.createContainer` rather than making database queries in your components.

### ValidatedPublication

I really like [mdg:ValidatedMethod](https://github.com/meteor/validated-method).  And I think there should be something like it for publications.  I have created just that.  It is pretty much a copy of validated method but it works.  I would love to add some more usefulness to this in the future (like turn it in to a package, make it have some usefulness like I documented [here](https://github.com/meteor/validated-method/issues/51))

### File Structure

The file structure is trying to abide by the Meteor guide with everything is in `/imports` except for a few files.  The following is a short description of each file and what it is accomplishing.

```
├── client
│   ├── main.html # necessary for meteor.  change page header info here.
│   └── main.js # necessary for meteor.  provides entry point in to /imports
├── imports
│   ├── api
│   │   ├── clicks # collection, publication and methods used for tracking clicks
│   │   │   ├── clicks.js
│   │   │   ├── methods.js
│   │   │   └── publications.js
│   │   └── users
│   │       ├── publications.js # a publication of only the logged in user
│   │       ├── server
│   │       │   └── account-setup.js # setup how accounts get created.  need to add fields user object.
│   │       └── users.js # schema for users and other need to have user initialization
│   ├── helpers
│   │   ├── ValidatedPublication.js # my attempt at doing what mdg:validated-method does for methods
│   │   └── getPlatform.js # nice helper method to get the current platform, and also be able to fake it out during dev
│   ├── startup
│   │   ├── client
│   │   │   ├── index.js # do necessary imports and render the routes
│   │   │   └── routes.jsx # routing information
│   │   └── server
│   │       ├── fixtures.js # place to add dummy data.
│   │       ├── index.js # import the other files in this directory
│   │       └── register-api.js # prepare the collections, publications, and methods
│   └── ui
│       ├── components
│       │   ├── AbsoluteMiddle.jsx # nice helper component
│       │   ├── Content.jsx # wrapper component for parenting main content pages.  Provides automatic loading spinner if needed and correctly sets up IonContent
│       │   ├── LoadingDiv.jsx # Loading spinner to wrap things with that might need time to load.
│       │   ├── NavMenuButton.jsx # nav bar button to open side menu
│       │   └── SideMenu.jsx # side menu
│       ├── containers # pass necessary data down to layouts or pages
│       │   ├── AppContainer.jsx
│       │   ├── AuthContainer.jsx
│       │   ├── ClickMeContainer.jsx
│       │   ├── MainContainer.jsx
│       │   └── WelcomeContainer.jsx
│       ├── layouts
│       │   ├── App.jsx # provides app wide niceties (connection lost overlay, popupError on this.context)
│       │   ├── Auth.jsx # layout wrapper for login and signup pages
│       │   ├── Body.jsx # layout for everything.  This is the top level route.  This is important to set up IonBody correctly as it is the brain to all of React-Ionic.
│       │   └── Main.jsx # layout for all pages while logged in.  Provides side meu and nav bar etc.
│       ├── pages
│       │   ├── ClickMe.jsx # click me interactive page
│       │   ├── HelloWorld.jsx # just shows the text
│       │   ├── Login.jsx # login page
│       │   ├── NotFound.jsx # obligatory 404 page
│       │   ├── Signup.jsx # signup page
│       │   └── Welcome.jsx # Welcome page.  Shows current user information
│       └── stylesheets
│           ├── app.scss # some good css for the app, imports necessary css from React-Ionic
│           └── index.js # add more lines here for other stylesheet imports.  Sass, Less, doesn't matter as long as you have the correct meteor packages installed
├── package.json # every project needs iti
├── public
│   ├── favicon.png # use png and call it out explicitly in the main.html file so you can easily version the favicon
│   └── fonts # directoy of fonts necessary for Ionic icons
└── server
    └── main.js # necessary for meteor. just imports /imports/startup/server

```

## TODOs

* Have a nice clean `useraccounts:unstyled` modeled in this app.
  * Have a facebook login.
  * Reset password abilities etc.
* Add some more dummy data.  Even something as simple as the click counter that gets stored.  Just to show more data examples.
* I have an idea about a navigation stack component that will work in tandum with IonNavBar providing automatic analysis of when to show the back button over the root level menu button.
## Contribute

Feel free to contribute.  Make comments.  Offer pull requests.  Help me figure out the best starting block for the most people.

## Credits

To the open-source community before me!

Especially to [Mark Pors](https://github.com/pors/) for React-Ionic.
