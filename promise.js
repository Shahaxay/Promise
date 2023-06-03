var posts=[];
var user={
    name:"user name",
    lastActivity:new Date(2023,3,20)
};
console.log(`Before creating Post${posts.length+1}, user last activity time=`,user.lastActivity);
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivity=new Date();
            resolve();
        },1000);
    })
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        setTimeout(()=>{
            resolve();
        },1000);
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        const deletedItme=posts.pop();
        resolve(deletedItme);
    })
}

function displayPost(){
    console.log(`After creating post${posts.length}>>>`);
    console.log(posts);
    console.log(`user last activity time ${user.lastActivity}`);
}

var promise1=createPost({title:"post1"});
var promise2=updateLastUserActivityTime();

Promise.all([promise1,promise2]).then(()=>{
    displayPost();
    var promise3=createPost({title:"post2"});
    var promise4=updateLastUserActivityTime();
    Promise.all([promise3,promise4]).then(()=>{
        displayPost();
        deletePost().then((post)=>{
            console.log(`After deleting last post:${post.title}`);
            console.log(posts);
        });
    })
})



