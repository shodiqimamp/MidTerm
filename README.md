## MidTerm Project (Backend Only)

Description : This project was made to fulfill the Midterm Project Fullstack Engineer Track assignment from the GIGIH 3.0 program

## Database Structure
The architectural database used in this project is MongoDB, this project have 3 Collection, videos, comments, and products.

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




