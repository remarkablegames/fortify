<p align="center">
  <img src="https://raw.githubusercontent.com/remarkablegames/fortify/master/src/assets/bear.png" alt="Teddy">
  <br>
  <img src="https://raw.githubusercontent.com/remarkablegames/fortify/master/src/assets/title.png" alt="Fortify">
</p>

[Fortify](https://b.remarkabl.org/fortify) is a puzzle game where your objective is to defend teddy :bear:

This game was made during the [Global Game Jam 2019 (GGJ)](https://globalgamejam.org/news/theme-global-game-jam-2019-%E2%80%A6). The theme of the jam was:

> What home means to you

This project was bootstrapped with [`phaser-template`](https://github.com/remarkablegames/phaser-template) and hosted on [remarkablegames](https://remarkablegames.org/). To learn more, read the following [blog post](https://remarkablegames.org/posts/fortify/).

Play this game on:

- [remarkablegames](https://b.remarkabl.org/fortify)
- [Newgrounds](https://www.newgrounds.com/portal/view/748296)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Install

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/fortify.git
```

Install dependencies:

```sh
$ npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the game for production to the `build` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run release`

Bumps the `package.json` using [standard-version](https://github.com/conventional-changelog/standard-version).

### `npm run deploy`

Deploys the game to [GitHub Pages](https://pages.github.com/) by force pushing the `build` folder to the remote repository's `gh-pages` branch.

## Uploading the Game

If you're uploading the game to a site, make sure to do the following:

1. Open `package.json` and change the `"homepage"` value to `"."`. This ensures the links are relative. _Optional_: update the game config url in `src/index.js`.

2. _Optional_: remove GitHub Corners from `public/index.html` and `src/index.css`.
3. Build the game, remove any unnecessary files, and compress the folder into a zip archive:
   ```sh
   $ npm run clean
   $ npm run build
   $ rm build/service-worker.js
   $ zip -r fortify.zip build
   ```
4. Don't forget to clean up the project directory after the upload succeeds:
   ```sh
   $ rm fortify.zip
   ```

## Contributors

[![Ben Budnevich](https://github.com/benox3.png?size=50)](https://github.com/benox3) &nbsp;
[![Dan Phillips](https://github.com/danmakenoise.png?size=50)](https://github.com/danmakenoise) &nbsp;
[![remarkablemark](https://github.com/remarkablemark.png?size=50)](https://github.com/remarkablemark)

## License

[MIT](LICENSE)
