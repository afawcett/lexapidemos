({
	handleEvent : function(component, eventName, event) {
		var eventParamsAsJSON = JSON.stringify(event.getParams());
		var action = component.get("c.handleEvent");
		console.log(eventParamsAsJSON);
		action.setParam("eventName", eventName);
		action.setParam("eventParams", eventParamsAsJSON);
		action.setCallback(this, function(response) {
            if(response.getState() === 'SUCCESS') {
            	var message = response.getReturnValue();
            	if(message!=null) {
	            	var messages = component.get('v.messages');
	            	messages.splice(0,0, response.getReturnValue());
	            	component.set("v.messages", messages);
				    var toastEvent = $A.get("e.force:showToast");
				    toastEvent.setParams({
				        "title": "FinancialForce Assistant",
				        "message": message
				    });
				    toastEvent.fire();		
            	}
            }                
        });
        $A.enqueueAction(action);  		
	}
})