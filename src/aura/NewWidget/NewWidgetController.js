({
	saveRecord : function(component, event, helper) {
		var navEvent = $A.get("e.force:navigateToSObject");
		navEvent.setParams({
	        "recordId": "a00B0000005ewy4IAA"
    	});
	    navEvent.fire();            		
	}
})