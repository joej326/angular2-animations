import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [                       // 1) add the trigger
    trigger('myDivTest', [ //trigger gets a 1st arg name, and an array of states + transition
      state('joe', style({            // style 1st arg = name, 2nd arg = style method w/ css properties
        backgroundColor: 'red',
        transform: 'translate(0,0)'
      })),
      state('bruce', style({
        backgroundColor: 'green',
        transform: 'translate(200px,100px)'
      })),
      transition('joe <=> bruce', animate(300))    //arrow specifies direction
      // transition('bruce => joe', animate(800))

    ]),


    trigger('secondTest', [
      state('first', style({
        backgroundColor: 'red' // added this to prevent the div from disappearing after the animation
      })),
      state('second', style({
        backgroundColor: '#cb1d9d' // added this to prevent the div from disappearing after the animation
      })),
      transition('first <=> second', [ //transition can also take an array as 2nd arg
        style({                        //that can define states during the transition
          backgroundColor: 'orange'  //this will fire first,
        }),
        animate(500, style({        // then this
          backgroundColor: '#db4d1d'
        })),
        animate(1000, style({        // then this
          backgroundColor: '#cb1d9d'
        })),
        animate(500) // passing animate with just a time frame allows a smooth transition to the end state
      ]
    )


    ])
  ]
})
export class AppComponent {
  myState = 'joe';
  complex = 'first';

	list = ['Milk', 'Sugar', 'Bread'];

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}

  onAnimate(){
    this.myState == 'joe' ? this.myState = 'bruce' : this.myState = 'joe';
  }

  secondAnimation(){
    this.complex == 'first' ? this.complex = 'second' : this.complex = 'first';
  }
}
