function MainAssistant(argFromPusher) {
	this.owc_changed  = this.set_owc.bindAsEventListener(this);
}

MainAssistant.prototype = {
	set_owc: function(payload) {
		if (payload.returnValue) {
			this.owc_toggle_model.value = payload.onWhenConnected;
			this.controller.modelChanged(this.owc_toggle_model);
		}
	},
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	activate: function() {
		var req = new Mojo.Service.Request('palm://com.palm.display/control', {
			method : 'getProperty',
			parameters : {
				'properties' : ['onWhenConnected']
			},
			onComplete : this.owc_changed,
			onFailure : false
		});
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	owc_toggleChange: function(inSender, event) {
		var req = new Mojo.Service.Request('palm://com.palm.display/control', {
			method : 'setProperty',
			parameters : {
				'onWhenConnected' : event.value
			},
			onComplete : false,
			onFailure : false
		});
	}
};