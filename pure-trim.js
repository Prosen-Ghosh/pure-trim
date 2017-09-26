var pureTrim = (function(){
    'use strict';
    const protoStr = Object.prototype.toString;
    
    var isObject = function(value){
        return typeof  value === 'object' && protoStr.call(value) !== '[object Array]';
    }
    var isArray = function(value){
        return protoStr.call(value) === '[object Array]';
    }
    var isString = function(str){
        return typeof str === 'string';
    }
    var s_trim = function(str){
        return str.replace(/^\s+|\s+$/g, "").replace(/\s\s+/g,' ');
    }
    var trim = function(value){
    	value = value || '';

    	if(isArray(value)){
    		return value.map(function(v){
                if(isArray(v))return trim(v);
				else if(isObject(v))return trim(v);
    			else if(isString(v))return s_trim(v);
    			else return v;
    		});
    	}
    	if(isObject(value)){
            for(let key in value){
                if(isObject(value[key]))value[key] = trim(value[key]);
				else if(isArray(value[key]))value[key] = trim(value[key]);
                else if(isString(value[key]))value[key] = s_trim(value[key]);
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
