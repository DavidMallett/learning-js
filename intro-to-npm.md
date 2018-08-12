
## NPM
When you install Node, you will also get NPM, the node package manager. You will need this to install apps that are specific to javascript. Some of these are small utilities that were just created to solve a small problem, and others are huge apps that add a ton of functionality to your command line. In general, virtually any problem you will run in to has most likely been faced and solved before; google any issues you have, and you'll see the most common community-accepted solution (typically on a site like github or stackoverflow).  
  
Here are some npm commands:  
  
- `npm -v` - prints the currently installed version of NPM, also you can run this to confirm that NPM is installed and working correctly.  

- `npm install` - running this command without any additional options will look for a file named package.json in the current directory, and download any packages listed in that file. Every Javascript project has a `package.json` in the top level folder of the project that lists the packages used in that project and basic metadata about the project. Creating a "package.json" is easy! Just run:  

- `npm init` - a command that will create a package.json in the current directory. It will ask a series of questions, and you can skip them by pressing Enter. You should run this command in your `/Users/yourname/beginner-coding` folder, and other than giving the project a name, you can pretty much leave everything else blank.

- `npm install --save lodash` - replace "lodash" with the name of the app you wish to download; a list can be seen on http://npmjs.org. This command will install any app available on NPM (in this case, Lodash - more on this later), _locally in your project_ in a folder called node_modules, as well as save the name and version of the app(s) you installed in your `package.json`. This makes it so anyone else working on this project can run `npm install` and then their computer will scan the `package.json`, see the package name, and install it automatically (in this case, the package - Lodash - is then called a **dependency** of the project).

- `npm install -g @angular/cli` - replace "@angular/cli" with the name of any other app. This command will install any app available on NPM, _globally on your computer_. The difference, is that when you install a package globally, it isn't added to your project, and instead is added to your command line. Often, this will give you a new command to use. This example will install Angular, one of the most-used packages for developing web apps, which gives you the `ng` command. To try it out, run `ng -v` to display the version of Angular (and its plugins) that you have installed, and when you're ready for something a little more complex, run `ng new my-angular-project` (WARNING: this command may take 5-10 minutes to finish and during that time, it might look like nothing is happening - don't interrupt the command!) to create a new Angular project named "my-angular-project" (or whatever you want to name it) with all the boilerplate and project structure created for you (an Angular app has a specific folder structure and file naming convention for each kind of file). "Boilerplate" means standardized files and/or pieces of code that every app has (like `package.json`!)


# Getting Started

To run javascript (.js) files, simply run `node nameOfJavascriptFile.js`.

1. Open your preferred command-line interface (on Mac, Terminal or iTerm; on Windows, "node.js command prompt" or Git Bash)

2. `mkdir learning-js`. This command creates a new folder.

3. `cd learning-js`. This command navigates your CLI to other folders

4. `npm init`. You can leave everything blank for now; this simply initializes your package.json. Just give it a name for now.

5. Let's give our project a folder structure. `mkdir src`, then `cd src` followed by `mkdir js`. Your .js files should be saved under this folder. `cd ..` to get back to the project root.

6. Open a new file in your IDE/text editor and save it as `learning-js/src/js/hello.js`.

