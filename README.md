# crudApp

A simple express application that:

1. Connects to a Database

2. Creates a payload through the body of a POST request on  [POSTMAN](https://web.postman.com/)

*The post request body must contain only the key value pairs of **name**,**country** and **email** in json format*

>

    ex: {
        "name": "John Doe",
        "email": "johnnydoey@net.com",
        "country": "England"
    } 

3. Get's the data created

4. Updates the data created

5.  Deletes the data created

## API Reference

#### To CREATE the payload
###### Enter the data object in the body of the post request on  [POSTMAN](https://web.postman.com/) and send

```http
  POST https://crudapp2021.herokuapp.com/cruddatas
```



#### To READ the data created

##### Send

```http
 GET https://crudapp2021.herokuapp.com/cruddatas
```


#### To UPDATE the data created

##### Send

```http
 PUT https://crudapp2021.herokuapp.com/cruddatas
```


#### To DELETE the data created

##### Send

```http
 PUT https://crudapp2021.herokuapp.com/cruddatas
```



  
## Hosting
This app is currently hosted on Heroku @ https://crudapp2021.herokuapp.com/

Github @ https://github.com/greybeing/crudApp



  