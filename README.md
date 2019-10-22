# ProtoAngularNx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@proto-angular-nx/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

`yarn create nx-workspace proto-angular-nx`


>  NX   NOTE  Because you selected an Angular-specific preset, we generated an Nx workspace powered by the Angular CLI.

  Run 'create-nx-workspace --help' to see how to select a different CLI.


———————————————————————————————————————————————


>  NX   NOTE  Nx CLI is not installed globally.

  This means that you might have to use "yarn nx" or "npm nx" to execute commands in the workspace.
  Run "yarn global add @nrwl/cli" or "npm install -g @nrwl/cli" to be able to execute command directly.


———————————————————————————————————————————————


>  NX   NOTE  First time using Nx? Check out this interactive Nx tutorial.

  https://nx.dev/angular/tutorial/01-create-application

Done in 27977.62s.