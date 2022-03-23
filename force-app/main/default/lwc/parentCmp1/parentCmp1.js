import { LightningElement, track } from 'lwc';

export default class ParentCmp1 extends LightningElement {
    @track progressValue=0;
    handleProgressValueChange(event)
    { 
        this.progressValue=event.detail;
    }

}