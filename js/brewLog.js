$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("zk8dGwf6u2yPjbYbAD0NpFp6ynVENCXq4ArpVSFg", "QbWsLsjwMsKnL9AdWWfX8FPH0onYylaQSgw5BKGd");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});