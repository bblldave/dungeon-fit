const exercises = [
    // id, name, description, xpOnCompletion, completeOptions,
    {
        id: "pushups",
        name: "Push-ups",
        description: "Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up to the starting position. Keep your body in a straight line throughout the movement.",
        difficulty: "Beginner",
        reps: 10,
        xpOnCompletion: 50,
    },
    {
        id: "squats",
        name: "Squats",
        description: "Stand with your feet shoulder-width apart. Lower your body as if you were sitting back into a chair, keeping your weight on your heels. Return to the starting position by pushing through your heels.",
        difficulty: "Intermediate",
        reps: 15,
        xpOnCompletion: 75,

    },
    {
        id: "plank",
        name: "Plank",
        description: "Start in a push-up position, then lower your forearms so they are parallel with the ground. Keep your body in a straight line from head to toe, engaging your core muscles. Hold this position for as long as you can. ",
        difficulty: "Advanced",
        duration: "30 seconds",
        xpOnCompletion: 100,
    },
];

export default exercises;