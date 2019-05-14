from api.models import TaskList
from api.serializers import TaskListSerializerModel
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET','POST'])
def task_lists(request):
    if request.method == 'GET':
        allTask = TaskList.objects.all()
        serializer  = TaskListSerializerModel(allTask, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method =='POST':
        serializer = TaskListSerializerModel(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'DELETE', 'PUT'])
def task_ls_detail(request, pk):
    try:
        theTask = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist:
        return Response(status= status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TaskListSerializerModel(theTask)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TaskListSerializerModel(instance=theTask, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        theTask.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
