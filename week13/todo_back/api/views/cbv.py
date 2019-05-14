from api.models import TaskList
from api.serializers import TaskListSerializerModel
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class taskList(APIView):
    def get(self, request):
        allTask = TaskList.objects.all()
        serializer = TaskListSerializerModel(allTask, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TaskListSerializerModel(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class taskListDetail(APIView):
    def get_object(self, pk):
        try:
            return True, TaskList.objects.get(id=pk)
        except:
            return False, Response({'error':'Not Found'}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        found, theTask = self.get_object(pk)
        if found:
            serializer = TaskListSerializerModel(theTask)
            return Response(serializer.data)
        return theTask

    def put(self, request, pk):
        found, theTask = self.get_object(pk)
        serializer = TaskListSerializerModel(instance=theTask, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self,request, pk):
        found, theTask = self.get_object(pk)
        theTask.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
