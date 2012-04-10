;(function(exports){
	var clock = exports.clock = {
		adjust: function(ms) {return ms},
		_now: new Date(),
		_s: undefined,
		_m: undefined,
		_d: undefined,
		/*
		hooks for changes to clock
		*/
		onSecond: function() {},
		onMinute: function() {},
		onDate: function() {},
		msAdjustment: 0,
		update: function() {
			var now = this._now;
			now.setTime( this.adjust( Date.now() ) + this.msAdjustment );
			if (now.getSeconds()==this._s) {
				return;
			} else {
				this.onSecond();
				this._s=now.getSeconds();
			}
			if (now.getMinutes()==this._m) {
				return;
			} else {
				this.onMinute();
				this._m=now.getMinutes();
			}
			if (now.getDate()==this._d) {
				return;
			} else {
				this.onDate();
				this._d=now.getDate();
			}
		},
	};

	clock.__defineGetter__("now", function() {
		return this._now;
		}
	)

	clock.tick = (function() {
			this.update();
			setTimeout(this.tick,1000)
		}).bind(clock);

}(this));

//start the updater object
;( //in its own closure
    function updateServerTimeAdjustment() {
        //sets a global object to use when displaying client time
        jQuery.ajax({
            type: "POST",    
            url:  "http://chrisdamato.com/mo/server-time.php",
            dataType: 'json',
            data: {
                //include the client time in our request to the server
                data: {msRequest : (new Date()).getTime()} 
                },
            success: function( data ) {
                //record the client time when the response was received from the server
                data.msResponse = (new Date()).getTime();
                data.msRequest = parseFloat(data.msRequest );
                data.msDelta = data.msResponse - data.msRequest;
                data.msAvgClient = data.msRequest  + data.msDelta/2;
                data.msAdjustClientTime = data.serverTime - data.msAvgClient;
                window.clock.msAdjustment = data.msAdjustClientTime ;
                $(".live-adjustment").text((data.msAdjustClientTime>0?"+":"")+(data.msAdjustClientTime|0)/1000 + " s");
            },
                // console.log("ajax server time data",data);
            complete: function(obj, text) {
                // console.log("scheduled time update: "+text,obj);
                setTimeout(updateServerTimeAdjustment, 30000)
            }
        });
    } ()
);