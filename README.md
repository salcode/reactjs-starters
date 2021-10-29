# ReactJS Starters

I am always encouraging developers to build something with ReactJS, as I believe the best learning comes from building. However, I recognize it can be challenging to come up with _what_ to build. The goal of this project is to create starting points that a developer can build upon, without having to start from a blank slate.

## Built With

This project is built-on the amazing [Create React App](https://github.com/facebook/create-react-app), which allows a developer to get a React App up and running quickly. On top of this ready to go blank React App, I've added some starting information.

## How to Use this Project

This Git respository contains different branches that are meant to start as starting points for builiding something in ReactJS. It is recommended you branch off one of these starter branches and build on top of it (you might want to use your initials as part of your new branch name).

e.g.

```
git switch 00-muppets-data
git switch -c 00-muppets-data-sf

... and build your project on this new branch
```

### Starter Branches

#### `00-muppets-data`

The `00-muppets-data` branch contains a data object with information about some of the Muppets and the people who perform them. A good place to start on this branch is to build out component(s) to render the data.

#### `01-countdown`

The `01-countdown` branch contains a `Countdown` component, which stores a number in state and counts to zero. A good place to start on this branch, would be to introduce a new component that receives the `counter` value as a prop and renders "The End" when the counter reaches zero. Another idea is to print "odd" or "even" based on the current value of the counter.

#### `02-redlight-greenlight`

The `02-redlight-greenlight` branch contains a stateless `RedlightGreenlight` component, which receives two props (a boolean value and a function). A good place to start on this branch would be to:

1. Create a visual indicator of whether the boolean value is `true` or `false` (this could be as simple as outputting the words "true" or "false")
2. Build a UI to allow the user to change the boolean value

#### `03-remote-api-request`

The `03-remote-api-request` branch contains a `RemoteApiBlogPosts` component that retrieves the most recent blog posts from Sal's blog and passes them to the `BlogPosts` component to be rendered.

Note: Sal's blog sets the `access-control-allow-origin` header, which allows us to use the data. Often sites will not set this value. In those cases, we need to use a proxy to retrieve the data.

A good place to start on this branch would be to:

1. Improve how the blog posts are rendered (e.g. make each blog post a link)
2. Change the hardcoded URL to Sal's blog to something that causes an error (e.g. `invalid://`) and add code to catch this error (so the app does not crash)
3. Display a user-friendly error message when the above error occurs (e.g. you could add a new state value to the component for the error message)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Other Scripts

While these two scripts should be more than enough to get you started, since this project is built with [Create React App](https://create-react-app.dev/) other scripts are available, see the [Create React App - Available Scripts documentation](https://create-react-app.dev/docs/available-scripts) for more details.
