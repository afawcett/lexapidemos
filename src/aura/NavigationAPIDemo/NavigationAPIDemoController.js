({
	navigateToComponent : function(cmp, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : cmp.get('v.componentDef_x'),
            isredirect : cmp.get('v.isredirect'),
            componentAttributes : JSON.parse(cmp.get('v.componentAttributes'))
        });
        evt.fire();
	},
    navigateToList : function(cmp, event, helper) {
        var navEvent = $A.get("e.force:navigateToList");
        navEvent.setParams({
            "listViewId": cmp.get('v.listViewId'),
            "listViewName": cmp.get('v.listViewName'),
            "scope": cmp.get('v.scope')
        });        
        navEvent.fire();        
    },
    navigateToObjectHome : function(cmp, event, helper) {
        var navEvent = $A.get("e.force:navigateToObjectHome");
        navEvent.setParams({
            "scope": cmp.get('v.scope')
        });        
        navEvent.fire();        
    },
    navigateToRelatedList : function(cmp, event, helper) {
		var relatedListEvent = $A.get("e.force:navigateToRelatedList");
		relatedListEvent.setParams({
        	"relatedListId": cmp.get('v.relatedListId'),
	        "parentRecordId": cmp.get("v.parentRecordId")
    	});
	    relatedListEvent.fire();    
	},
    navigateToSObject : function(cmp, event, helper) {
		var navEvent = $A.get("e.force:navigateToSObject");
		navEvent.setParams({
	        "recordId": cmp.get("v.recordId")
    	});
	    navEvent.fire();            
    },
    navigateToUrl : function(cmp, event, helper) {
		var navEvent = $A.get("e.force:navigateToURL");
		navEvent.setParams({
	        "url": cmp.get("v.url")
    	});
	    navEvent.fire();            
    },    
    editRecord : function(cmp, event, helper) {
		var navEvent = $A.get("e.force:editRecord");
		navEvent.setParams({
	        "recordId": cmp.get("v.recordId")
    	});
	    navEvent.fire();            
    },    
    createRecord : function(cmp, event, helper) {
		var navEvent = $A.get("e.force:createRecord");
		navEvent.setParams({
	        "entityApiName": cmp.get("v.entityApiName"),
	        "defaultFieldValues": JSON.parse(cmp.get("v.defaultFieldValues")),
	        "recordTypeId": cmp.get("v.recordTypeId")
    	});
	    navEvent.fire();            
    },
    openFiles : function(cmp, event, helper) {        
		var navEvent = $A.get("e.lightning:openFiles");
		navEvent.setParams({
	        "recordIds": [ cmp.get("v.recordIds") ]
    	});
	    navEvent.fire();            
    }    
})