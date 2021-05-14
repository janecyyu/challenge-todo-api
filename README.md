# challenge-todo-api

### heroku url: https://jane-todo-list-api.herokuapp.com/

### get all todos

[GET] `/`

### Add a todo

[POST] `/`

```json
{
  "title": "Reading React",
  "description": "Chapter 5"
}
```

### Edit a todo

[PUT] `/:id`

```json
{
  "title": "Reading React",
  "description": "Chapter 10 & Chapter 11"
}
```

### Delete a todo

[DELETE] `/:id`

