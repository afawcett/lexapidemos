({
    init: function (cmp, event, helper) {
		var utilityAPI = cmp.find("utilitybar");        
	    cmp.set('v.mycolumns', [
                {label: 'Id', fieldName: 'id', type: 'text'},
                {label: 'Is Loaded', fieldName: 'isLoaded', type: 'text'},
                {label: 'Label', fieldName: 'utilityLabel', type: 'text'},            
                {label: 'Highlighted', fieldName: 'utilityHighlighted', type: 'text'},            
                {label: 'Visible', fieldName: 'utilityVisible', type: 'text'},
                {label: 'Header Label', fieldName: 'panelHeaderLabel', type: 'text'},
                {label: 'Header Icon', fieldName: 'panelHeaderIcon', type: 'text'},            
                {label: 'Height', fieldName: 'panelHeight', type: 'number'},            
                {label: 'Width', fieldName: 'panelWidth', type: 'number'}            
            ]);
        utilityAPI.getAllUtilityInfo().then(function(response) {
			for (let record of response) {
                record.isLoaded = record.isLoaded ? 'true': false;
                record.utilityHighlighted = record.utilityHighlighted ? 'true': false;
                record.utilityVisible = record.utilityVisible ? 'true': false;
			}            
            cmp.set('v.mydata', response);
        });        
    },
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        if(selectedRows.length>0) {
            cmp.set('v.utilityId', selectedRows[0].id);
        } else {
            cmp.set('v.utilityId', '');
        }
    },
    minimizeUtility: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');
        utilityAPI.minimizeUtility({ utilityId : utilityId });        
    },    
    openUtility: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');
        utilityAPI.openUtility({ utilityId : utilityId });
    },    
    setPanelHeaderIcon: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");        
        var utilityId = cmp.get('v.utilityId');        
       	var sldskey = cmp.get('v.sldskey');
        utilityAPI.setPanelHeaderIcon({ utilityId : utilityId, icon : sldskey });        
    },    
    setPanelHeaderLabel: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');        
       	var label = cmp.get('v.label');
        utilityAPI.setPanelHeaderLabel({ utilityId : utilityId, label : label });
    },    
    setPanelHeight: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');        
       	var heightPX = parseInt(cmp.get('v.heightPX'));
        utilityAPI.setPanelHeight({ utilityId : utilityId, heightPX : heightPX });
    },    
    setPanelWidth: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');        
       	var widthPX = parseInt(cmp.get('v.widthPX'));
        utilityAPI.setPanelWidth({ utilityId : utilityId, widthPX : widthPX });
    },    
    setUtilityHighlighted: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');        
       	var highlighted = cmp.get('v.highlighted');
        utilityAPI.setUtilityHighlighted({ utilityId : utilityId, highlighted : highlighted });
    },    
    setUtilityIcon: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");        
        var utilityId = cmp.get('v.utilityId');        
       	var sldskey = cmp.get('v.sldskey');
        utilityAPI.setUtilityIcon({ utilityId : utilityId, icon : sldskey });
    },    
    setUtilityLabel: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");        
        var utilityId = cmp.get('v.utilityId');        
        var label = cmp.get('v.label');
        utilityAPI.setUtilityLabel({ utilityId : utilityId, label : label });        
    },    
    toggleModalMode: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar");
        var utilityId = cmp.get('v.utilityId');        
       	var enableModalMode  = cmp.get('v.enableModalMode');
        utilityAPI.toggleModalMode({ utilityId : utilityId, enableModalMode : enableModalMode });
    },
    demoNotifications: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar"); 
        var readNotification = cmp.get('v.readNotification');
        if(readNotification == true) {
			utilityAPI.setUtilityHighlighted({ highlighted : false });                        
            cmp.set('v.readNotification', false);
        } else {
            utilityAPI.minimizeUtility();                            
            setTimeout($A.getCallback(function () {
                utilityAPI.setUtilityHighlighted({ highlighted : true });            
				cmp.set('v.readNotification', true);
            }), 3000);                    
        }
    },
    demoProgressIndicator: function (cmp, event) {
		var utilityAPI = cmp.find("utilitybar"); 
        if (cmp.get('v.isProgressing')) {
            // stop
            cmp.set('v.isProgressing', false);
            cmp.set('v.progress', 0);
            cmp.set('v.progressToggleIcon', false);
            clearInterval(cmp._interval);
            utilityAPI.setUtilityLabel({ label : 'Utility Bar API Demo' });                    
            utilityAPI.setUtilityIcon({ icon : 'thunder' } );                                    
        } else {
            // start
            cmp.set('v.isProgressing', true);
            utilityAPI.minimizeUtility();        
            cmp._interval = setInterval($A.getCallback(function () {
                var progresToggleIcon = cmp.get('v.progressToggleIcon') == true ? false : true;
                var progress = cmp.get('v.progress');
                cmp.set('v.progress', progress === 100 ? 0 : progress + 1);
                cmp.set('v.progressToggleIcon', progresToggleIcon);
                utilityAPI.setUtilityLabel({ label : 'Utility Bar API Demo (' + progress + '%)' });        
                utilityAPI.setUtilityIcon({ icon : progresToggleIcon == true ? 'thunder' : 'spinner' });
            }), 400);
        }
    }
})