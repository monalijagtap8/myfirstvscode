import { api, LightningElement, track } from 'lwc';

export default class Person extends LightningElement {
    //@track wheneveer we want to property of data member reactive
    //@api whenever we want to make a data menber public
    @api location;
    @track
    user = {
            firstName:"Monali",
            lastName:"Jagtap"
    };

    @api
  updateUser()
     {
        /*  this.user = { 
             firstName:"Anvi",
            lastName:"Kadam"
                 } */
                 this.user.firstName="Anvi";
     }
}