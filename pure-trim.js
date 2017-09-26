var pureTrim = (function(){
    'use strict';
	const protoStr = Object.prototype.toString;
    function s_trim(str){
        return str.replace(/^\s+|\s+$/g, "").replace(/\s\s+/g,' ');
    }
    function trim(value){
    	value = value || '';

    	if(protoStr.call(value) === '[object Array]'){
    		return value.map(function(v){
                if(protoStr.call(v) === '[object Array]')return trim(v);
				if(typeof  v === 'object' && protoStr.call(v) !== '[object Array]')return trim(v);
    			if(typeof v === 'string')return s_trim(v);
    			else return v;
    		});
    	}
    	if(typeof value === 'object' && protoStr.call(value) !== '[object Array]'){
            for(let key in value){
                if(typeof  value[key] === 'object' && protoStr.call(value[key]) !== '[object Array]')value[key] = trim(value[key]);
				if(protoStr.call(value[key]) === '[object Array]')value[key] = trim(value[key]);
                if(typeof value[key] === 'string')value[key] = s_trim(value[key]);
            }
            return value;
    	}
		return s_trim(value);
    }
    return trim;
})();
if (typeof module === 'object' && module.exports) {
    module.exports = pureTrim;
}
