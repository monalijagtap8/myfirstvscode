import { LightningElement, track } from 'lwc';

export default class MyWebComponent extends LightningElement {
@track
   greeting='';
    changeHandler(event)
    {this.greeting=event.target.value}
}