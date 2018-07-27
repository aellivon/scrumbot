# Angular App Setup

Document to guide the Angular webapp setup.

## Requirements

- Node >= `10.6.0`
- NPM >= `6.2.0`

## Setup

### Step 1

If you do not have the `Angular CLI` installed in your machine yet, do so with this command:

`$ npm install -g @angular/cli`

### Step 2

Install the webapp's dependencies

_From the project's root, cd into `assets/fe`_

When you are already in the Angular app's project directory, install the NPM packages by running:

`$ npm install`

### Step 3

After all dependencies are installed, you can now start watching for file changes in the webapp's source code

You can do this in the `assets/fe` folder with the command:

`$ ng build --watch`


#### Step 2a/3a

Step 2 and 3 have utility commands created in a Makefile. You can skip `cd`ing into the webapp directory and issue npm commands by using the shortcut commands in the Makefile.

From the project's root directory:

_To install npm packages:_

`$ make webapp-install`

_To watch for code changes:_

`$ make webapp-watch`

## Development

### Generating Components

`$ ng generate component [name]`

[https://github.com/angular/angular-cli/wiki/generate-component]
(https://github.com/angular/angular-cli/wiki/generate-component)


### Relative Root Imports

The app's root is the `assets/fe/src/` directory.

Everything under this directory can be imported in the root fashion.

Examples:


_Module:_

`assets/fe/src/app/components/containers/scrumboard/scrumboard.component`

_Import this module:_

`import { ScrumboardComponent } from app/components/containers/scrumboard/scrumboard.component`
