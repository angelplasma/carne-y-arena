# Carne y Arena

## Links

+ Staging Site: https://master.carneyarenadc.netlify.com/
+ Production Site: https://carneyarenadc.com/ (or https://carneyarenadc.netlify.com/)

## Requirements

+ Node 6.11.1
+ [Yarn](https://yarnpkg.com/)
+ [GatsbyJS](https://www.gatsbyjs.org/docs/)

## Setup

```bash
# optional (if using NVM for managing Node versions)
nvm install

# install dependencies
yarn install
```

## Workflow

To start a hot-reloading development environment accessible at localhost:8000, run:

```bash
yarn develop
```

To perform an optimized production build with static HTML and per-route JavaScript code bundles, run:

```bash
yarn build
```

## Deployment

To deploy to the staging site simply commit or merge your work into the master branch. To deploy to the production site simply merge master into the production branch with `git merge --ff-only master`.
