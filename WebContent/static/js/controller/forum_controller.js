'use strict';
 
angular.module('myApp').controller('ForumController', ['$scope', 'ForumController', function($scope, ForumService) {
    var self = this;
    self.forum={id:null,title:'',description:'',category:''};
    self.forums=[];
 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
 
    fetchAllForums();
 
    function fetchAllForums(){
        UserService.fetchAllForums()
            .then(
            function(d) {
                self.forums = d;
            },
            function(errResponse){
                console.error('Error while fetching Forums');
            }
        );
    }
 
    function createForum(forum){
        UserService.createForum(forum)
            .then(
            		fetchAllForums,
            function(errResponse){
                console.error('Error while creating Forum');
            }
        );
    }
 
    function updateForum(forum, id){
        UserService.updateForum(forum, id)
            .then(
            		fetchAllForums,
            function(errResponse){
                console.error('Error while updating Forum');
            }
        );
    }
 
    function deleteForum(id){
        UserService.deleteForum(id)
            .then(
            		fetchAllForums,
            function(errResponse){
                console.error('Error while deleting Forum');
            }
        );
    }
 
    function submit() {
        if(self.forum.id===null){
            console.log('Saving New Forum', self.forum);
            createBlog(self.forum);
        }else{
        	updateBlog(self.forum, self.forum.id);
            console.log('Forum updated with id ', self.forum.id);
        }
        reset();
    }
 
    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.forums.length; i++){
            if(self.forums[i].id === id) {
                self.forum = angular.copy(self.forums[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.forum.id === id) {//clean form if the forum to be deleted is shown there.
            reset();
        }
        deleteBlog(id);
    }
 
 
    function reset(){
        self.forum={id:null,title:'',description:'',category:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);