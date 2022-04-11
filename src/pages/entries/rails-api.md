---
title: 'Rails API Only Mode'
---

## Troubleshooting notes
Check out the official [Debugging Rails guide](https://guides.rubyonrails.org/debugging_rails_applications.html) for a great place to start learning how to troubleshoot full-stack apps better in general.

Because a number of important concepts you cover here are not easily found elsewhere on the internet, you have spent a lot of troubleshooting. Here are the basics to get you started:
- Using `puts` to get info in the console
- Using `Rails.logger.debug`
- Using `binding.pry` to walk through your code

## How Routing Works
Routers recognize URLs and dispatch them to a controller's (handler’s) action (method). Routes, therefore, need to be mapped to a controller and a controller’s action. The routing process generally looks like this:
1. When the application receives an HTTP request, the application will try to match the request against a route.
1. When a matching route is found, the request is dispatched to the correct controller's action along with any params that were included in the request.

## General Rules to Follow When Creating Routes
- Routes can focus on resources and a resource that is represented by a table should be the plural noun (e.g. products). 
- All routes concerning that resource should have the same root URL path, but control the API by appending additional parameters(right term?) to the URL (e.g. /products, /products/35, /products/create).
- The URL should only contain resources(nouns) not actions or verbs. The API path/addNewEmployee contains the action addNew along with the resource name Employee.
- The resource should always be plural in the API endpoint and if we want to access one instance of the resource, we can always pass the id in the URL.

**Examples**
- method GET path /companies should get the list of all companies
- method GET path /companies/34 should get the detail of company 34
- method DELETE path /companies/34 should delete company 34
- In few other use cases, if we have resources under a resource, e.g Employees of a Company, then few of the sample API endpoints would be:
- GET /companies/3/employees should get the list of all employees from company 3
- GET /companies/3/employees/45 should get the details of employee 45, which belongs to company 3
- DELETE /companies/3/employees/45 should delete employee 45, which belongs to company 3
- POST /companies should create a new company and return the details of the new company created

## Creating a Controller to handle the route
The Controller is responsible for orchestrating the whole process of handling a request in Rails, though it normally hands off any heavy code to the Model. But then, when it's time to send a response back to the user, the Controller handles that.

This involves deciding what should be sent as the response and calling an appropriate method to create that response. Initially, I only had a GET route that had the method (handler) name “index”. So, inside the index method (handler) I wrote some logic to return the contents of my products database table (which was initially empty).

Later, after creating a POST Route with the controller method (handler) name “create”, I added logic to create database entries….

**Source:** https://guides.rubyonrails.org/layouts_and_rendering.html

## Creating a Model to handle the data for the controller
The model contains the logic for the controller. The Model gives us a lot of capabilities because it is mapped (ORM) to a table in our database. 
Rails will map this Ruby class to the products table in our database. We can then use this model to access the database in our application.

Pay close attention to these naming conventions: We created a products controller and a Product model and used a migration to create the corresponding products table.

## Writing the product list page as an Astro component (cb0f624)
- A script tag does not have access to Astro's frontmatter scope.
- Astro's frontmatter scope does not have access to the DOM.
- With the dev server, the page refresh executes a page build and the JavaScript in the frontmatter reruns, but on a deploy, the frontmatter JavaScript does not rerun on page refresh.
- I ran into problems when trying to used ES Modules with scripts that had to access the document object inside the Astro component.

## Dealing with CORS
Cross-origin resource sharing (CORS) is a great security mechanism that every web application developer should know about. Whenever you’ll be exposing some application programming interface to the internet, make sure to implement CORS.
How Does CORS Work?

In short, CORS is an HTTP-header based security mechanism that defines who’s allowed to interact with your API. CORS is built into all modern web browsers, so in this case the “client” is a front-end of the application. 

In the most simple scenario, CORS will block all requests from a different origin than your API. “Origin” in this case is the combination of protocol, domain, and port. If any of these three will be different between the front end and your Rails application, then CORS won’t allow the client to connect to the API. 

So, for example, if your front end is running at https://example.com:443 and your Rails application is running at https://example.com:3000, then CORS will block the connections from the front end to the Rails API. CORS will do so even if they both run on the same server. 

In this post, you’ll learn how to check if CORS is blocking you and how to implement it properly in Rails. 
How Do I Know If CORS Is Blocking Me?

First things first. The fact that CORS is blocking you may not always be obvious. You won’t see “blocked by CORS” on your website. 

Depending on how your front end was built, you may either just miss some data or you may get some general error. However, you’ll see that exact message— “blocked by CORS”—in the web browser developer console. 

So, to find out if that is indeed a CORS issue, open your web browser DevTools and go to Console. There, you should see a message similar to this: 
"Access to XMLHttpRequest at (...) from origin (...) has been blocked by CORS policy"

If you see that, then you’re definitely dealing with the wrong CORS configuration.

[Soure and solutions to Rails CORS issues](https://www.stackhawk.com/blog/rails-cors-guide/)

## Rebuilding Ruby’s Cycle Method in JavaScript
1. Create a basic class, method, and call that method with a parameter
2. Learn about Ruby’s splat operator (*)
3. Learned how the Modulus operator can be used to “wrap around” once when they would normally be a negative number or fraction

### JavaScript implementation
```
   let index = 0
   function cycleClassNames(...classNames) {
     const value = classNames[index]
     index = next_index()
 
     function next_index() {
       return step_index(1)
     }
 
     function step_index(n) {
       return (index + n) % classNames.length
     }
    
     return value
   }
```

## Rewriting the Product List Page as a Vue SFC (Single File Component)

data = products.vue did not work. products.value = data did work… duh.

### NOTE
This did not work:
`<p :class="cycleClassNames(“hello”, “goodbye”)">{{ product.title }}</p>`
 
This did work (used single quotes):
`<p :class="cycleClassNames('hello', 'goodbye')">{{ product.title }}</p>`

## Writing the product create page with Vue
The `<form>` element defines where and how to send the data thanks to the action and method attributes. 

The action attribute defines where the data gets sent. Its value must be a valid relative or absolute URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.

The method attribute defines how data is sent. The HTTP protocol provides several ways to perform a request

The name attribute on a form `<input>` determines the key of the key/value pair that is sent to the server on submit; It is used to reference the form-data after submitting the form or to reference the element in a JavaScript.

> Remember, you can use your dev tools to review the body of your request.

## Rebuilding Ruby’s Truncate Method
A few things to keep in mind:
1. JavaScript String are not Arrays. You can use spread operator or ArrayFrom
2. Javascript if statements have their own block scope.
2. Could have used split() to get a section from an array
2. Could have used join() to create a string from an Array

When using default parameters, you have to remember that you cannot not include an earlier parameter for its default value while trying to define a parameter more to the right. For this reason, you can use an options object so you could more easily select the parameters to include and let the other ones default.

If an empty string will evaluate to false (as may be done in conditional checks) [Source](https://stackoverflow.com/questions/8692982/in-javascript-is-an-empty-string-always-false-as-a-boolean)

## Writing the show page
You have to make sure your database logic will find the right IDs and not depend at all on assumptions of which ID may already exist. FOr example you were on ID#35 but you thought it was ID#1 but it wasn’t because that id! Product had been previously deleted.

The show controller method (resolved by the product resource route) is responsible for finding the product to display based on the (param[:id]) that is passed. You have to use a URL (not query string and the Rails API server will return you JSON. For this reason, you cannot just simply go to the URL (it will be just JSON).

The only way to pass data between different pages or page loads is through local browser storage or a URL query string.

This leaves you with the option of passing a prop though a child component that will fetch the JSON from the API.

## Writing code to reuse the fetch logic

Check out the Vue mastery with Even You that talks about a fetch command and setup function.
Create a Vue model to fetch the data from the Rails API and display that product

Best Practices and lessons learned:
Preference: Write your functions like so: “function useFetch() {}”

Using “throw new” to create a custom exception that flows down to the catch statement in the code block.

Vue reactivity does not allow you to avoid exceptions due to calling variables not yet available (as in a network request). The example was that you could not access the product.title (Ajax request) value until isPending is false and data is available.

Go back to the video and build in the watcher for the ID change. What is the significance of that being done with a watcher compared to the opening and closing of a new modal?

You can pass a function as a parameter by name without the parentheses. You can call that function (and get the returned value) by including the parentheses.

It can be easier to pass the parameter as an anonymous function.

## Understand how database "migrations" work
Using migrations whenever you must change a database, keeps your data clean because you never have to worry about going backwards in time or losing database schema when older code is committed into master. Checkout [this resource](https://edgeguides.rubyonrails.org/active_record_migrations.html) to get starting learning about database migrations

“Migrations enable a developer to generate a database structure using a series of Ruby script files (each of which is an individual migration) to define database operations. The “operations” part of that last sentence is important: migrations are not just for creating tables, but also for dropping tables, altering them, and even adding data to them.” - from Packet book

I defined a model using the model generator: rails generate model Book

“The migration name is important, as it contains sequencing information: the “001” part of the name indicates that running this migration will bring the database schema up to version 1; subsequent migrations will be numbered “002…”, “003…” etc., each specifying the actions required to bring the database schema up to that version from the previous one.” - from packet book

Next I read through the above resource on rails edge guide
Next I modified my migration file to include the data types and schema for the books table
Next I ran db:migrate

Need to learn to drop old migrations and remove tables, models, and tests.
### Database Terms
Table
Column
Row (record occurrence)
Foreign key
Polymorphic join table
#Prepare models to use Active Storage
Installed Active Storage
Declare the ‘has_one_attached’ association

### Other Discoveries
Looked at the logs to see the controllers (in order!) that were handling the request. With those controllers, I was able to see a lot of what was happening with the controller itself and how it was rendering the view (all the view files involved).

Looked at the DB and saw how I could use the Active Storage tables to track the images that were attached to a tutorial step.

Fixing a title  that was an array involved understanding that the block syntax like this, needs to NOT include a comma:
Product.create! do |u|
 u.title = 'Docker for Rails Developers'
end

## Create Database Seed Files
Testing was done with BeeKeeper

Use a block with create!
Using the new syntax requires each record have a unique name
Using the create syntax will not allow for logic in the parentheses
Using the block logic with create (compared to new) which allows the bang expression
Attach a file from IO (File.open())
Save the record
Update the image URL to show the blob url
#Create Controller
Testing was done with Insomnia

Setup and tested index to list all books
Setup and tested show method to list individual book (used private method, set_book for this operation)
Setup and tested create method to create book
Used new to initialize the hash
Updated the hash in place with params
Attached the image to the record
Save the record to update the blob URL
Update the record’s image_url with the new blob url (used the update method bc it is more explicit)

Testing this by defining the domain (localhost:3000) and making a GET request for an image URl that I have previously copied.

## Rails Validation Conventions Generalized
Validations are used to ensure that only valid data is saved into your database. Validation should ensure that errors in the data provided to the server never get committed to the database. We have to validate the state of objects before they go into the database. 

Once validation logic has been created, that logic will typically run in the model (in the MVC architecture) or a middleware on the server. Whether using a model or middleware, it is important that nothing to do with our application comes out of the database or gets stored into the database that doesn’t first go through validation. It doesn’t matter whether the data comes from a form or from some programmatic manipulation in our application.

Great validation is database agnostic, cannot be bypassed by end users, and is convenient to test and maintain.

Other than server side validations I have already talked about, there are several other ways to validate data before it is saved into your database, including native database constraints, client-side validations and controller-level validations. Here's a summary of the pros and cons:
Database constraints and/or stored procedures make the validation mechanisms database-dependent and can make testing and maintenance more difficult. However, if your database is used by other applications, it may be a good idea to use some constraints at the database level. Additionally, database-level validations can safely handle some things (such as uniqueness in heavily-used tables) that can be difficult to implement otherwise.
Client-side validations can be useful, but are generally unreliable if used alone. If they are implemented using JavaScript, they may be bypassed. However, if combined with other techniques, client-side validation can be a convenient way to provide users with immediate feedback as they use your site.
Controller-level validations (in the MVC architecture) can be tempting to use, but often become unwieldy and difficult to test and maintain. Whenever possible, it's a good idea to keep your controllers skinny.
Creating and saving a new record will send an SQL INSERT operation to the database. Updating an existing record will send an SQL UPDATE operation instead. Validations are typically run before these commands are sent to the database. If any validations fail, the record will be marked as invalid and the INSERT or UPDATE operation will not be performed.

A failed validation should have a way of aggregating error messages and delivering those to the client. An errors object can be used when you want to check the error messages for a specific attribute value that has failed validation. The error object can return an array of strings with all error messages for the given attribute, each string with one error message. If there are no errors related to the attribute, it returns an empty array.

## Creating Tests
Frequently, tests need to setup and then tear down some files and directories.

You need a way to mock a database and data for tests; an environment in which you can run a Test.

A test fixture is a specification of the initial contents of a model (or models) under test; we want to ensure that our database table starts off with known data at the start of every unit test.

Remember: the invalid?/valid? Methods run the model validations (there is no need to save())

For your integration tests you needed to view/search the database is pry: https://guides.rubyonrails.org/active_record_querying.html

> By convention, you will want to load all the fixtures into the test database.

## Testing for Email Uniqueness
When testing for email (username) uniqueness it is important to account for variance in letter casing: Strings like `Jon` and `jon` are different strings and would be considered unique. 

There are a few methods of preventing duplicate email addresses and usernames when the casing is different:
1. Enforce casing standards on the client (e.g. as a html form check).
1. Standardize the case of the username programmatically before it is validated and added to the database.
1. Make the validation mechanism case-insensitive (i.e. validation will see `jon` and `jon` as not unique).
1. Enforce uniqueness at the database level (and combine with one of the above methods) by creating an index on the column and then require that the index be unique.

## General Rules for Securing Passwords
- Require each user to have a password (with a password confirmation), and then store a hashed version of the password in the database.
>Vocabulary: *Encryption* is reversible (decrypt), *hashing* is irreversible and impossible to infer the original value.
- The app should contain a pair of virtual attributes (are not stored in the database and do not correspond to columns in the database) that are used to compare a password and password confirmation.
- The app should be able to save a hashed password attribute to the database. The method for authenticating users will be to take a submitted password, hash it, and compare the result to the hashed value stored in the database. If the two match, then the submitted password is correct and the user is authenticated. By comparing hashed values instead of raw passwords, we will be able to authenticate users without storing the passwords themselves.     
- The app should valid that a new user has included both a password and a confirmation password.
- The app should be able to validate some password strength minimum requirements.
- The app needs some logic to authenticate user’s credentials to sign users in.
