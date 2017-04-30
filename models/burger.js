

var orm = require('./../config/orm.js');



var burger = {
	all: function(cb){
		orm.selectAll('burger', function(res){
			cb(res);
		})
	},

	create: function(cols, burgerName, cb){
		orm.insertOne('burger', cols, burgerName, function(res){
			cb(res);
		})
	},

	update: function(objColVals, condition, cb){
		orm.updateOne('burger', objColVals, condition, function(res){
			cb(res);
		})
	}
}



module.exports = burger;