# Angular

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
- [Directives](#directives)
  - [Attribute built-in](#attribute-built-in)
  - [Structural built-in](#structural-built-in)
  - [Attribute custom]
  - [Structural custom](#structural-custom)
- [Models](#models)
- [Services](#services)
  - [Usage, hierarchical injector](#usage-hierarchical-injector)
  - [In other services](#in-other-services)
  - [Cross-component communication](#cross-component-communication)
- [Routing](#routing)
  - [Setting up](#setting-up)
  - [Adding routes]
  - [Links and navigation]
  - [Parameters]
  - [Query parameters and fragments]
- [Observables]

## How Angular builds the App
- don't import with .ts extensions, webpack adds it 
1. main.ts
    - `.bootstrapModule(AppModule)` (import `AppModule`)
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
    - `bootstrap: [AppComponent]` root component, in the decorator `@NgModule` (from `@angular/core`)
    - `bootstrap: [...]` [] of should be known components when Angular analyses `index.html`
3. index.html
    - `<app-root></app-root>` (other components are added inside the root components)

## AppModule
- bundles different pieces into one package
- custom modules mostly for big projects
- gives Angular info on which features to use
- `@NgModule` from `@angular/core`
  - `declarations: []` components, directives
  - `imports: []` modules
  - `bootstrap: []` root component (needed on start)
  - `providers: []` services

## Debugging
- find an error in the console
- using sourcemaps and breakpoints in browser
  - `sources` => `webpack` => `.` => `src`
- using `debugger;`
- using chrome extension Augury (access from dev tools)

## Components

## Data-binding inside one component

## Binding to custom property

## Binding to custom events

## Directives

### Attribute built-in
- looks like a normal HTML attribute
- doesn't change DOM
- event and data bindings are possible
- multiple on one element
- `[ngStyle]="{ 'background-color': 'prop' }"` or `[ngStyle]="{ backgroundColor: 'prop' }"`
- `[ngClass]="{ 'class-name': boolean }"` or `[ngClass]="{ className: boolean }"`
- `ngSwitch` directive is also attribute, but cases are structural

### Structural built-in
- looks like a normal HTML attribute with a leading `*`
- affects DOM (elements get added or removed)
- can't use multiple on one element (error!)
- if directive
  - `*ngIf="boolean; else noServer"` else is optional
  - `<ng-template #noServer>` to use else
- for directive
  - `*ngFor="let item of items; let i = index"` index is optional
- `*ngSwitchCase`

### Attribute custom

### Structural custom
- ```html
  <div *ngIf="condition">
    <p>Some content</p>
  </div>
  ```
  turns into
  ```html
  <ng-template [ngIf]="condition">
    <div>
      <p>Some content</p>
    </div>
  </ng-template>
  ```
- `ng g d directive_name` to generate directive with Angular CLI
- `unless.directive.ts` and `UnlessDirective` naming
- ```TypeScript
  import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

  @Directive({
    selector: '[appUnless]' // any name
  })

  export class UnlessDirective {
    @Input() set appUnless(condition: boolean) { // name === directory selector
      if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    }

    constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}
  }
  ```
- `<div *appUnless="condition">...</div>` to use

## Models
- `recipe.model.ts` and `RecipeModel` naming
- no decorator, just a simple class
- works like a blueprint
- props creation (2 ways)
  - `constructor(public name: string) {}` shortcut, provided by TypeScript
  - ```TypeScript
    public name: string;
    constructor(name: string) { this.name = name }
    ```

## Services

### Usage, hierarchical injector
- common cases to use
  - working with data
  - DRY
  - centralize functionality
- has no decorators
- NOT! `const loggingService = new LoggingService();` Angular has better way (hierarchical dependency injector)
  - injects dependency into our component automatically
  - `constructor(private logService: LoggingService) {}` to inform Angular that we require such an instance, type is required
  - `providers: [LoggingService]` to let Angular know, how to give us a dependency
- hierarchical dependency injector levels
  - module level - the highest: services, components
  - root component level - components
  - component level - current components and all the children
  - lower levels override higher (create a new instance of a service)

### In other services
1. provide on module level
    - `providers: [LoggingService]` in app.module 
    - `@Injectable({ provideIn: 'root' })` inside the service, also for lazy load (Angular 6+)
2. import the service
3. `constructor(private loggingService: LoggingService) {}`
4. `@Injectable()` to allow injecting a service

### Cross-component communication
- add a custom event to the service
- emit the event in one component
- subscribe to the event in another component

## Routing

### Setting up
- needed for adding navigation URLs
- `app-routing.module.ts` and `AppRoutingModule` naming
- `declarations: []` is not needed, all the components are declared in app.module
- import components
- `const appRoutes: Routes = [{...}];` from `@ang/router` add routes before decorator
- `@NgModule` from `@ang/core`
  - `imports: [RouterModule.forRoot(appRoutes)]` from `@ang/router` register routes (add configuration)
  - `exports: [RouterModule]` export what should be imported and accessible in another module
- `imports: [AppRoutingModule]` add module to app.module
- `<router-outlet></router-outlet>` directive to the html, where we want to load the components from routes
- `RouterModule.forRoot(appRoutes, { useHash: true })` hack for old browsers and servers with full paths (not returning index.html on 404 error)