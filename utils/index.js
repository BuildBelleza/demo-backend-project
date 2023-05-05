function setMainView(view){
   return {
    footer: 'partials/footer',
    header: 'partials/header',
    main: 'partials/main/${view}'
   } ;
};

module.export = { setMainView };


// Path: views\index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Home Page</h1>
//     <div class="container">
//         <%- partials.header %>
//         <%- partials.main %>
//         <%- partials.footer %>
//     </div>
// </body>
// </html>

// Path: views\partials\footer.html

// <footer>
//     <p>Footer</p>
// </footer>

// Path: views\partials\header.html

// <header>
//     <p>Header</p>
// </header>

// Path: views\partials\main\landing.html

// <main>
//     <p>landing</p>
// </main>

// Path: views\partials\main\login.html

// <main>
//     <p>login</p>
// </main>

// Path: views\partials\main\register.html

// <main>
//     <p>register</p>
// </main>

// Path: views\partials\main\user.html

// <main>
//     <p>user</p>
// </main>

// Path: views\partials\main\users.html

// <main>
//     <p>users</p>
// </main>

// Path: views\partials\main\welcome.html

// <main>
//     <p>welcome</p>
// </main>



