<br>
<h1 align="center">
  <br>
  Get Great at <strong>A°</strong>ngularization
  <br>
  <br>  
</h1>
<br>
<br>
<h3 align="center">Example Web Application for Visual Test-Driven, <br>Component-Driven Angular 11+ Development with Storybook 6+</h3>
<br>
<br>
<hr>
<!-- --- -->

<br>

The following are instructions for how to use this example Angularization app.
<br>
<br>

## System Requirements
<br>

Before you clone this repository, ensure you have [Git](https://git-scm.com/) and I recommend that you have the [latest LTS (Long-Term Support) version of Node.js](https://nodejs.org/en/) installed (`14.16.0` for me at the time of writing this) since that is the version I used to create this Angular application.


```bash
$ git --version
git version ...

$ node -v
v14.16.0
```

<br>

If you're completely new to Node.js you can look into my ["<em>NVM</em> not NPM" article here](https://github.com/pjnalls/Angularization#nvm-not-npm--1) and return back to this guide.

<br>

## Getting Started

<br>

`git clone` this Angularization repository `cd` into the downloaded folder.

```bash
$ git clone https://github.com/pjnalls/Angularization.git

$ cd Angularization/get-great-at-ng-blog/
```

<br>

If you don't have `yarn` installed, simply run the following `npm` command:

```
$ yarn -v
bash: yarn: command not found

$ npm --global install yarn

...

$
```
<br>

Install your dependencies with `yarn`.

```bash
$ yarn install
```
<br>

Lastly, run the Storybook server locally with the `storybook` script:

```bash
$ npm run storybook
```

A new page be served for Storybook.

<br>
<br>

# Angular CLI 11.2.1 Generated `README.md` Details:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
