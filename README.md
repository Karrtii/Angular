# Angular
Repository for Angular code while learning

## Table of Contents
1. [Hello World](#hello-world)
2. [Components](#components)
3. [Binding](#binding) <br />
  3.1 [Interpolation](#interpolation) <br />
  3.2 [Property Binding](#propertyBinding) <br />
  3.3 [Class Binding](#classBinding) <br />
  3.4 [Style Binding](#styleBinding) <br />
  3.5 [Event Binding](#eventBinding) <br />
  3.6 [Template Reference Variables](#templateReferenceVariables) <br />
  3.7 [Two-way Binding](#twoWayBinding)
4. [Structural Directives](#structuralDirectives)<br />
  4.1 [ngIf](#ngIf)<br />
  4.2 [ngSwitch](#ngSwitch)<br />
  4.3 [ngFor](#ngFor)
5. [Component Interaction](#componentInteraction)
6. [Pipes](#pipes)<br />
  6.1 [String](#pipeString)<br />
  6.2 [Number](#pipeNumber)<br />
  6.3 [Percent](#pipePercent)<br />
  6.4 [Currency](#pipeCurrency)<br />
  6.5 [Date](#pipeDate)


## 1. Hello World <a name="hello-world"></a>
![image](https://user-images.githubusercontent.com/71009398/126040930-20ca9599-bb9f-4552-b423-25e831226ed5.png)

## 2. Components <a name="components"></a>
![image](https://user-images.githubusercontent.com/71009398/126041037-9c2b6232-ebc3-4a37-8e3a-baa0d78b2c71.png)

## 3. Binding <a name="binding"></a>

### 3.1 Interpolation <a name="interpolation"></a>
![image](https://user-images.githubusercontent.com/71009398/126041141-326f185f-d937-4f3f-999b-f9aa8766ffe7.png)<br />
HTML:
```
<div>
  <h2>{{interpolation.toUpperCase()}}</h2>
    <h3>Welcome {{name}}</h3>
    <h3>{{2+2}}</h3>
    <h3>{{"Welcome" + name}}</h3>
    <h3>{{"Length of the name is " + name.length + "characters"}}</h3>
    <h3>{{name.toUpperCase()}}</h3>
    <h3>{{greetUser()}}</h3>
</div>
```
component.ts:
```
 greetUser()
  {
    return "Hello " + this.name;
  }
  ```

### 3.2 Property Binding <a name="propertyBinding"></a>
![image](https://user-images.githubusercontent.com/71009398/126041300-7c8ce519-1a02-44c3-b5b4-96e1d2012935.png)<br />
HTML:
```
<div>
  <h2>{{propertyBinding.toUpperCase()}}</h2>
    <input [id]="myId" type="text" value="Enter">
    <input [disabled]=isDisabled [id]="myId" type="text" value="Enter">
</div>
```

### 3.3 Class Binding <a name="classBinding"></a>
![image](https://user-images.githubusercontent.com/71009398/126041360-9aeed7a3-adcd-4880-9e8b-ef80ed3d40e3.png)<br />
HTML:
```
<div>
  <h2>{{classBinding.toUpperCase()}}</h2>
    <h3 class = "text-success">God of War</h3>
    <h3 [class]="successClass">God of War</h3>
    <h3 class="text-special" [class]="successClass">God of War</h3> <!-- the class binding ([class]) will overwrite the normal class thingy-->
    <h3 [class.text-danger]="hasError">God of War</h3>
    <h3 [ngClass]="messageClasses">God of War</h3>
</div>
```

### 3.4 Style Binding <a name="styleBinding"></a>
![image](https://user-images.githubusercontent.com/71009398/126041392-aeabc1e9-fb76-4c6b-b594-12a4f55a407b.png)<br />
HTML:
```
<div>
  <h2>{{styleBinding.toUpperCase()}}</h2>
    <h3 [style.color]="'orange'">Witcher</h3>
    <h3 [style.color]="hasError ? 'red' : 'green'">Witcher</h3> <!-- if hasError is true, then red. else green -->
    <h3 [style.color]="highlightColor">Geralt of Rivia</h3>
    <h3 [ngStyle]="titleStyles">Geralt of Rivia</h3>
</div>
```

### 3.5 Event Binding <a name="eventBinding"></a>
![image](https://user-images.githubusercontent.com/71009398/126041420-69ef8518-ab6c-4a0c-91f3-a297ba5d64b3.png)<br />
HTML:
```
<div>
  <h2>{{eventBinding.toUpperCase()}}</h2>
    <button (click)="onClick()">Click for boom</button>
    <h3>{{boom.toUpperCase()}}</h3>
</div>
```
component.ts:
```
  onClick()
  {
    this.boom = "boom!"
    return this.boom;
  }
  ```

### 3.6 Template Reference Variables <a name="templateReferenceVariables"></a>
![image](https://user-images.githubusercontent.com/71009398/126041503-9b914364-a6cb-4478-b33b-49ab8309452e.png)<br />
HTML:
```
<div>
  <h2>{{templateReferenceVariables.toUpperCase()}}</h2>
    <input #myInput type="text">
    <button (click)="logName(myInput.value)">Enter</button>
    <h3>{{enteredName}}</h3>
</div>
```
component.ts:
```
  logName(value: any)
  {
    this.enteredName = value;
  }
  ```

### 3.7 Two-way Binding <a name="twoWayBinding"></a>
![image](https://user-images.githubusercontent.com/71009398/126041551-dcb1cb97-6a6a-4d16-a6b1-6c01913e8723.png)<br />
HTML:
```
<div>
  <h2>{{twoWayBinding.toUpperCase()}}</h2>
  <input [(ngModel)]="enteredText" type="text">
  <h3>{{enteredText}}</h3>
</div>
```


## 4. Structural Directives <a name="structuralDirectives"></a>

### 4.1 ngIf <a name="ngIf"></a>
![image](https://user-images.githubusercontent.com/71009398/126041795-c98a202d-b258-4e23-9952-bd22ad5c988e.png)
![image](https://user-images.githubusercontent.com/71009398/126041800-6bb45eb5-2a4f-4864-8e61-79b3f656d853.png)<br />
HTML:
```
<div>
  <h2>{{ngIf}}</h2>
  <!-- First way of doing ngIf-->
  <!--  <h3 *ngIf="displayText">Super Saiyan</h3>
    <h3>Frieza</h3>
  -->

  <!-- Second way of doing it with else statement as well -->
  <!-- <h3 *ngIf="displayText; else elseBlock">Super Saiyan</h3>

  <ng-template #elseBlock>
    <h3>Frieza</h3>
  </ng-template>
  -->

  <!-- Third way of doing it-->
  <button (click)="switch()">Switcheroo</button>

  <div *ngIf="displayText; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
    <h3 [style.color]="'green'">Goku</h3>
  </ng-template>

  <ng-template #elseBlock>
    <h3 [style.color]="'red'">Frieza</h3>
  </ng-template>

</div>
```
component.ts:
```
switch()
  {
    if(this.displayText == true)
    {
      this.displayText = false;
    }

    else if(this.displayText == false)
    {
      this.displayText = true
    }
  }
  ```

### 4.2 ngSwitch <a name="ngSwitch"></a>
![image](https://user-images.githubusercontent.com/71009398/126041869-561055ac-d7ac-419b-95f8-47d5620003b9.png)
![image](https://user-images.githubusercontent.com/71009398/126041873-eb1d6d50-bd0d-4add-9b38-41773b4d8136.png)
![image](https://user-images.githubusercontent.com/71009398/126041875-9e0beee6-2a31-496a-bc3d-a30731efb5dd.png)
![image](https://user-images.githubusercontent.com/71009398/126041879-340b2776-47bc-45e4-8455-19212074a5b5.png)<br />
HTML:
```
<div>
  <h2>{{ngSwitch}}</h2>
  <button [style.color]="'red'" (click)="onClickRed()">Red</button>
  <button [style.color]="'green'" (click)="onClickGreen()">Green</button>
  <button [style.color]="'blue'" (click)="onClickBlue()">Blue</button>

  <div [ngSwitch]="color">
    <h3 [style.color]="'red'" *ngSwitchCase="'red'">You clicked on Red</h3>
    <h3 [style.color]="'green'" *ngSwitchCase="'green'">You clicked on Green</h3>
    <h3 [style.color]="'blue'" *ngSwitchCase="'blue'">You clicked on Blue</h3>
    <h3 *ngSwitchDefault>Click on the above buttons</h3>
  </div>
</div>
```
component.ts:
```
onClickRed()
  {
    this.color = "red";
  }
  
onClickGreen()
  {
    this.color = "green";
  }
  
onClickBlue()
  {
    this.color = "blue";
  }
  ```

### 4.3 ngFor <a name="ngFor"></a>
![image](https://user-images.githubusercontent.com/71009398/126041959-d7cbbe3f-9591-4729-8972-dfb3fb12b830.png)<br />
HTML:
```
<div>
  <h2>{{ngFor}}</h2>
  <h3>Color | Index | First | Last | Odd | Even</h3>
  <div *ngFor="let colors of colorArray; index as i; first as f; last as l; odd as o; even as e">
    <h3>{{colors}} | {{i}} | {{f}} | {{l}} | {{o}} | {{e}}</h3>
  </div>
</div>
```
component.ts:
```
  public colorArray = ["red", "blue", "green"];
```


## 5. Component Interaction <a name="componentInteraction"></a>
![image](https://user-images.githubusercontent.com/71009398/126042076-39f0aebe-f6be-4b13-9023-36801c347c6f.png)<br />
Clicked on 'Arthur Morgan':<br/>
![image](https://user-images.githubusercontent.com/71009398/126042104-bf5196ec-79f0-4d82-b4e4-3607e837ccc3.png)<br/>
Clicked on 'Kratos':<br/>
![image](https://user-images.githubusercontent.com/71009398/126042127-73a9d07e-f4ad-45f7-8584-fbfc1ac8b2af.png)<br/>
Clicked on 'Geralt of Rivia':<br/>
![image](https://user-images.githubusercontent.com/71009398/126042135-e2e0300a-5eba-4289-88e6-80367e01673b.png)<br/>
HTML:
```
<div>
  <h2>{{componentInteraction.toUpperCase()}}</h2>
  <h4>{{name}}</h4>
  <button (click)="fireEventRdr2()">Arthur Morgan</button>
  <button (click)="fireEventGow()">Kratos</button>
  <button (click)="fireEventWitcher()">Geralt of Rivia</button>
</div>
```
component.ts:
```
fireEventRdr2()
  {
    this.childEvent.emit("Red Dead Redemption 2");
  }

  fireEventGow() {
    this.childEvent.emit("God of War");
  }

  fireEventWitcher()
  {
    this.childEvent.emit("Witcher 3: The Wild Hunt");
  }
  ```


## 6. Pipes <a name="pipes"></a>

### 6.1 Strings <a name="pipeString"></a>
![image](https://user-images.githubusercontent.com/71009398/126042232-ee3f2505-705f-4416-ac81-2e0985b93e3d.png)<br/>
```
<div>
  <h2>{{"Strings" | uppercase}}</h2>
  <h3>{{roach}}</h3>
  <h3>{{"Lowercase: " + roach | lowercase}}</h3>
  <h3>{{"Uppercase: " + roach | uppercase}}</h3>
  <h3>{{"Titlecase: " + message | titlecase}}</h3>
  <h3>{{roach | slice:1:4}}</h3>
  <h3>{{person | json}}</h3>
</div>
```

### 6.2 Numbers <a name="pipeNumber"></a>
![image](https://user-images.githubusercontent.com/71009398/126042346-2532d570-3c62-4dc4-a1b5-cc7193762184.png)<br/>
HTML:
```
<div>
  <h2>{{"Numbers" | uppercase}}</h2>
  <h3>{{5.678 | number:'1.2-3'}}</h3> <!-- digitsinfo: minimum number of integer digits, then minimum number of decimal digits, then maximum number of decimal digits -->
  <h3>{{5.678 | number:'3.4-5'}}</h3>
  <h3>{{5.678 | number:'4.1-2'}}</h3>
</div>
```

### 6.3 Percent <a name="pipePercent"></a>
![image](https://user-images.githubusercontent.com/71009398/126042402-519c1e00-aec0-4f28-988c-8f93a389eb06.png)<br/>
HTML:
```
<div>
  <h2>{{"Percent" | uppercase}}</h2>
  <h3>{{0.25 | percent}}</h3>
  <h3>{{25 | percent}}</h3>
</div>
```

### 6.4 Currency <a name="pipeCurrency"></a>
![image](https://user-images.githubusercontent.com/71009398/126042429-d138c33f-67a1-42c0-ae95-b3da38caceea.png)<br/>
HTML:
```
<div>
  <h2>{{"currency" | uppercase}}</h2>
  <h3>{{0.25 | currency}}</h3>
  <h3>{{0.25 | currency: 'GBP'}}</h3>
  <h3>{{0.25 | currency: 'GPB': 'code'}}</h3>
</div>
```

### 6.5 Date <a name="pipeDate"></a>
![image](https://user-images.githubusercontent.com/71009398/126042460-321efb00-a3f3-4a98-8618-24dc9a474119.png)<br/>
HTML:
```
<div>
  <h2>{{"date" | uppercase}}</h2>
  <h3>{{date}}</h3>
  <h3>{{date | date:'short'}}</h3>
  <h3>{{date | date:'shortDate'}}</h3>
  <h3>{{date | date:'shortTime'}}</h3>
  <h3>{{date | date:'medium'}}</h3>
  <h3>{{date | date:'mediumDate'}}</h3>
  <h3>{{date | date:'mediumTime'}}</h3>
  <h3>{{date | date:'long'}}</h3>
  <h3>{{date | date:'longDate'}}</h3>
  <h3>{{date | date:'longTime'}}</h3>
</div>
```

























