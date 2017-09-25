var pureTrim = (function(){
    'use strict';
    function s_trim(str){
        return str.replace(/^\s+|\s+$/g, "").replace(/\s\s+/g,' ');
    }
    function trim(value){
    	value = value || '';

    	if(Object.prototype.toString.call(value) === '[object Array]'){
    		return value.map(function(v){
    			if(typeof v === 'string')return s_trim(v);
    			else return v;
    		});
    	}
    	if(typeof value === 'object'){
            for(let key in value){
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
