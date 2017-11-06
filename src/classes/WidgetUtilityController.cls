public with sharing class WidgetUtilityController {

	@AuraEnabled
	public static String handleEvent(String eventName, String eventParams) {
		
		Map<String, Object> eventData = 
			(Map<String, Object>) JSON.deserializeUntyped(eventParams);
		
		// Extract object type from event 
		SObjectType objectType = null;
		if(eventName == 'force:navigateToSObject') {
			Id recordId = (String) eventData.get('recordId');
			objectType = recordId.getSObjectType();			
        } else if(eventName == 'onRecordIdChange') {
			Id recordId = (String) eventData.get('value');
			objectType = recordId.getSObjectType();			
		} else if (eventName == 'force:navigateToObjectHome') {
			String scope = (String) eventData.get('scope');
			Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
			objectType = gd.get(scope);
		}
		
		// Lookup object assistant message
		if(objectType!=null) {
			String objectName = objectType.getDescribe().getName();
			List<AssistantMessage__mdt> messages = 
				[select Message__c from AssistantMessage__mdt where Object__r.QualifiedAPIName = :objectName];
			if(messages.size()>0) {
				return messages[0].Message__c;
			}
		}
		return null;
	}    
}