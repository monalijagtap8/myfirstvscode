import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting1="Monali";
    changeHandler(event){
        this.greeting1=event.target.value;
    }
}