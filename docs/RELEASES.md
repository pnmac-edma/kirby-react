# Releases
To enable creating zip files containing our deployable react assets, we have set up Release-It to handle managing semantic versioned Git tags, and publishing releases on GitHub.

## Local Setup
You will need to set up a GitHub token to run the Release-It with GitHub integration.
After you have your token you will need to assign it as an environment variable named **GITHUB_TOKEN**.
Additionally, ensure your run ```npm i``` on dev to ensure you have all necessary devDependencies need to complete the release process. 

[Creating a GitHub token for your account.](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

## Create a Release
To create a new release, follow the steps below after completing your local setup. 
1. Pull latest on the **dev** branch locally to your machine, and ensure you have a clean working directory.
2. Run ```npm run release```
3. You will be prompted to select the type of [semantic version](https://semver.org/) bump.
4. You will then have prompts, answer yes or hit enter for each when prompted
  1. ```Tag (x.y.z)? (Y/n)```  This will create the new git tag locally.
  2. ```Push? (Y/n)``` This will push your tag to origin  (currently GitHub). You have to press enter twice.
  3. ```Create a release on GitHub (Release x.y.z)? (Y/n)``` This will create a GitHub release in a draft state, and attach the zipped deployment assets.
5. When Release-It complete it will output a direct link to the draft release it created.  
You can then add any desired release notes and publish the draft release on GitHub.

## GitLab Considerations
The release-it library does support GitLab, but it hasn't been setup yet. 
If you have setup gitlab runners for CI/CD, the commands currently used Release-It to package the build 
into a zip is located in the ```.release-it.json``` configuration file as the ```after:bump``` hook.
These package commands should run on all platforms with npm installed.  And could be moved to either a npm
script, or bash commands on a GitLab Runner.

## External Documentation
* [Release-It](https://www.npmjs.com/package/release-it)
* [GitHub Releases](https://github.com/release-it/release-it/blob/master/docs/github-releases.md)
* [Creating a GitHub token for your account.](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)
* [All release-it config options and their default values](https://github.com/release-it/release-it/blob/master/conf/release-it.json)


