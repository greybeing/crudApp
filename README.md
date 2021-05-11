
# crudApp

A simple express application that:

1. Connects to a Database (MongoDB Atlas)

2. Creates a payload through the body of a POST request on  [POSTMAN](https://web.postman.com/) and saves the result in the database

*The post request body will be profile data which must contain only the key value pairs of name,country and email in **json** format*

>

    ex: {
        "name": "John Doe",
        "email": "johnnydoey@net.com",
        "country": "England"
    } 

3. Get's the profile data 

4. Updates the profile data 

5.  Deletes the profile data 

## ROUTES

#### To CREATE the payload and save to a database collection named **cruddatas**
###### Enter a profile data object in the body of the http request on  [POSTMAN](https://web.postman.com/) and send

```http
  POST https://crudapp2021.herokuapp.com/cruddatas
```



#### To READ all profiles 

##### Send

```http
 GET https://crudapp2021.herokuapp.com/cruddatas
```



#### To READ a profile 

##### Send

```http
 GET https://crudapp2021.herokuapp.com/cruddatas/_id
```



#### To UPDATE a profile 

##### Enter the new profile data in the body of a PUT request on  [POSTMAN](https://web.postman.com/) and send

```http
 PUT https://crudapp2021.herokuapp.com/cruddatas/_id
```

#### To DELETE a profile

##### Send

```http
 DELETE https://crudapp2021.herokuapp.com/cruddatas/_id
```


## Hosting
This app is currently hosted on Heroku @ https://crudapp2021.herokuapp.com/

Github @ https://github.com/greybeing/crudApp


## Author

- [@grey_being](https://www.greybeing.com/)

  
