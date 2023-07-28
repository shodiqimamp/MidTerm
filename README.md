## MidTerm Project (Backend Only)

Description : This project was made to fulfill the Midterm Project Fullstack Engineer Track assignment from the GIGIH 3.0 program

## Table Of Content
* [Database Structure](#database-structure)
* [API Structure](#api-structure)
* [API Request Response List](#api-request-response-list)
* [How To Run](#how-to-run-in-local)

## Database Structure
The architectural database used in this project is `MongoDB`, this project have 3 Collection, videos, comments, and products.

### Videos Collection
```
{
  title: String
  thumbnailUrl: String
  youtubeUrl: String
  productId: String
  comments: String
},
```

### Comments Collection
```
{
  name: String
  comment: String
  createdAt: Date
  videoId: String
}
```
### Products Collection
```
 {
  title: String
  price: Number
  link: String
}
```

## API Structure
The API in this project runs on a local server `http://localhost:3000/api`.

### 1. Product API

```
API                | Controller Function

GET: /product      | `controller.getAllProducts`
POST: /product     | `controller.addProduct`
```
### 2. Video API

```
API                | Controller Function

GET: /videos       | `controller.getAllVideos`
GET: /videos/:id   | `controller.getVideoById`
POST: /videos      | `controller.addVideo`
```
### 3. Comment API

```
API                             | Controller Function

GET: /videos/:videoId/comments  | `controller.getCommentsByVideoId`
POST: /videos/:videoId/comments | `controller.addComment`
```
## API Request Response List

### GET: /product

----
Return all videos from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
          _id,
          title,
          price,
          link,
        }
    ]
  }
  ```

### POST: /product

----
Creates a new Product and returns the new object.

* **URL Params**  
  None
* **Data Params**  
  ```
  title: String
  price: Number
  link: String
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            productId
            title
            price
            link
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
### GET: /videos

----
Return all videos from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            _id,
            title,
            thumbnailUrl,
            youtubeUrl,
            productId,
            comments: [
                commentId,
                commentId,
            ],
        }
    ]
  }
  ```
  
### GET: /videos/:id

----
Return specific video from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
          _id,
          title,
          thumbnailUrl,
          youtubeUrl,
          products: [
            {
                  _id,
                  title,
                  price,
                  link,
            }
          ],
        comments: [
            {
                  _id,
                  name,
                  comment,
                  videoId,
                  createdAt,
            }
          ]
        }
    ]
  }
  ```
  
### POST: /videos

----
Creates a new Video and returns the new object.

* **URL Params**  
  None
* **Data Params**  
  ```
  title: String,
  youtubeUrl: String,
  thumbnailUrl: String,
  productId: [ObjectId],
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            videoId,
            title,
            youtubeUrl,
            thumbnailUrl,
            productId": []
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
### GET: /videos/:videoId/comments
----
Return comment with specified Video Id from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            _id,
            name,
            comment,
            videoId : {
              _id,
              title,
              thumbnailUrl,
              youtubeUrl,
              productId,
              comments,
            },
            createdAt,
        }
    ]
  }
  ```
  
### POST: /videos/:videoId/comments

----
Creates a new Comment and returns the new object.

* **URL Params**  
  None
* **Data Params**  
  ```
  name: String,
  comment: String,
  createdAt:Date,
  videoId: {
    ObjectId,
  },
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            name,
            comment,
            videoId,
            _id,
            createdAt,
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
## How To Run
### 1. Set Up The Project
