public with sharing class SObjectDescribeController {

    @AuraEnabled
    public static DescribeInfo describe(String recordId) {
        SObjectType objectType = ((Id) recordId).getSObjectType();
        DescribeSObjectResult objectDescribe = objectType.getDescribe();
        Map<String, SObjectField> objectFieldsMap = objectDescribe.fields.getMap();
        DescribeInfo di = new DescribeInfo();
        di.objectName = objectDescribe.getName();
        di.objectLabel = objectDescribe.getLabel();
		di.fields = new List<DescribeInfoField>();
        for(SObjectField field : objectFieldsMap.values()) {
            DescribeInfoField df = new DescribeInfoField();
            DescribeFieldResult fieldDescribe = field.getDescribe();
            df.name = fieldDescribe.getName();
			df.label = fieldDescribe.getLabel();
			df.type = String.valueOf(fieldDescribe.getType());
            di.fields.add(df);
        }
        return di;
    }
    
    public class DescribeInfo {
        @AuraEnabled
        public String objectName;
        @AuraEnabled
        public String objectLabel;
        @AuraEnabled 
        public List<DescribeInfoField> fields;
    }
    
    public class DescribeInfoField {
        @AuraEnabled
        public String name;
        @AuraEnabled
        public String label;
        @AuraEnabled
        public String type;
    }
}