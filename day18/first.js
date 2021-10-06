{username:"anuj"
password:"atul"}
	
	

// function signIn(username, password){
// 	if(username === database[0].username&&password === database[0].password){
// 		console.log(newsFeeds);
// 	}else{
// 		alert("Please enter correct username & password!");
// 	}
// }
// signIn(userInput,passwordInput);


var database=[
	{
		username:"anuj",
		password:"atul"
		},
    {
        username:"rishabh",password:"123"
    },
    {
        username:"xyz",password:"12345"
    }
	
];
var newsFeeds=[{username:"anuj", timeline:"lalala"}, {username:"rashmi",timeline:"vihaaha"},{username:"xzy",timeline:"nananan"}];
 
var userInput= prompt("what is your username?");
var passwordInput= prompt("what is your password?");

function signIn(username, password){
    for (var i=0; i<database.length; i++){
    if( database[i].username===username && database[i].password===password){
        console.log(newsFeeds);
    }else{
        alert("Please enter a valid username and password");

    }
}
signIn(userInput, passwordInput);

}
