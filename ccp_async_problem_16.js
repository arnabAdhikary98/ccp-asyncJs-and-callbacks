let fetchUserData = (callback) => {
    console.log("Fetching user data...");
    setTimeout(callback, 1000);
};

let fetchUserPosts = (callback2) =>{
    console.log("Fetching user posts...");

    setTimeout(callback2, 1500);
}

fetchUserData(() => {
    // This callback will be executed after user data is fetched
    console.log("User data received");

    fetchUserPosts(()=>{
        // This callback will be executed after user posts are fetched
        // and the user data callback has completed.
        console.log("User posts received");
        // Simulating another async operation
        console.log("All data loaded successfully!")
    });
})


