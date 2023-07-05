from django.urls import path
from . import views
from blog.views import save_file

urlpatterns = [
    # path('', views.home, name='home'),
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('blog/', views.blog, name='blog'),
    path('add_post/', views.add_post, name='add_post'),
    path('edit_post/<int:post_id>/', views.edit_post, name='edit_post'),
    path('delete_post/<int:post_id>/', views.delete_post, name='delete_post'),
    path('save-file/', save_file, name='save_file'),
    path('export-to-word/', views.export_to_word, name='export_to_word'),
    path('export-to-excel/', views.export_to_excel, name='export_to_excel'),
]
