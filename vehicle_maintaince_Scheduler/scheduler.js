const SERVER_URL = process.env.SERVER_URL;
const TOKEN =  process.env.ACCESS_TOKEN;

function maxImpact(maxHours, vehicles){
const numvehicle = vehicles.length;

const dp = Array(numvehicle + 1).fill(0).map(() => Array(maxHours +1).fill(0));
    for(letIndex = 1; itemIndex <= numVehicles; itemIndex++){
        const vehicles = vehicles[itemIndex -1];
        const duration  = vehicles.Duration;

        const impact = vehicles.impact;
for (let currentHours = 0; currentHours <= maxHours; currentHours++) {
            if (duration <= currentHours){
            dp[itemIndex][currentHours] = Math.max(
                dp[itemIndex -1][currentHours],
                dp[itemIndex -1 ][currentHours - duration] + impact
);

}else{dp[itemIndex][currentHours] = dp[itemIndex -1 ][currentHours];
}
}
}
let maxCalculatedImpact = dp[numVehicles][maxHours];
    let remainingImpact = maxCalculatedImpact;
    let remainingHours = maxHours;
    const selectedTaskIDs = [];
for(let i = numvehicle; i > 0 && remainingImpact >0 ; i--){
if (remainingImpact !== dp[i - 1][remainingHours]){
const vehicle = vehicle[i-1];
selectedTaskIDs.push(vehicle.TaskID);
 remainingImpact -= vehicle.Impact;
     remainingHours -= vehicle.Duration;

}
}
return {
maxImpact:maxCalculatedImpact,
selectedTaskIDs: selectedTaskIDs

};
}


