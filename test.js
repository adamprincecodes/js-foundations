/*
2. Smart Home Energy Consumption Optimizer

A smart home system analyzes appliance usage.

Function Requirements:
- Takes an array of appliances: { name, powerRating (watts), hoursUsedPerDay }
- Uses loops to:
    - Calculate daily energy consumption per appliance: energy = (powerRating * hours) / 1000 (kWh)
    - Calculate total household consumption
- Rules:
    - If total consumption > 30 kWh:
        - Suggest appliances consuming more than 20% of total for reduction
- Returns:
    - Total consumption
    - List of high-consumption appliances
    - Optimization suggestions
*/
let appliances = [
  { name: "Refrigerator", powerRating: 30000, hoursUsedPerDay: 24 },
  { name: "Washing Machine", powerRating: 2000, hoursUsedPerDay: 3 },
  { name: "Microwave", powerRating: 1000, hoursUsedPerDay: 6 },
];
let totalEnergyConsumption = 0;
let highConsumptionAppliances = [];
appliances.forEach((appliance) => {
  const energyConsumption =
    (appliance.powerRating * appliance.hoursUsedPerDay) / 1000;
  totalEnergyConsumption += energyConsumption;
});
if (totalEnergyConsumption > 30) {
  appliances.forEach((appliance) => {
    const energyConsumption =
      (appliance.powerRating * appliance.hoursUsedPerDay) / 1000;
    if (energyConsumption > totalEnergyConsumption * 0.2) {
      highConsumptionAppliances.push(appliance.name);
    }
  });
}
console.log("Total Energy Consumption: " + totalEnergyConsumption + " kWh");
console.log(
  "High Consumption Appliances: " + highConsumptionAppliances.join(", "),
);
