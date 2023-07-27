# Burder_website

Burder website using Django | Gobala Krishnan .

# Links
<b>Live Link:</b> <a href="#" target="_blank">Live Link.</a>

# More Info
<b>Author:</b> Gobala Krishnan.
<b>Designer & Developer:</b> <a href="https://gkrizz.github.io/1-Portfolio/" target="_blank">Gobala Krishnan</a>

1) create folder
2) python -m venv myenv
3) myenv\Scripts\activate
4) pip install django
5) pip install psycopg2
6) django-admin --version
7) django-admin startproject proj_name .

--> go to setting in proj 
	-- create database in pgadmin and change it in settings.py

8)  python manage.py makemigrations
9)  python manage.py migrate

    --> database/schema/table  will be changed

10) python manage.py createsuperuser 
11) python manage.py runserver
12) python manage.py startapp news_app 

// models & admin

    --> define app in setting.py 
    --> change in models,admin

13) python manage.py makemigrations
14) python manage.py migrate
15) run server

    -->then enter and work in oru site 



16) create( templates/__.html ) in app 

// View

17) write logic in views 


18) create urls.py in myapp

    -->inclued that (url.py) in __project urls__
19)create index.html file in temps

20)create static folder in our project folder

	---> paste dict and plugins file 

21)change it in sittings 

22) put {% load static %} and put static in links
