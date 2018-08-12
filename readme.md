# Review of Unix Commands
- `mkdir toast` - make a new folder called toast in the current directory (when you open Terminal, you usually start out in the Home directory, which is /Users/yourname or "~"). So if you open terminal and run this command the location of the new folder will be /Users/yourname/toast
- `pwd` - print out the current directory you are in
- `cd toast` and `cd ..` - change directory (move) into the folder named toast, and go back to the previous directory, respectively
- `ls` and `ls -la` - list of the files in the current directory
- `touch toast.txt` - create a new file named "toast.txt"
- `rm toast.txt` - remove (delete) the file named toast.txt, if it exists in the current directory



Challenge: (Mac only) on your own, can you learn what the `curl` command does?

## Homebrew
Homebrew, or just Brew, is a command line app that you use to install other apps. Simply run `brew install appname` in Terminal and it will be installed. Run `brew` without any other input and it will show you a list of commands, including a command to show what all apps in can install. To get the latest version of Javascript (currently distributed as node.js), run `brew install node`.

## NPM
When you install Node, you will also get NPM, the node package manager. You will need this to install apps that are specific to javascript. Some of these are small utilities that were just created to solve a small problem, and others are huge apps that add a ton of functionality to your command line. In general, virtually any problem you will run in to has most likely been faced and solved before; google any issues you have, and you'll see the most common community-accepted solution (typically on a site like github or stackoverflow).
Here are some npm commands:
`npm -v` - prints the currently installed version of NPM, also you can run this to confirm that NPM is installed and working correctly.
`npm install` - running this command without any additional options will look for a file named package.json in the current directory, and download any packages listed in that file. Every Javascript project has a `package.json` in the top level folder of the project that lists the packages used in that project and basic metadata about the project. Creating a "package.json" is easy! Just run:
`npm init` - a command that will create a package.json in the current directory. It will ask a series of questions, and you can skip them by pressing Enter. You should run this command in your `/Users/yourname/beginner-coding` folder, and other than giving the project a name, you can pretty much leave everything else blank.
`npm install --save lodash` - replace "lodash" with the name of the app you wish to download; a list can be seen on http://npmjs.org. This command will install any app available on NPM (in this case, Lodash - more on this later), _locally in your project_ in a folder called node_modules, as well as save the name and version of the app(s) you installed in your `package.json`. This makes it so anyone else working on this project can run `npm install` and then their computer will scan the `package.json`, see the package name, and install it automatically (in this case, the package - Lodash - is then called a **dependency** of the project).
`npm install -g @angular/cli` - replace "@angular/cli" with the name of any other app. This command will install any app available on NPM, _globally on your computer_. The difference, is that when you install a package globally, it isn't added to your project, and instead is added to your command line. Often, this will give you a new command to use. This example will install Angular, one of the most-used packages for developing web apps, which gives you the `ng` command. To try it out, run `ng -v` to display the version of Angular (and its plugins) that you have installed, and when you're ready for something a little more complex, run `ng new my-angular-project` (WARNING: this command may take 5-10 minutes to finish and during that time, it might look like nothing is happening - don't interrupt the command!) to create a new Angular project named "my-angular-project" (or whatever you want to name it) with all the boilerplate and project structure created for you (an Angular app has a specific folder structure and file naming convention for each kind of file). "Boilerplate" files are configuration files that

# Getting Started

1. Open your preferred command-line interface (on Mac, Terminal or iTerm; on Windows, "node.js command prompt" or Git Bash)
2. `mkdir learning-js`. This command creates a new folder.
3. `cd learning-js`. This command navigates your CLI to other folders
4. `npm init`. You can leave everything blank for now; this simply initializes your package.json. Just give it a name for now.
5. Let's give our project a folder structure. `mkdir src`, then `cd src` followed by `mkdir js`. Your .js files should be saved under this folder. `cd ..` to get back to the project root.
6. Open a new file in your IDE/text editor and save it as `learning-js/src/js/hello.js`.

## Exercise 1: types, functions, vars, and console

A string is any text consisting of any number of characters between two quotation marks. For example, "I like turtles", "1234asdf@#$", and "1" are all strings.

the console.log command will output whatever string is passed into it (if given an object, it will automatically check to see if that object has a toString() method - more on this later). You will use this command a whole lot while writing and editing code. Try it out with the following code (copy into your "hello.js" and save):
`console.log("Hello world! This is a test!");`  
Run the script with `node ./src/js/hello.js`, assuming you are in the root of the project. Observe the following output:  
  
Hello world! This is a test!  
  
Most of the time, you will console.log variables representing or containing strings. Replace the code in `hello.js` with:

`var greeting = "Hello world! This is a test!";`
`console.log(greeting);`
  
and save. Re-run the above command and observe that you get the same output as before.

A function, or method, is a piece of code that can do whatever you want it to do. Optionally, you may give the function any number of arguments (variables) which you can then use to generate output. By creating a function, you can easily re-use bits of code without having to repeat yourself. This brings us to the DRY (Don't Repeat Yourself) principle, which basically says the best practice of writing code is to repeat yourself as little as possible.

To create a function, simply type in your IDE `function functionName() {}` where "functionName" is the name of the function you're creating. To use the function, you can type `functionName()` elsewhere in your code and it will execute all the code between the `{}` (which you typically want to separate by a few line breaks to give yourself plenty of room)

