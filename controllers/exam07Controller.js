angular.module("app")
    .controller("exam07Controller", function($scope){
        $scope.todos = [
            {action:"동영상 녹화(office)", complete:false},
            {action:"AngularJS 복습(home)", complete:false},
            {action:"알마인드(home)", complete:false},
        ];

        $scope.addNewItem1=(newTodo)=>{
            if(newTodo && newTodo.action && newTodo.location){
                $scope.todos.push({
                    action: newTodo.action + "(" + newTodo.location + ")",
                    complete:false
                });
                newTodo.action="";
                newTodo.location="";
            }else{
                alert("올바르게 입력되지 않았음")
            }
        }

        
        $scope.addNewItem2=()=>{
            //mg-model로 사용하면 자동으로 생성 newTodo는 $scope에 자동으로 생김
            if($scope.newTodo && $scope.newTodo.action && $scope.newTodo.location){
                $scope.todos.push({
                    action: $scope.newTodo.action + "(" + $scope.newTodo.location + ")",
                    complete:false
                });
                $scope.newTodo.action="";
                $scope.newTodo.location="";
            }else{
                alert("올바르게 입력되지 않았음")
            }
        }
    })