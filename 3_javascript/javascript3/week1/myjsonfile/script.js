const crossfitWorkouts = {
  Murph: {
    description:
      "The Murph workout, named after Lieutenant Michael P. Murphy, is a classic CrossFit Hero WOD. It consists of a 1-mile run, 100 pull-ups, 200 push-ups, 300 air squats, followed by another 1-mile run. The workout is typically performed while wearing a 20-pound weight vest.",
    duration: "Approximately 45-60 minutes",
    intensity: "Advanced",
    equipment: ["Pull-up Bar", "Running Shoes", "Weight Vest"],
    recommendedFor:
      "Advanced CrossFitters, those looking for a challenging workout",
  },
  Fran: {
    description:
      "Fran is one of CrossFit's benchmark workouts, known for its intensity. It includes 21 thrusters, 21 pull-ups, 15 thrusters, 15 pull-ups, and 9 thrusters, 9 pull-ups, all performed for time.",
    duration: "Approximately 5-10 minutes",
    intensity: "High",
    equipment: ["Barbell", "Pull-up Bar"],
    recommendedFor: "Those looking for a quick, high-intensity workout",
  },
  Cindy: {
    description:
      "Cindy is a simple but effective CrossFit workout that includes 5 pull-ups, 10 push-ups, and 15 air squats, performed as many rounds as possible (AMRAP) in 20 minutes.",
    duration: "Up to 20 minutes",
    intensity: "Beginner to Intermediate",
    equipment: ["Pull-up Bar"],
    recommendedFor: "Those looking for a bodyweight workout",
  },
};

const crossfitWorkoutsJSON = JSON.stringify(crossfitWorkouts);
console.log(crossfitWorkoutsJSON);
