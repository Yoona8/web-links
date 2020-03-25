# Angular

## Content
- [AppModule](#appmodule)
- [Debugging](#debugging)
- [Components](#components)
- [Data-binding inside one component](#data-binding-inside-one-component)
- [Binding to custom property](#binding-to-custom-property)
- [Binding to custom events](#binding-to-custom-events)
- [Local References](#local-references)
- [ViewChild](#viewchild)
- [ContentChild and ng-content](#contentchild-and-ng-content)
- [View Encapsulation](#view-encapsulation)
- [Component Lifecycle](#component-lifecycle)
- [Directives](#directives)
  - [Attribute built-in](#attribute-built-in)
  - [Structural built-in](#structural-built-in)
  - [Attribute custom](#attribute-custom)
  - [Binding custom](#binding-custom)
  - [Structural custom](#structural-custom)
- [Models](#models)
- [Services](#services)
  - [Usage, hierarchical injector](#usage-hierarchical-injector)
  - [In other services](#in-other-services)
  - [Cross-component communication](#cross-component-communication)
- [Routing](#routing)
  - [Setting up](#setting-up)
  - [Adding routes](#adding-routes)
  - [Links and navigation](#links-and-navigation)
  - [Dynamic paths parameters](#dynamic-paths-parameters)
  - [Query parameters and fragments](#query-parameters-and-fragments)
  - [Guards: canActivate](#guards-canactivate)
  - [Guards: canDeactivate](#guards-candeactivate) // fill
  - [Passing data to route](#passing-data-to-route) // fill
- [Observables](#Observables) // fill + content
- [Forms](#forms) // fill
  - [Basic idea](#basic-idea) // fill
  - [Template Driven](#template-driven) // fill
  - [Reactive](#reactive) // fill

## How Angular builds the App
<details>
<summary>Notes</summary>

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

</details>

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
- `@Component({})` from `@ang/core`
  - `selector: 'app-name' / '[appDir]' / '.class'` unique string
    - `<app-name>` typically for components
    - `<p appDir>` typically for directives
  - `template / templateUrl` required, only one notation
  - `styles / styleUrls` optional, only one notation
- `declarations: []` add to module
- `ng g c _component-name_` to create with CLI

## Data-binding inside one component
- communication between business logic and view
- updates dynamically at runtime
- output data
  - `{{ data }}` string interpolation
    - no multiline
    - resolved to a string
  - `[prop]="data"` property binding
    - `[]` indicates to angular that it's a property binding
  - can't mix string interpolation and prop binding
- event binding (react dynamically to an event)
  - `(click)="onButtonClick($event)"`
    - `()` indicates event binding
    - `$event` reserved name, browser `Event`
- two-way binding
  - `[(ngModel)]="data"` directive of `FormsModule`
    - `FormsModule` from `@ang/forms` import to `app.module.ts`
    - `[()]` combination of prop and event binding

## Binding to custom property
- `@Input() element: string;` from `@ang/core` decorator is needed, because by default all the props of the component are accessible only inside of the component
- `[element]="'element'"` to pass the value from parent
- `@Input('el') element: string;` to pass value now use `[el]`

## Binding to custom events
- to inform parent from child
- `@Output() cardAdded = new EventEmitter<card>();` from `@ang/core` create a custom event in child
- `onAddCardClick() { this.cardAdded.emit(card); }` emit the event from child
- `<app-child (cardAdded)="onCardAdded($event)">` bind from parent
- `@Output('cAdded') cardAdded = ...` use not `(cardAdded)="..."`, but `(cAdded)="..."`

## Local References
- usage inside a template, for ex when we don't need two-way binding
- returns an HTML element
- `#locRef` to any element
- `(click)="onButtonClick(locRef)"` or `{{ locRef.value }}`

## ViewChild
- to get access to the html element from ts file
- `@ViewChild(Component / 'localRef') element: ElementRef` from `@ang/core`
  - `Component` returns the first occurrence of the component in the app
  - `localRef` returns an element with this localRef
- `{ static: true / false }` true if we plan to use it inside `ngOnInit()` (for Angular < 9)
- `this.element.nativeElement` to use
- don't change the value via this approach

## ContentChild and ng-content
- `<ng-content></ng-content>` hook to project html content from parent to child
- `<app-child>...</app-child>` without `ng-content` ... content is lost
- `#locRef` add to a parent's html
- `@ContentChild('locRef') element: ElementRef` from `@ang/core` to access `<ng-content>` from parent in child
- `this.element.nativeElement` to access html element
- `@ContentChild('locRef', { static: true })` < 9 ver `true` if we plan to access from `ngOnInit()`, `false` otherwise
- don't change the value via this approach

## View Encapsulation
- `encapsulation: ViewEncapsulation.Emulated` from `@ang/core` add to the decorator
  - `Emulated` angular emulates shadow DOM (creates unique attributes)
  - `Native` uses shadow DOM (not supported by all browsers)
  - `None` no attributes added

## Component lifecycle
0. `constructor()`
1. `ngOnChanges(changes: SimpleChanges)` from `@ang/core` multi, after bound props change, changes contains those props
2. `ngOnInit()` once, when the component is initiated
3. `ngDoCheck()` multi, during every change detection runs (by Angular)
4. `ngAfterContentInit()` once, after `<ng-content>` has been projected into the view, can't access `@ContentChild` before
5. `ngAfterContentChecked()` multi, change detection
6. `ngAfterViewInit()` once, after view and child views initiated
7. `ngAfterViewChecked()` multi, change detection
8. `ngOnDestroy()` once, when about to be destroyed (ex `*ngIf`), clean-up here

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
- `@Directive({ selector: '[appHighlight]' })` from `@ang/core`
- `constructor(private element: ElementRef) {}` from `@ang/core` inject to access the element
  - `this.element.nativeElement` to access directly, but in some complicated cases could not get rendered yet
  - `constructor(private renderer: Renderer2) {}` form `@ang/core` is better
  - `this.renderer.setStyle(this.element.nativeElement, 'color', 'green', ~flags)` flags like `!important` etc

### Binding custom
- `@HostListener('mouseenter') hover(eventData: Event) { this.renderer... };` from `@ang/core` works like adding an event listener on the tag, where the directive is used
- `@HostBinding('style.backgroundColor') backgroundColor: string = transparent;` from `@ang/core` have to set initial color not to get an error
- `this.backgroundColor = 'blue';` now can be used instead of renderer
- `@Input() defaultColor: string = 'transparent';` to bind to a custom property
- `@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;` won't work on init
- `ngOnInit() { this.backgroundColor = this.defaultColor; }` have to set it here
- `@Input('appDirName') ...` to bind to the same name as a directive selector
- `<p appDirName>` if not the same name for the prop
- `<p [appDirName]="'blue'">` when the name of the prop is the same

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

### Adding routes
- `const appRoutes: Routes = [{ ... }];` from `@ang/router`
  - `path`
    - `path: ''` for starting (root) page
    - `path: 'users'` without `/` (error)
    - `path: ':id'` to use dynamic paths
    - `path: '**'` catches all paths, which are not specified, must be the last route
  - `component: ServerComponent` which component should be displayed when the path will be reached
  - `redirectTo: 'path'` but without component
  - `pathMatch: 'full'` reconfigures the default (when matched by prefix, so `/recipes` and `/` both match `'/recipes'` path)
  - `children: []` array of routes, nested in parent component, `<router-outlet>` required on parent
  - `canActivate: []` guards
  - `canActivateChild: []` guards
  - `data: { message: 'Page not found!' }` to pass some static data

### Links and navigation
Navigating via links
- `href="/recipes"` === type manually, works, but reloads the app
- `routerLink="/recipes"` or `[routerLink]="['/users', 'user']"` second (and more) path without `/`, angular catches the event and prevents default
- routes can be absolute and relative (from current component)
- `routerLinkActive="class-name"` could be added to a link or it's wrapper
- `[routerLinkOptions]="{ exact: true }"` for exact path match (full)

Navigating programmatically
- `router: Router` from `@ang/router` inject
- `this.router.navigate(['/users', 'user'])` like in `[routerLink]`, but doesn't know about current route
- `route: ActivatedRoute` from `@ang/router` inject, contains current route object
- `this.router.navigate([...], { relativeTo: this.route })`
- `this.router.navigate([...], { relativeTo: this.route, queryParamsHandling: '...' })`
  - `merge` merges current + navigate to params
  - `preserve` to keep only current params

### Dynamic paths parameters
- get parameters from paths like `:id`
- `constructor(private route: ActivatedRoute) {}` inject from `@ang/router`
- `this.route.snapshot.params['id']` to access the parameter in the initialization, not dynamic
- but by default Angular doesn't re-instantiate the component we currently in
- `this.route.params.subscribe((params: Params) => this.id = params['id])` for dynamical use the params observable
- don't need to unsubscribe, for this case Angular does it automatically on component is destroyed

### Query parameters and fragments
Via links
- `[queryParams]="{ allowEdit: '1', id: '2' }"` to `?allowEdit=1&id=2` bindable property of router directive
- `[fragment]="'loading'"` to `#loading`

Programmatically
- `constructor(private router: Router)` from `@ang/router`
- `this.router.navigate(['/users', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' })`
- `queryParamsHandling: 'preserve' / 'merge'` don't forget to add

Getting parameters and fragments
- `constructor(private route: ActivatedRoute)` from `@ang/router`
- `this.route.snapshot.queryParams / fragment` for static
- `this.route.queryParams / fragment.subscribe()` for dynamic

### Guards: canActivate
- to protect the route, runs before entering the route
- `canActivate(Child): [AuthGuard]` add to the route to protect route + children or children only
- `auth-guard.service.ts` export `AuthGuard(Service)`
- `CanActivate(Child)` implements from `@ang/router`
- for ex add some fake service
  ```TypeScript
  export class AuthService {
    isLoggedIn = false;
    
    isAuthenticated() {
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(this.isLoggedIn); }, 800);
      });
    }
    
    login() {
      // some logic
    }
  
    logout() {
      // some logic
    }
  }
  ```
- `AuthService` provide on the module level
- `@Injectable()`add to guard service, provide on the module level
- ```TypeScript
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate( // can run both async and static
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot // from @ang/router
  ): Observable<boolean> | Promise<boolean> | boolean { // from 'rxjs/Observable
    return this.authService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) { 
          return true; 
        } else {
          return false;
          // or
          this.router.navigate(['/']);
        }
      }
    }
  }
  ```

### Guards: canDeactivate

### Passing data to route

## Observables

### Theory

### Interval example

### Custom

### Operators

### Subject

## Forms

### Basic idea

### Template Driven

#### TD Validation

#### TD Preselected values

#### TD Grouping controls

#### TD Radio buttons

#### TD Set and patch values

#### TD Use form data

#### TD Reset form

### Reactive

#### R Create a form

#### R Sync form and HTML

#### R Submit a form

#### R Access to controls

#### R Grouping controls

#### R Arrays of controls

#### R Validation

#### R Custom validators

#### R Error codes

#### R Custom async validators

#### R Reacting to status and value changes

#### R Set and patch values