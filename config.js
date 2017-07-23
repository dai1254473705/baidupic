var url = {};
var _ = require('lodash');

var NODE_ENV =  (function () {

    if(process&&process.env&&process.env.NODE_ENV){
        return process.env.NODE_ENV;
    }

    return 'build';
})();

//var winston = require('winston');
//winston.debug('NODE_ENV='+NODE_ENV);

var SERVER = (function () {
    if (NODE_ENV === 'build') {
//  	return  'http://192.168.86.181:8080/web/v1/';
//  	return  'http://192.168.86.78:8080/web/v1/';
//		return  'http://192.168.86.49:8080/web/v1/'
        return  'http://192.168.85.74:8080/web/v1/';
    }

    if (NODE_ENV === 'test') {
        return  'http://192.168.86.78:8080/';
    }

    if ( NODE_ENV === 'dist'|| NODE_ENV === 'production' ) {
        return 'http://api.phdt.com/web/v1';
    }

    return  '';
})();

_.extend(url,{
    base: function(){
        return SERVER;
    }
});

module.exports = {
    NODE_ENV:NODE_ENV,
    timeout:10000,
    url: url
};
