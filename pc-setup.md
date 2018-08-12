## PC Setup

#### 1. Install nodejs.
  
Go to nodejs.org and download the latest windows version of nodejs (10.8.0 or "current" - you want the latest features). Double click the installer you downloaded and follow to prompts to install (important note: ensure there are NO SPACES in the installation path; it's best to just install to C:\nodejs, instead of the default which is "C:\Program Files\nodejs"). This will also install npm (Node Package Manager)
  
#### 2. Install Git.
  
Git is basically a distributed version-control system for projects with multiple people working on them. What that means is, you have a central location for the project called a Repository (repo). In git, you download a copy of the repo, make changes, and create what's called a Branch to save your changes to the project. When you're finished, you upload your branch back to the central repo, and other people can then see and download your branch. The person who owns the repo reviews your changes, and may request that you fix mistakes, or they can Merge your branch with the Master branch. Then, everybody else working on the project will see that the Master branch has been updated, and they will pull your changes into their respective branches. You can download the command line version of git at https://git-scm.com/downloads, but I recommend grabbing Sourcetree, a git GUI client: https://www.sourcetreeapp.com/

#### 3. Install an IDE (Interactive Development Environment)

I personally recommend VScode (https://code.visualstudio.com/). This is an IDE that is for the most part optimized for Javascript and Typescript. It's free and open source, and has thousands of user-created plugins for added functionality. Other good IDEs you can use include Visual Studio, Eclipse (Java), Sublime Text, Atom, and IntelliJ/JetBrains (see https://www.jetbrains.com/ - they have a lot of different language-specific IDEs). 

#### 4. (Optional) install global packages

This step is optional, but will save you time later once you learn the basics and transition to working on larger projects.

Once nodejs/npm and git are installed, go to start > programs > nodejs > "Node.js Command Prompt" (you may need to right click and "run as administrator"). Now, run 
`npm install -g typescript lodash ts-node mtgsdk-ts @angular/cli eslint`

This will take about 5-10 minutes and it may look like nothing is happening for a while. If this doesn't work, then run the following commands one at a time (copy and paste or type the text below into the node command prompt, and press Enter):

```sh
npm i -g typescript
npm i -g lodash
npm i -g ts-node
npm i -g @angular/cli
npm i -g eslint
```

This will install, respectively, Typescript (most modern way to use Javascript; see https://www.typescriptlang.org/ for more info), Lodash (extremely useful Javascript library which gives you a lot of flexibility when working with arrays and objects - https://lodash.com/ for more info), ts-node (tool that combines the tsc command from Typescript and the node command from Node - more info https://www.npmjs.com/package/ts-node ) and Angular (most used framework for developing UI web apps - https://angular.io/ ). You are going to need/want these tools eventually.
  