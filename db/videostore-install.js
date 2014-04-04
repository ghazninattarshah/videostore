use videostore1;
db.addUser( { user: "vs", pwd: "vspazz", roles: ['readWrite'] } );
db.createCollection('videos');
