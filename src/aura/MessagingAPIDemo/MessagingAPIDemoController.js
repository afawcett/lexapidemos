({
	showNotice : function(cmp, event, helper) {
        cmp.find('notifLib').showNotice({
            "variant": cmp.get('v.variant'),
            "header": cmp.get('v.header'),
            "title": cmp.get('v.title'),            
            "message": cmp.get('v.message1'),
            closeCallback: function() {
                console.log('You closed the alert!');
            }
        });		
	},
	showToast : function(cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "variant": cmp.get('v.variant'),
            "title": cmp.get('v.title'),            
            "mode": cmp.get('v.message'),            
            "message": cmp.get('v.message2'),
            "messageData" : JSON.parse(cmp.get('v.messageData'))
        });		
	},
	showModal : function(cmp, event, helper) {
		cmp.find('overlayLib').showCustomModal({
            "header": cmp.get('v.header'),
            "body": cmp.get('v.body_x'),            
            "footer": cmp.get('v.footer'),            
            "showCloseButton": cmp.get('v.showCloseButton'),
            "cssClass" : cmp.get('v.cssClass')
        });		
	},
	showPopover : function(cmp, event, helper) {
		cmp.find('overlayLib').showCustomPopover({
            "body": cmp.get('v.body_x'),            
            "referenceSelector": cmp.get('v.referenceSelector'),            
            "cssClass" : cmp.get('v.cssClass2')
        }).then(function (overlay) {
            setTimeout(function() { 
                overlay.close(); 
            }, 3000);
        });        
	},
    showModalDemo : function(cmp, event, helper) {        
        $A.createComponent(
            "c:SObjectDescribeComponent", 
			{ recordId : 'a00B0000005ewy4IAA' },
			function(content, status) {
				if (status === "SUCCESS") {
					cmp.find('overlayLib').showCustomModal({
						header: "Widget Fields",
						body: content, 
						showCloseButton: true
                    });
                }
            });
    },
    showPopoverDemo : function(cmp, event, helper) {
        $A.createComponent(
            "c:SObjectDescribeComponent", 
			{ recordId : 'a00B0000005ewy4IAA' },
			function(content, status) {
				if (status === "SUCCESS") {
                    cmp.find('overlayLib').showCustomPopover({
                        "body": content,            
                        "referenceSelector": ".refPopoverDemo",            
                        "cssClass" : "popoverclass,cMessagingAPIDemo"
                    }).then(function (overlay) {
                        cmp._overlay = overlay;
                        setTimeout(function() { 
                            overlay.close(); 
                        }, 3000);
                    });        
                }
            });    
	}
})