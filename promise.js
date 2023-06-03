var posts=[];
var user={
    name:"user name",
    lastActivity:new Date()
};
console.log(`Before creating Post${posts.length+1}, user last activity time=`,user.lastActivity);
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        user.lastActivity=new Date();
        resolve();
    })
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        setTimeout(()=>{
            updateLastUserActivityTime().then(resolve);
        },1000);
    })
}

var promise1=createPost({title:"post1"});
var promise2=createPost({title:"post1"});

Promise.all([promise1,promise2]).then(()=>{
    console.log(`After creating post${posts.length}>>>`);
    console.log(posts);
    console.log(`user last activity time ${user.lastActivity}`);
})


