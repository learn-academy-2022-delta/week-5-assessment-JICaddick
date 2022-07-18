# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A ruby hash is a means of storing data. It's similar to an array but it can take KV pairs as opposed to just individual elements. hashes are useful for storing and referencing data. 

Researched answer: The order of returned keys in Ruby hashes is arbitrary will generally be disordered. The default value of a Ruby hash is nill and thats what it will return if you try to access a key that doesn't exist. 
________________________

2. What is a gem?

Your answer: A gem is a package of data we can install and use on our rails apps.It facilitates the sharing and installing of Ruby libraries. 

Researched answer: There are more than 133,000 Ruby gems which have been downloaded more than 14,000,000,000 times. Just as NPM is a package manager for JavaScript, RubyGems is a package manager for Ruby. The interface for RubyGems is called GEM and runs on the command line. RubyGems was created by Chad Fowler and 4 other computer scientists at RubyConf 2004 - CodeNewbie has a great podcast featuring Chad that's worth a listen. Each gem consists of 3 parts: code, documentation, and gem specification (Gemspec). Gems run their own code in applications which generates security concerns that nefarious ne'er-do-wells may be able to compromise a users server or system. 
________________________


3. What is Ruby on Rails?

Your answer: Rails is a framework written on the Ruby language. It contains a full stack which means we can write entire apps uing the rails framework. It comes with a database and a testing language but we can also customize it to use whichever we want. 

Researched answer: RoR or 'Rails' for short is on open-source framework for Ruby. Any changes made to rails apps are applied immediately and this ties into the 'ease-of-use/ developer happiness' philisophy. Rails is made up of 5 parts:
- Active Record - the ORM layer.
- Action pack - This is rails' API which manager controller and view functions. It's a framework that handles and processes web requests. 
- Action mailer - which handles email. Action mailer provides hooks into to Mail observer and interceptor methods. 
- Action web services - which provides a way to publish interoperable web service APIs easily. 
- Prototype - which implements drag and drop functionality.
________________________


4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a means of inputting new data into the database used on our apps through the terminal. It helps us to compare and understand different data structures. There are also non-relational databases which handle documents. 

Researched answer: A non-relational databse like MongoDB would be better suited to data that, for example, tracked shipping lanes, the course of a rugby ball for sports analysis, or a video ref for football matches. Non-relational DBs provide support for JSON-like storage.
________________________


5. What are primary keys? Why are they important?

Your answer: A primary key or 'PK' for short is a unique identifier used on objects in databases as a point of reference. For example, we're working with a large banking corporation and have millions of customers whose data we need to store.. Inevitably there will be people with the same name so we have to assign their entries aunique code (the PK) to differentiate and reference our data. 

Researched answer: A primary column can be either 1 single column or a set of columns however each table can only have one SQL primary key.
________________________


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
There are 7 RESTful route patterns. Their names are: index, new, create, show edit, update, and destroy. Routing is the mechanism that sends requests to the be handled. REST stands for Representational State Transfer and is used to map HTTP verbs and CRUD actions. 

2. JSON:
JSON stands for JavaScript Object Notation. JSON can be used to store JavaScript objects or it can be used to send data between computers. While JSON is derived from JavaScript it is an independent language and JSON generating code appears in many languages. A common JSON file we see is package.Package JSON is a file that exists at the route of JavaScript and Node projects. It's used to give NPM (a JavaScript package manager) the information/ metadata it needs to identif the project and handle its dependencies.  

3. ERB: Googling ERB, the first hit is 'Epic Rap Battles'. The urban dictionary suggested that erb is street slang for cannabis but since I'm not really a sucker for that highgrade I'll assume the correct ERB to be (Embedded RuBy) which is a feature allowing us to generate Ruby text from templates. It's part of the standard Ruby library and doesn't require any other software to run it. Note, the ERB only processes templates whenthe result is called. 

4. Params:
Params is a keyword used in various languages. In Node JS the params property is an object containing properties mapped to the 'parameters' main route. Route parameters and URL segments with names that're used to pinpoint values at their specific position in the URL. Take the following example: 
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

In the above URL the param values (34, 8989) are represented along with their keys (users, books)

5. API: API stands for Application Programming Interface. Our first expose to the API was the document object model, which is a kind of API. The 4 types of API are: public, private, partner, and composite. API's are used to bring applications together to perform their functions built around sharing data and executing processes. 
