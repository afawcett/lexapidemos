public class ConsoleAPIDemoController {

    @AuraEnabled
    public static List<Id> hotAccounts() {
        return new List<Id>(new Map<Id, Account>([select Id from Account where Rating = 'Hot' limit 5]).keySet());
    }
}