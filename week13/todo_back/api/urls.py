from django.urls import path
from api import views


#urlpatterns = [
#    path('api/task_lists', views.task_lists),
#    path('api/task_lists/<int:pk>/', views.task_ls_detail),
#    #path('api/task_lists/<int:pk>/tasks', views.task)
#]

urlpatterns = [
   path('api/task_lists', views.taskList.as_view()),
   path('api/task_lists/<int:pk>/', views.taskListDetail.as_view()),
   path('api/task_lists/<int:pk>/tasks', views.task)
]