({
	init : function(cmp, event, helper) {
        var workspaceAPI = cmp.find("workspace");
	    cmp.set('v.mycolumns', [
	            {label: "Focus", fieldName: "focused", type: 'text'},
                {label: 'Tab Id', fieldName: 'tabId', type: 'text'},
                {label: 'Title', fieldName: 'title', type: 'text'},
                {label: 'Record Id', fieldName: 'recordId', type: 'text'}  
            ]);        
        workspaceAPI.getAllTabInfo().then(function(response) {
            workspaceAPI.getAllTabInfo().then(function(response) {
                for (let record of response) {
                    record.focused = record.focused ? 'true': 'false';
                }                            
                cmp.set('v.mydata', response);
            });            
        });
	},
    closeAllTabs : function(cmp, event, helper) {
        var workspaceAPI = cmp.find("workspace");        
        workspaceAPI.getAllTabInfo().then(function(response) {
            workspaceAPI.getAllTabInfo().then(function(response) {
                for (let record of response) {
                    workspaceAPI.closeTab({tabId: record.tabId});
                }            
            });            
        });
    },
    openRedAccounts : function(cmp, event, helper) {
        var workspaceAPI = cmp.find("workspace");        
        var action = cmp.get("c.hotAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                for (let recordId of response.getReturnValue()) {
                    workspaceAPI.openTab({url: "#/sObject/" + recordId + "/view" });
                }                            
            }
        });        
		$A.enqueueAction(action);                    
    }
})