<br>
<br>
<p align="center"> 
  <img width="120px" src="a-degrees.png" alt="Angularization project logo"/>
</p>
<br>
<h1 align="center"><b>Angularization</b><br><br></h1>
<br>

<h3 align="center">

  <br>
  <br>
  <b>Angular 11+</b> development tutorials for intermediate developers who need to start from 0.
  <br>
  <br>

  (Work-in-Progress)

</h3>
<br>
<br>
<br>
<hr>

<br>
<br>
<h2 align="center"><b>Preface</b></h2>
<br>
I decided to start Angularization in order to document my particular Angular 11+ web-development setup process after having a quasi-knowledge-transferring, quasi-mutually-learning session for getting another developer completely setup with a Node.js version manager (NVM), Visual Studio Code, and Angular 11. 
<br>
<br>

The content in the sub-sections are my own personal insights, so... 

**I highly recommend that anyone serious about Angular 2+ development always turn to [angular.io](https://angular.io) as their primary source of guidance when setting up, getting started, and learning Angular**.

However, I hope that you find this thoroughly documented, living README helpful as content is continually added.

For now, **please give this repo a ⭐ if you think Angularization can be helpful for novice Angular developers — based off of what is available below thus far**. 

Thanks.
<p align="right">— @pjnalls</p>
<br>
<br>
<h2 align="center"><b>Sections</b></h2>
<br>

### [**"*NVM* not NPM" ❓**](#nvm-not-npm--1)
* [What is an "NVM"?](#what-is-an-nvm)
* [Why an NVM?](#why-an-nvm)
* [How to Install NVM](#how-to-install-nvm)
* [How to Use NVM](#how-to-use-nvm)
* [NVM Alternatives](#nvm-alternatives)
### [**Visual Studio Code 🟦**](#visual-studio-code--1)
* [Integrated Terminal](#integrated-terminal)
* [Add Terminals](#add-terminals)
* [End a Terminal Session](#end-a-terminal-session)
* [Select Default Shell](#select-default-shell)
* [Caveats: IDE-Restarts & Permissions](#caveats-ide-restarts--permissions)
* [Extensions (Optional)](#extensions-optional)
* [Bonus: Zen Mode](#bonus-zen-mode)
### [**Angular 11+ & Component-Driven Development 🔥**](#angular-11--component-driven-development--1)
* [Getting Started: Angular CLI](#getting-started-angular-cli)
* [Storybook.js, Why, & Getting Started](#storybookjs-why--getting-started)
* [Okay, Let's Do This!: Component-Driven, Angular 11 Development 🔥](#okay-lets-do-this-component-driven-angular-11-development-)
### [**References**](#references)
<br>
<br>
<br>
<br>

<hr>

## **"*NVM* not NPM" ❓** 
#### [Return to "Sections"](#sections)
<hr>
<br>

### **What is an "NVM"?**
NVM stands for ***N*ode *V*ersion *M*anager**. Essentially, it is a system utility for installing, using, and managing multiple versions of Node.js.

Below is a [NVM-Windows](https://github.com/coreybutler/nvm-windows) example when using a Bash (Git Bash, more specifically) shell:

```

$ nvm list
  
    15.8.0
  * 14.15.5 (Currently using 64-bit executable)

$ node -v
v14.15.5

$ nvm use 15.8.0
Now using node v15.8.0 (64-bit)

$ node -v
v15.8.0

$

```

As you can see above, we're able to switch versions of `node` with a simple `nvm use` command.
<br>
<br>

### **Why an NVM?**
If you work on multiple Node.js projects at any point, simultaneously or sequentially, it would behoove you not to have more than one version of Node.js on your machine — especially if you maintain any number of legacy and modern applications at an enterprise.
<br>
<br>
Let's put this in perspective: at the time of writing this sub-section of Angularization (February 15, 2021), Node.js was initially released 11+ years ago (May 27, 2009) [[1]](#1) — soon to be *12 years ago*. Since that time, there's been ***500+ versions released for Node.js*** [[2]](#2).
<br>
<br>
Therefore, invest some time into researching and using a reliable type of NVM, since at some point — if not now or in the past — you'll most likely need it as Node.js development progresses. 
<br>
<br>
**I'll be using NVM-Windows, but you can check the ["NVM Alternatives"](#nvm-alternatives) sub-section for other popular NVM projects.** 
<br>
<br>

### **How to Install NVM**
As mentioned in the previous sub-section, I and another developer used NVM-Windows for our Node version manager during our initial Angular 11+ session, and I have been using it since Summer 2016 (if I remember correctly).

Needless to say, I haven't had any troubles with it on a Windows machine. 

Follow the set of instructions in the "**Installation & Upgrades**" sections in the `README` found [here on GitHub](https://github.com/coreybutler/nvm-windows/releases).

**WARNING:** Make sure you read the ***PREREQUISITE*** part for uninstalling existing Node.js & NPM installations. 

Also be sure to read the second paragraph about global module conflicts and backing up any global `npmrc` configurations.

...

Done? Okay... *now* — time to put `nvm` to use.

<br>

### **How to Use NVM**
**NVMs' commands vary** due to different implementations so check your preferred NVM's documentation for details. 

For ***NVM-Windows***, refer to the https://github.com/coreybutler/nvm-windows#usage page and section full description of all the commands.
<br>
<br>

### **NVM Alternatives**
**Disclaimer**: I've only personally and *professionally* used NVM-Windows, so please research these alternatives if you've never used any of the NVMs I mentioned in this documentation. 
* `nvm`: https://github.com/nvm-sh/nvm (**45,000+ ⭐**)
* `n`: https://github.com/tj/n (14,000+ ⭐)
* `choco` https://github.com/chocolatey/choco (7,000+ ⭐)

<br>
<br>
<br>
<br>
<hr>

## **Visual Studio Code 🟦** 
#### [Return to "Sections"](#sections)
<hr>

<br>

[Visual Studio (VS) Code](https://code.visualstudio.com/) is already widely used by many, but I just want to touch briefly on a few of many features that helped us while we went through setting up for the Angular 11+ session.

<br>

### **Integrated Terminal**
During two Angular dev. sessions, we relied heavily on VS Code's integrated terminal — as using the [Angular CLI](https://cli.angular.io/) was crucial for our efficiency. 

*Really*. We were able to use the integrated terminal and Angular CLI to get a broken Angular 8 app migrated to version 11 and fully functional **in less than 2 hours**! (Other than some minor caveats, [update.angular.io](https://update.angular.io/) walked us through the whole migration process.)

So please ensure that you have it in the bottom of your workspace.

<br>

For those new to VS Code, it looks like this:

```
PROBLEMS   OUTPUT   DEBUG CONSOLE   TERMINAL
                                   ¯¯¯¯¯¯¯¯¯¯

$ echo hello world
hello world

$




```
<br>

Ignore the "`$ echo hello world`", etc. if your not using Bash as I'm using for your terminal shell.

If you don't see any of that in your workspace, then simply go to `Terminal` and select `New Terminal` from the top menu:

```
🟦  File   Edit   Selection   View   Go   Run   Terminal   Help
                                                ¯¯¯¯¯¯¯¯¯
```
<br>

### **Add Terminals**
We will be working with multiple terminal sessions at some point during Angular development so search for the large `+` button if you need to add another terminal session.
```
 ____________________
| 1: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                         ^
                        /_\
                         |
                         |
```
<br>

From here, you can use the terminal dropdown switch between terminals.
```
 ____________________
| 2: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                   ^
                  /_\
                   |
                   |
```
<br>

### **End a Terminal Session**
You can end a terminal session by clicking the 🗑 (waste-basket-looking) icon.

Click the 🗑 icon.
```
 ____________________
| 2: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                                   ^
                                  /_\
                                   |
                                   |
```
<br>

And the list of terminals will select the terminal before the one that just ended.
```
 ____________________
| 1: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  ^
 /_\
  |
  |
```

<br>

### **Select Default Shell**

Select a default shell terminal by clicking the terminal dropdown menu.
```
 ____________________
| 1: bash          v |
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                   ^
                  /_\
                   |
                   |
```
<br>

Once the menu opens, choose the `Select Default Shell` from the dropdown options and choose your preferred shell. Again, I'm using Bash for my shell, which I recommend in order for you to have an easier time following this documentation, but you are free to use others if you must. 


<br>

### **Caveats: IDE-Restarts & Permissions**

1. You may need to close and reopen VS Code to get any system changes to show in VS Code. We had some issues with the integrated terminal not recognizing global system commands (`node`, `npm`, etc.), so try to restart VS Code first if you don't see any immediate changes when making any system changes throughout this documentation.

1. You may run into administrative issues where you may not be permitted to run a certain command in your particular terminal session as we did during our setup session. It may be that, but if worst comes to worst, you can just use a different shell (e.g., `poweshell` → `cmd`) like we did.

<br>

### **Extensions (Optional)**
Installing extensions or not is entirely up to you. I'm of the "sugarless" (read my [Unsweet.js README](https://github.com/pjnalls/unsweet.js)), minimalist mindset (mostly) when it comes to relying on multiple, third-party plugins, dependencies, etc. and I recommend you add as little to your development environment early on since you can always add later — but this is completely optional.

<br>

### **Bonus: Zen Mode**
Press `Ctrl` and `K` keys simultaneously, and then immediately tap `Z` to enter... **Zen Mode**.

Double tap `Escape` to exit.

You're welcome 😉.
<br>
<br>
<br>

<hr>

## **Angular 11+ & Component-Driven Development 🔥** 
#### [Return to "Sections"](#sections)
<hr>
<br>

For this tutorial, we're going to cover the basics of [component-driven development (CDD)](https://www.chromatic.com/blog/component-driven-development/) with Angular 11 by creating a navbar, one component at a time. 

<br>

### **Getting Started: Angular CLI**
You can go to [cli.angular.io](https://cli.angular.io/) to get familiar with Angular's CLI or follow along below.

...

First, globally install Angular CLI with the `npm` command.
```
PROBLEMS   OUTPUT   DEBUG CONSOLE   TERMINAL
                                   ¯¯¯¯¯¯¯¯¯¯

$ npm install -g @angular/cli

...

+ @angular/cli@11.2.1
added 238 packages from 182 contributors in 19.985s

$

```
<br>

Now that the command-line interface has been installed, let's jump straight into Angular app development by generating a new app with the `ng new <app-name>` command and then `cd` into the new app.

```
$ ng new get-great-at-ng-blog
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]

CREATE get-great-at-ng-blog/angular.json (3817 bytes)
CREATE get-great-at-ng-blog/...
...
Installing packages (npm)...

...
                                      ] 
✓ Packages installed successfully.
...

$ cd get-get-at-ng-blog

$
```


<br>

You may want to read about [Angular workspace and project file structure](https://angular.io/guide/file-structure) while you explore the different files.

You can also explore [Angular basics](https://angular.io/guide/what-is-angular) if you're completely new to any progressive, component-based, front-end frameworks to at least get the gist of how they work, why you need them, and the scope of the Angular ecosystem.

...

If you notice placeholder templates in your `src/app/app.component.html` file then run the following command:

```
$ rm -rf src/app/app.component.html && touch src/app/app.component.html
```
<br>

### **Storybook.js, Why, & Getting Started**
"[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation for React, Vue, Angular, and more" [[3]](#3).

Even if you're not planning on creating full-scale design systems, a tool like Storybook can be used in order to gain full leverage of it's [visual test-driven development (visual TDD)](https://www.chromatic.com/blog/visual-test-driven-development/) and [component-driven development (CDD)](https://www.chromatic.com/blog/component-driven-development/) capabilities.

Storybook enforces [DRY principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) to make your code reusable so that your individual components work anywhere with the correct data. Furthermore, it gives you living documentation of all your UI components — from the smallest, atomic component to full-blown pages (and even the entire app itself if you get the routing right). All that with hot-module reloading on top 🍒! 

All Storybook requires of you is to (1) install it and (2) write short [stories](https://storybook.js.org/docs/react/get-started/whats-a-story). It's just as simple as `$ touch src/stories/<ComponentName>.stories.ts` in your terminal and adding less than 30 lines of code at best — once you have Storybook installed and a component generated.

...

So if your on board, let's install Storybook and then run the app in our root folder:

```
$ npx sb init
```
<br>

Once the installation completes then startup the app and take a look.
```
$ npm run storybook
```

<br>

Feel free to detour from this tutorial and go to the official ones at [learnstorybook.com](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/).

...

<br>

Once you're ready and are all setup, let's get to it!

<br>


### **Okay, Let's Do This!: Component-Driven, Angular 11+ Development 🔥**

Once you get comfortable with Storybook, let's use the Angular CLI to generate two [simple components](https://www.learnstorybook.com/intro-to-storybook/angular/en/simple-component/) and then a [composite component](https://www.learnstorybook.com/intro-to-storybook/angular/en/composite-component/):

<br>

First, `ng generate` the `navbar` composite component:
```
$ ng generate component navbar
```
<br>

Next, `ng generate` the `nav-item` and `brand` simple components nested inside the `navbar` composite component:

```
$ ng generate component navbar/nav-item

$ ng generate component navbar/nav-brand
```
<br>

Ultimately, we want to strive for visual TDD and CDD, so let's first write our [stories](https://storybook.js.org/docs/react/get-started/whats-a-story).

<br>

### **Visual Test-Driven Development**

Let's take advantage of the hot-module reloading for Storybook and visually develop our components by writing the stories (the "interesting" states) first while we get our visual test to pass, or behave visually as expected. 

<br>

Run `npm run storybook` from the root location of your project once more.

```
$ npm run storybook
```

<br>

Once story book is running locally, create a TypeScript file for writing new stories:

```
$ touch src/stories/NavBrand.stories.ts
```

<br>

### **`NavBrand.stories.ts`**

You can refer to the documentation for Storybook as I did to [learn how to write stories](https://storybook.js.org/docs/react/writing-stories/introduction) as I did. Be sure you pick Angular as your framework for the correct docs. (By default, it's React.)

When you're ready, you can setup and start writing stories like these:

```typescript
// NavBrand.stories.ts

import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavBrandComponent } from '../app/navbar/nav-brand/nav-brand.component';

export default {
  title: 'Example/NavBrand',
  component: NavBrandComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavBrandComponent> = (args: NavBrandComponent) => ({
  component: NavBrandComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, label: 'A°' };

export const Dark = Template.bind({});
Dark.args = { label: 'A°' };

```

When you save the above code in the file, you'll notice two errors. ***That's good***: it means you're starting the TDD process 🙂.

Now that we've written our stories (tests), let's fix the errors with *minimal* code in our `nav-brand.component.ts` file (located in the `src/app/navbar/nav-brand` folder) since TypeScript doesn't recognize the `light` or `label` properties.

<br>

### **`nav-brand.component.ts`**
In the first few lines of the `NavBrandComponent` class, add the following fields:

```typescript
// ...

export class NavBrandComponent implements OnInit {
  
  // Add the following 2 input fields.
  @Input() light = false;
  @Input() label = '';

  // ...
}

```
Save.

...

If Storybook runs with no errors, then... Congrats! You've successful done TDD and are now *really* ready for visual TDD 🎉. 

Ensure that you can see "NavBrand" in the Storybook UI-component explorer and the generic "nav-brand works" paragraph text that Angular CLI generates `nav-brand.component.html` file (also located in the `src/app/navbar/nav-brand` folder).

<br>

### **`nav-brand.component.html`**

```html
<!-- nav-brand.component.html -->
<a
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
  ngDefaultControl [ngModel]="label"
  ngDefaultControl [ngModel]="light"
>
  {{ label }}
</a>

```

Ensure that you can see "NavBrand" in the Storybook UI-component explorer and you can see a generic looking "A°" or whatever you decided to label your brand.

Once confirmed, let's give our brand some style!

<br>

### **`nav-brand.component.scss`**

<br>

### **`NavItem.stories.ts`**

<br>


### **`nav-item.component.html`**

<br>


### **`nav-item.component.scss`**

<br>


### **`nav-item.component.ts`**

<br>


### **`Navbar.stories.ts`**
### **`navbar.component.html`**
### **`navbar.component.scss`**
### **`navbar.component.ts`**

<br>


### **`navbar.component.html`**


<br>


### **`navbar.component.scss`**


<br>


### **`navbar.component.ts`**

<br>

<hr>

## **References** 
#### [Return to "Sections"](#sections)
<hr>
<br>

### 1. 

https://github.com/nodejs/node-v0.x-archive/tags?after=v0.0.4

### 2. 

https://nodejs.org/dist/

### 3. 

https://storybook.js.org/ 

### 4.

https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint


<br>
<br>
<br>