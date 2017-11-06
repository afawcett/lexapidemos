({
    doInit: function(cmp) {
    },
    onRecordIdChange : function(component, event, helper) {
		helper.handleEvent(component, "onRecordIdChange", event);        
    },
	onRefreshView : function(component, event, helper) {
		helper.handleEvent(component, "force:refreshView", event);
	},
	onNavigateToSObject : function(component, event, helper) {
		helper.handleEvent(component, "force:navigateToSObject", event);
	},
	onNavigateToObjectHome : function(component, event, helper) {
		helper.handleEvent(component, "force:navigateToObjectHome", event);
	},
	onNavigateToURL : function(component, event, helper) {
		helper.handleEvent(component, "force:navigateToURL", event);
	},
	onNavigateToList : function(component, event, helper) {
		helper.handleEvent(component, "force:navigateToList", event);
	}	
})

/**
 * 	<table class="slds-table slds-table--bordered slds-table--cell-buffer">
	  <aura:iteration items="{!v.messages}" var="message">
		<tr>
	    	<td>
				<lightning:icon iconName="utility:info" variant="warning"/>	          
			</td>
			<td>
				<p>{!message}</p>
			</td>
		</tr>
  	  </aura:iteration>		  
	</table>    
**/