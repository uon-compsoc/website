# website
The repository for the UoN Computing Society Website
#Explanation of the file structure
- /src is where the bulk of the code and resources goes, e.g. angularjs templates, css/html/image/etc files, all of it
-- /src/public houses all the static files served direct to the client, i.e. css/image/etc - they will be served as if from the root directory (note)
-- /src/views/ will hold angularjs templates and components (associated .html files)
-- /src/controllers/ will hold client-run angularjs controllers and server sides nodejs scripts
--- /src/controllers/client/ will hold the angularjs controllers that will be served publicly to the client.
--- /src/controllers/server/ will hold the server-side-executed js scripts and files (e.g. the main.js) 
-- /src/data/ will hold other data, e.g. possibly the text content to get mixed into the html via angular, some of which may be moved into nosql/mongodb storage/formats - to be decided. 
- The static_theming folder is temporary - for now being used to design a theme for the site using static sample pages - these will later be used to create templates for the layout etc

#Explaination of src folder mapping from the browser perspective when the server is running
- /src/public -> /
- /src/data -> not downloadable
- /src/views -> not downloadable
- /src/controllers/client -> /scripts