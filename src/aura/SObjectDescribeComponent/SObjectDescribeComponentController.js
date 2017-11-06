({
    init: function (cmp, event, helper) {
	    cmp.set('v.fieldColumns', [
                {label: 'Name', fieldName: 'name', type: 'text'},
                {label: 'Label', fieldName: 'label', type: 'text'},
                {label: 'Type', fieldName: 'type', type: 'text'}
            ]);
        cmp.set('v.fields', []);
        if(cmp.get('v.recordId')!=null) {
			var action = cmp.get("c.describe");
			action.setParams({ recordId : cmp.get("v.recordId") });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var describeInfo = response.getReturnValue();
                    cmp.set('v.sobjectName', describeInfo.objectName);
                    cmp.set('v.sobjectLabel', describeInfo.objectLabel);                    
                    cmp.set('v.fields', describeInfo.fields);
                }
            });
            $A.enqueueAction(action);                        
        }
    },
    onObjectChange : function(cmp, event, helper) {
        console.log(event);
	},
    onRecordIdChange : function(cmp, event, helper) {
        var recordId = event.getParam('value');
        if(recordId == null) {
            cmp.set('v.sobjectName', '');
            cmp.set('v.sobjectLabel', '');
	        cmp.set('v.fields', []);
        } else {
			var action = cmp.get("c.describe");
			action.setParams({ recordId : cmp.get("v.recordId") });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var describeInfo = response.getReturnValue();
                    cmp.set('v.sobjectName', describeInfo.objectName);
                    cmp.set('v.sobjectLabel', describeInfo.objectLabel);                    
                    cmp.set('v.fields', describeInfo.fields);
                }
            });
            $A.enqueueAction(action);            
        }
	}
})