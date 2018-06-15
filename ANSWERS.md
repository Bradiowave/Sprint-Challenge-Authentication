<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT. -- Middleware accesses and manipulates our data so that we can work with it easily in our project. Sessions are a form of authentication where a user has a set time on the server after logging in. Bcrypt is used to hash passwords for security purposes. We can also use it to compare hashed passwords for authentication. JWT stands for java web tokens, another form of authenication similar to sessions, except the user holds the token in local storage and shares it with the server everytime it wants to access restricted content.

2.  What does bcrypt do in order to prevent attacks? -- Bcrypt hashes passwords, which is a one-way process of making the password much more secure. This prevents attacks because the hashed password is useless unless the hash function is known.

3.  What are the three parts of the JSON Web Token? -- 1. The header (holds the algorithm and token types) 2. The payload (all of the user's data) 3. Verify signature (decripts the encoded token with the secret to verify user)