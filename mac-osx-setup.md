## Mac OSX Setup
  
#### 1. Open up Terminal
  
(should be in Applications > Utilities) before you do anything else. Run `pwd` (type the command and press Enter) to see your current directory; you want to be in "/Users/yourname" or something similar. If not, run `cd ~` to change directory to the home directory, then run `ls -la` to list all the files in the directory. You should see a file in the output named ".bash_profile" (this file is hidden by default). If you don't see it, you need to create it by running `touch .bash_profile`  
  
#### 2. Visit http://brew.sh in your browser.

There is a command on that website that you can copy and paste into terminal to install Homebrew (which you are going to need).

Homebrew, or just Brew, is a command line app that you use to install other apps. Simply run `brew install appname` in Terminal and it will be installed. Run `brew` without any other input and it will show you a list of commands, including a command to show what all apps in can install. 

#### 3. Install Node.

To get the latest version of Javascript (currently distributed as node.js), run `brew install node`  

This will also install NPM (Node Package Manager) automatically.

#### 4. Install Git.
  
Git is basically a distributed version-control system for projects with multiple people working on them. What that means is, you have a central location for the project called a Repository (repo). In git, you download a copy of the repo, make changes, and create what's called a Branch to save your changes or whatever. When you're finished, you upload your branch back to the central repo, and other people can then see and download your branch. The person who owns the repo reviews your changes, and may request that you fix mistakes, or they can Merge your branch with the Master branch. Then, everybody else working on the project will see that the Master branch has been updated, and they will pull your changes into their respective branches. You can download the command line version of git at https://git-scm.com/downloads, but I recommend grabbing Sourcetree, a git GUI client: https://www.sourcetreeapp.com/.

#### 5. Install an IDE (Interactive Development Environment)

I personally recommend VScode (https://code.visualstudio.com/). This is an IDE that is for the most part optimized for Javascript and Typescript. It's free and open source, and has thousands of user-created plugins for added functionality. Other good IDEs you can use include Visual Studio, Eclipse (Java), Sublime Text, Atom, and IntelliJ/JetBrains (see https://www.jetbrains.com/ - they have a lot of different language-specific IDEs). 

#### 6. (Optional) install global packages

1. Once npm is installed, in terminal, run `npm install -g typescript lodash ts-node @angular/cli eslint`
 
This will take about 5-10 minutes and it may look like nothing is happening for a while. If this doesn't work, then run the following commands one at a time (copy and paste or type the text below into the Terminal, and press Enter):

```sh
npm i -g typescript
npm i -g lodash
npm i -g ts-node
npm i -g @angular/cli
npm i -g eslint
```

This will install, respectively, Typescript (most modern way to use Javascript; see https://www.typescriptlang.org/ for more info), Lodash (extremely useful Javascript library which gives you a lot of flexibility when working with arrays and objects - https://lodash.com/ for more info), ts-node (tool that combines the tsc command from Typescript and the node command from Node - more info https://www.npmjs.com/package/ts-node ) and Angular (most used framework for developing UI web apps - https://angular.io/ ). You are going to need/want these tools eventually.

Then, you're ready to start coding! I suggest reading the various "getting started" guides, and writing a simple "hello world" program.
Open a new file in VSCode, type:
`console.log("hello!");`
and save it as "hello.js". Then, in Terminal, run `node hello.js` to run your first app! You need to be in the same folder as where you saved the file - if it doesn't work, run `pwd` to see your current directory, `cd foldername` to move into a folder in the current directory, `cd ..` to go up a level, and `cd ~` to go to your home directory 
