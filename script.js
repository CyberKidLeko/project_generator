//3 part random data
const projectTypes = [
    "webApp",
    "game",
    "tool",
    "dashboard",
    "CLI app",
    "portfolio builder",
    "Interactive game",
    "Quiz app"
];

const futureIdeas = [
    "user authentication",
    "dark mode toggle",  
    "drag and drop",
    " animated transition", 
    "API integration", 
    "File upload function", 
    "Push notification"
];

const targetAudiences = [
    "student", 
    "businesses", 
    "developers", 
    "freelancers", 
    "Enthusiasts",
    "Startups",
    "Non-profits",
    "Teachers"
];

//helps us find the index of items
const getRandItem = (array) => {
    return array[Math.floor(Math.random()* array.length)];
}

//
const generateProjectPrompt = () => {
    const projectType = getRandItem(projectTypes);
    const futureIdea = getRandItem(futureIdeas);
    const targetAudience =getRandItem(targetAudiences);

    //final return statement on console
    return `Build a ${projectType} project for ${targetAudience} that facilitates ${futureIdea}.`;

}

console.log(generateProjectPrompt());