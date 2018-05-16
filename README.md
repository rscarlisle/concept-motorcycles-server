### users 
- id | integer 
- email | string
- username | string
- password | string 
- profile_id | integer 

### profiles 
- id | integer
- name | string
- summary | string
- image_url | string

### motorcycles 
- id | integer
- name | string
- make | string
- model | string
- color| string
- price | string
- image_url | string
- detail | string
- profile_id 


### comments 
- id | integer 
- profile_id | integer (Foreign Key)
- motorcycle_id | integer (Foreign Key) 
- body 

### bookmarks 
- id 
- title 

### bookmarks_motorcycles 
- bookmark_id 
- motorcycle_id 
- motorcycle_id | integer (Foreign Key)

### many-to-many(ideas)
one user can bookmark many motorcycles; one motorcycle can have many bookmarks "bookmark" or "save" or "favorite"

# setting up authentication 

- For sign up  
- expose a post route for users, users/ 
- take in name, email, username, password, summary, image_url  
- create a profile with name, summary and image_url 
- create a user with username, email, password and profile_id 

- before creating the db entry, hash the password and then enter it to the database 
- upon success display "Account created, please sign in" 