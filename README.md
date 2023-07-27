# MidTerm Project (Backend Only)

### Description : This project was made to fulfill the Midterm Project Fullstack Engineer Track assignment from the GIGIH 3.0 program

## Table of Contents

## Database Structure

This Project Have 3 Collection, videos, comments, and products.

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
The API in this project runs on a local server, namely on the `http://localhost:3000/api` server.

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
## API List





