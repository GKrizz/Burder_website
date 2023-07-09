# Burder_website

            <a href="{% url 'about' %}">about</a>
            <a href="{% url 'contact' %}">contact</a>
            <a href="{% url 'blogs' %}">customize</a>


            <!-- template_name.html -->


<!DOCTYPE html>
{% load static %}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Burger</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="{% static 'css/style2.css' %}" type="text/css">
    <link rel="stylesheet" href="{% static 'css/style1.css' %}" type="text/css">

    <style>
         /* CSS code here */
         body {
            background: url("{% static 'images/background1.jpg' %}");
            background-attachment: fixed;
            background-position: center;
            overflow-x: hidden;
            background-size: cover;
            margin-top: 7rem;
        }
        /* CSS for blog cards */
        .blog-card {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 20px;
        }

        .blog-card h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .blog-card p {
            margin-bottom: 10px;
        }

        .blog-card .author {
            font-style: italic;
        }
        /* CSS for edit and delete buttons */
        .edit-button,
        .delete-button,
        .add-button {
            display: inline-block;
            padding: 8px 12px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
        }

        .edit-button:hover,
        .delete-button:hover,
        .add-button {
            background-color: red;
        }
        .export-button {
        display: inline-block;
        padding: 8px 12px;
        background-color: #4ca5af;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
    }

    .export-button:hover {
        background-color: #186dbc;
    }

    </style>
    
</head>
<body>
    <!-- header section starts -->
     <header class="header">
        <div id="menu-btn" class="fas fa-bars icons"></div>
        <div id="search-btn" class="fas fa-search icons" ></div>

        <nav class="navbar">
            <a href="{% url 'home' %}">home</a>
            <a href="{% url 'menu' %}">menu</a>
            <a href="{% url 'customize' %}">customize</a>
            <span class="space"></span>
            <a href="{% url 'about' %}">about</a>
            <a href="{% url 'contact' %}">contact</a>
            <a href="{% url 'blogs' %}">blogs</a>
        </nav>

        <a href="#" class="fas fa-shopping-cart icons"></a>
        <a href="#home" class="logo"><img src="{% static 'images/burger5.jpeg' %}" alt="" width="70px" height="60px"></a>
        
        <form action="" class="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box">
            <label for="search-box" class="fas fa-search icons"></label>
        </form>
     </header>
    <!-- header section end -->
    

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src="{% static 'js/script.js' %}"></script>
    <script src="{% static 'js/script1.js' %}"></script>

</body>
</html>
