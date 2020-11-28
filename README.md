## :pencil: Instalação da aplicação 
- BackEnd
``` bash
$ django-admin startproject backend . 
$ pip install djangorestframework
$ python manage.py migrate
$ python manage.py createsuperuser
$ python manage.py startapp core
$ python manage.py makemigrations
$ pip install django-cors-headers
```
- Front End 
``` bash
$ npm i
$ npm start
```

## 💻 API Endpoints


- **endpoint:** api-token-auth/
- **method:** POST 
```json
{
"username":"Carla",
"password":"Carla123456"
}
```
- **endpoint:** list/
- **method:** POST 
```json
{
"owner":"http://localhost:8000/users/3/",
"name": "Nova lista",
"item_set": []
}
```
