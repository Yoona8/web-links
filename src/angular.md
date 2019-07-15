# Angular
- Don't import with .ts (extensions)? webpack does it by itself on build.

## Content
- [How Angular builds the App](#how-angular-builds-the-app)
- [AppModule](#appmodule)
- [Debugging](#debugging)
- [Components](#components)
- [Data-binding inside one component](#data-binding-inside-one-component)
- [Binding to custom property](#binding-to-custom-property)
- [Binding to custom events](#binding-to-custom-events)
- [Local References]
- [ViewChild]
- [ContentChild and ng-content]
- [View Encapsulation]
- [Component Life-cycle]
- [Directives]
  - [Attribute]
  - [Structural]
  - [Custom]
- [Models]
- [Routing]
  - [Setting up]
  - [Adding routes]
  - [Links and navigation]
  - [Parameters]
  - [Query parameters and fragments]
- [Observables]

## How Angular builds the App
1. main.ts
  * `.bootstrapModule(AppModule)` (import `AppModule`)
    ```TypeScript
    import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

    import { AppModule } from './app/app.module';
    import { environment } from './environments/environment';

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    ```
2. app.module.ts
  * `bootstrap: [AppComponent]` root component, in the decorator `@NgModule` (from `@angular/core`)
  * `bootstrap: [...]` [] of should be known components when Angular analyses `index.html`
3. index.html
  * `<app-root></app-root>` (other components are added inside the root components)

## AppModule
- bundles different pieces into one package
- custom modules mostly for big projects
- gives Angular info on which features to use
- `@NgModule` from `@angular/core`
  - `declarations[]` components, directives
  - `imports[]` modules
  - `bootstrap[]` root component (needed on start)
  - `providers[]` services

## Debugging

## Components

## Data-binding inside one component

## Binding to custom property

## Binding to custom events