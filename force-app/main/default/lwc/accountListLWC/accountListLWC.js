import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/GetAccountList.getAccountList';

export default class AccountListLWC extends LightningElement 
{
   // @wire (getAccountList) accounts;
   @track accounts;
   @track error;
   @wire (getAccountList) wiredaccounts({data,error})
   { 
       if(data){ 
           this.accounts=data;
       }
       else if(error)
       { 
           this.accounts=error;
       }
   }
}