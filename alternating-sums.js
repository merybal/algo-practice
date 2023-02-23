function solution(a) {
  team1 = [];
  team2 = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      team1.push(a[i]);
    } else {
      team2.push(a[i]);
    }
  }
  console.log("team1", team1);
  console.log("team2", team2);

  let sumTeam1 = 0;
  let sumTeam2 = 0;

  if (team1.length !== 0) {
    sumTeam1 = team1.reduce((a, b) => {
      return a + b;
    });
  }
  if (team2.length !== 0) {
    sumTeam2 = team2.reduce((a, b) => {
      return a + b;
    });
  }

  console.log(sumTeam1);
  return [sumTeam1, sumTeam2];
}

a = [50, 60, 60, 45, 70];

solution(a);
