public with sharing class accountListCtrl {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList()
   {
      List<Account> acclist=[select Id,Name,Type from Account];
      return acclist;
   }
}
