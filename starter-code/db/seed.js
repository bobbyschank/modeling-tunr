var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};

var managerCreate = function() {
	return DB.Manager.create({ 
	  	name: "Ricky Bobby",
	  	email: "rbobby@gmail.com",
	  	office_number: "516-877-0304",
	  	cell_phone_number: "718-989-1231",
	  });
	};

artistCreate()
.then(function() {
	managerCreate()
	 .then(function() {
	 	process.exit();
	 });
	
});