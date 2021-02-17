<h1 align="center"><b>Angularization</b></h1>
<br>
<p align="center"> 
  <img width="120px" src="triangular-ruler.png" />
</p>
<h3 align="center">
(Work-in-Progress)
<br>
Thorough documentation for getting fully setup and started for successful <b>Angular 11+</b> development.</h3>
<br>
<hr>
<br>
I decided to start Angularization in order to document the Angular 11+ web-development experience of a fellow software engineer and I — after having a knowledge-transfer and mutual-learning session for getting completely setup with a Node.js version manager (NVM), Visual Studio Code, and Angular 11. 
<br>
<br>

The content in the sub-sections are my own personal insights, so... 

**I highly recommend that anyone serious about Angular 2+ development always turn to [Angular.io](https://angular.io) as their primary source of guidance when setting up, getting started, and learning Angular**.

However, I hope that you find this thoroughly documented, **project-in-progress** helpful as content is added to it.

For now, **please give this repo a ⭐ if you think Angularization can be useful for novice Angular developers — based off of what you see thus far**. 

Thanks.
<p align="right">— @pjnalls</p>
<br>
<br>
<h2 align="center"><b>Sections</b></h2>

### [**"*NVM* not NPM" ❓**](#nvm-not-npm--1)
* [What is "NVM"?](#what-is-nvm)
* [Why NVM?](#why-nvm)
* [Disclaimer: Uninstalling Node.js](#disclaimer-uninstalling-nodejs)
* [How to Install NVM](#how-to-install-nvm)
* [How to Use NVM](#how-to-use-nvm)
* [NVM Alternatives](#nvm-alternatives)
### [**Visual Studio Code 🟦**](#visual-studio-code--1)
* [Integrated Terminal](#integrated-terminal)
* [System Administrator Permissions](#system-administrator-permissions)
* [Extensions](#extensions)
* [Add Terminals](#add-terminals)
* [Delete Terminals](#delete-terminals)
* [Edit Default Terminal](#edit-default-terminal)
* [Bonus: Zen Mode](#bonus-zen-mode)
### [**Angular 11+ 🔥**](#angular-11--1)
* [How to install Angular CLI](#how-to-install-angular-cli)
* [How to generate a new app](#how-to-generate-a-new-app)
* [How to serve a new app](#how-to-serve-a-new-app)
* [`app.component`: HTML, SCSS, & TypeScript](#appcomponent-html-scss--typescript)
* [`app.module`](#appmodule)
* [`package.json`](#packagejson)
* [NPM Scripting: Create New Script](#npm-scripting-create-new-script)
* [NPM Scripting: Update `start`](#npm-scripting-update-start)
* [NPM Scripting: CI/CD Power 💪](#npm-scripting-cicd-power-)
* [`npm generate component <component-name>`](#npm-generate-component-component-name)
* [Angular**DRY**: Don't. Repeat. Yourself.](#angulardry-dont-repeat-yourself)
* [`*ng`X: Structural Directives](#ngx-structural-directives)
* [Unidirectional Data Flow: `ParentComponent` <b>→</b> `ChildComponent`](#unidirectional-data-flow-parentcomponent--childcomponent)
<br>
<br>
<br>
<br>

<hr>

## **"*NVM* not NPM" ❓** 
#### [Return to "Sections"](#sections)
<hr>

### What is "NVM"?
NVM stands for ***N*ode *V*ersion *M*anager**. Essentially, it is a system utility for installing, using, and managing multiple versions of Node.js.

Below is a [NVM-Windows](https://github.com/coreybutler/nvm-windows) example when using a Windows Command Prompt (cmd):

```

C:\> nvm list
  
    15.8.0
  * 14.15.5 (Currently using 64-bit executable)

C:\> node -v
v14.15.5

C:\> nvm use 15.8.0
Now using node v15.8.0 (64-bit)

C:\> node -v
v15.8.0

C:\>

```

As you can see above, We're able to switch versions of `node` with a simple `use` command.
<br>
<br>

### Why NVM?
If you work on multiple Node.js projects at any point, simultaneously or sequentially, it would behoove you not to have more than one version of Node.js on your machine — especially if you maintain any number of legacy and modern applications at an enterprise.
<br>
<br>
Let's put this in perspective: at the time of writing this sub-section of Angularization (February 15, 2021), Node.js was initially released 11+ years ago (May 27, 2009) [[1]](https://github.com/nodejs/node-v0.x-archive/tags?after=v0.0.4) — soon to be *12 years ago*. Since that time, there's been ***500+ versions released for Node.js*** [[2]](https://nodejs.org/dist/).
<br>
<br>
Therefore, invest some time into researching and using a reliable type of NVM, since at some point — if not now or in the past — you'll most likely need it as Node.js development progresses. 
<br>
<br>
**I'll be using NVM-Windows, but you can check the ["NVM Alternatives"](#nvm-alternatives) sub-section for other popular NVM projects.** 
<br>
<br>

### How to Install NVM
As mentioned in the previous sub-section, I and another developer used NVM-Windows for our Node version manager during our initial Angular 11+ session, and I have been using it since Summer 2016 (if I remember correctly).

Needless to say, I haven't had any troubles with it on a Windows machine. 

Follow the set of instructions in the "**Installation & Upgrades**" sections in the `README` found [here on GitHub](https://github.com/coreybutler/nvm-windows/releases).

**WARNING:** Make sure you read the ***PREREQUISITE*** part for uninstalling existing Node.js & NPM installations. 

Also be sure to read the second paragraph about global module conflicts and backing up any global `npmrc` configurations.

...

Done? Okay... *now* — time to put `nvm` to use.

<br>

### How to Use NVM
**NVM's commands vary** due to different implementations so check your preferred NVM's documentation for details. 

For ***NVM-Windows***, refer to the https://github.com/coreybutler/nvm-windows#usage page and section full description of all the commands.
<br>
<br>

### NVM Alternatives
* `nvm`: https://github.com/nvm-sh/nvm (**45,000+ ⭐!**)
* `n`: https://github.com/tj/n (14,000+ ⭐)
* `choco` https://github.com/chocolatey/choco (7,000+ ⭐)

**Disclaimer**: I've only personally and *professionally* used NVM-Windows, so please research these alternatives if you've never used an any NVM I've mentioned thus far. 
<br>
<br>

<hr>

## **Visual Studio Code 🟦** 
#### [Return to "Sections"](#sections)
<hr>

### Integrated Terminal
### System Administrator Permissions
### Extensions
### Add Terminals
### Delete Terminals
### Edit Default Terminal
### Bonus: Zen Mode

<br>
<br>

<hr>

## **Angular 11+ 🔥** 
#### [Return to "Sections"](#sections)
<hr>

### How to install Angular CLI
### How to generate a new app
### How to serve a new app
### `app.component`: HTML, SCSS, & TypeScript
### `app.module`
### `package.json`
### NPM Scripting: Create New Script
### NPM Scripting: Update `start`
### NPM Scripting: CI/CD Power 💪
### `npm generate component <component-name>`
### Angular**DRY**: Don't. Repeat. Yourself.
### `*ng`X: Structural Directives
### Unidirectional Data Flow: `ParentComponent` <b>→</b> `ChildComponent`
<br>
<hr>
<br>
<br>