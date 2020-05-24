

# 1 - Tour of heroes

The `first project` of this initial studies was developed following angular docs sugested application

## Topic 1

It was created `Heroes component` and used concepts like `interpolation` to display heros info from a `interface` with id and name. Furthermore it was used `pipe` to upercase hero name and `two-way` binding in an input to change the hero's name, FormsModule was required to use `ngModel` as a input's property

### Code sample review

```angular
<h1>{{title}}</h1>
<app-heroes></app-heroes>

<h2>{{hero.name | uppercase}} Details</h2>


<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
```


## Topic 2

A list of heroes was created and displayed with `Directive *ngFor`, to give interactivity to the list `event binding (click)` was used
