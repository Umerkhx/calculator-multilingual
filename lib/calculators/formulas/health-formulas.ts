export const healthFormulas = {
bodyfat: (inputs: Record<string, number | string>) => {
  const waist = Number(inputs.waist)
  const neck = Number(inputs.neck)
  const height = Number(inputs.height)
  const hip = Number(inputs.hip)
  const gender = inputs.gender as string
  const unit = inputs.unit || "cm" 

  const toInches = (val: number) => (unit === "cm" ? val / 2.54 : val)

  const waistIn = toInches(waist)
  const neckIn = toInches(neck)
  const heightIn = toInches(height)
  const hipIn = toInches(hip)

  let bodyFat: number

  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistIn - neckIn) + 0.15456 * Math.log10(heightIn)) - 450
  } else {
    bodyFat =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistIn + hipIn - neckIn) +
          0.22100 * Math.log10(heightIn)) -
      450
  }

  return bodyFat.toFixed(1)
},

bmi: (inputs: Record<string, string | number>) => {
  const weight = Number(inputs.weight)
  const height = Number(inputs.height)
  const weightUnit = inputs.weightUnit        
  const heightUnit = inputs.heightUnit        
  const gender = inputs.gender                
  
  let weightKg = weightUnit === "lb" ? weight * 0.45359237 : weight
  let heightM: number = 0

  if (heightUnit === "cm") heightM = height / 100
  else if (heightUnit === "inch") heightM = height * 0.0254
 

  if (heightM <= 0) {
    throw new Error("Invalid height value")
  }

  return (weightKg / (heightM * heightM)).toFixed(1)
},
  
calories: (inputs: Record<string, number | string>) => {
  const age = Number(inputs.age)
  let weight = Number(inputs.weight)
  let height = Number(inputs.height)
  const gender = inputs.gender as string
  const activity = Number(inputs.activity)
  const weightUnit = inputs.weightUnit as string
  const heightUnit = inputs.heightUnit as string

  // Convert weight (pounds → kg)
  if (weightUnit === "pounds") {
    weight = weight * 0.453592
  }

  // Convert height (inches → cm)
  if (heightUnit === "inch") {
    height = height * 2.54
  }

  // BMR calculation
  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  // Total daily calories
  return Math.round(bmr * activity)
},

water: (inputs: Record<string, number | string>) => {
  const weight = Number(inputs.weight) || 0
  const age = Number(inputs.age) || 0
  const gender = (inputs.gender || "").toString().toLowerCase()
  const activity = Number(inputs.activity) || 0

  // Base intake per kg (ml)
  let baseIntakePerKg = 35 // default for adults
  if (age > 0 && age < 14) baseIntakePerKg = 40 // children need more
  if (age > 55) baseIntakePerKg = 30 // older adults need less

  // Convert base intake to liters
  let dailyIntake = (weight * baseIntakePerKg) / 1000

  // Adjust for gender
  if (gender === "male") dailyIntake += 0.5
  else if (gender === "female") dailyIntake += 0.3

  // Adjust for activity (0–2)
  if (activity >= 0) dailyIntake += activity * 0.4

  // Prevent NaN output
  if (isNaN(dailyIntake) || dailyIntake <= 0) return "0.0"

  return dailyIntake.toFixed(1)
},
  pace: (inputs: Record<string, number | string>) => {
    const distance = Number(inputs.distance)
    const time = Number(inputs.time)
    const paceMinutes = Math.floor(time / distance)
    const paceSeconds = Math.round((time / distance - paceMinutes) * 60)
    return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")}`
  },
  "heart-rate": (inputs: Record<string, number | string>) => {
    const age = Number(inputs.age)
    const restingHR = Number(inputs.restingHR)
    const maxHR = 220 - age
    const zones = {
      zone1: Math.round((maxHR - restingHR) * 0.5 + restingHR),
      zone2: Math.round((maxHR - restingHR) * 0.6 + restingHR),
      zone3: Math.round((maxHR - restingHR) * 0.7 + restingHR),
      zone4: Math.round((maxHR - restingHR) * 0.8 + restingHR),
      zone5: Math.round((maxHR - restingHR) * 0.9 + restingHR),
    }
    return `Z1: ${zones.zone1}, Z2: ${zones.zone2}, Z3: ${zones.zone3}, Z4: ${zones.zone4}, Z5: ${zones.zone5}`
  },
  protein: (inputs: Record<string, number | string>) => {
    const weight = Number(inputs.weight)
    const goal = Number(inputs.goal)
    return (weight * goal).toFixed(1)
  },
tdee: (inputs: Record<string, number | string>) => {
  const age = Number(inputs.age)
  let weight = Number(inputs.weight)
  let height = Number(inputs.height)
  const gender = inputs.gender as string
  const activity = Number(inputs.activity)
  const formula = inputs.formula as string
  const heightUnit = inputs.heightUnit as string
  const weightUnit = inputs.weightUnit as string

  // --- Unit Conversion ---
  if (heightUnit === "inch") height = height * 2.54
  if (weightUnit === "pound") weight = weight * 0.453592

  let bmr = 0

  // --- BMR Formula Selection ---
  switch (formula) {
    case "mifflin": // Mifflin-St Jeor Equation
      bmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161
      break

    case "harris": // Original Harris-Benedict (1919)
      bmr =
        gender === "male"
          ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
          : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age
      break

    case "revisedHarris": // Revised Harris-Benedict (1984)
      bmr =
        gender === "male"
          ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
          : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age
      break

    case "katch": // Katch-McArdle (requires lean mass, fallback used)
      // Optional: if you later add body fat input, replace the lean mass calc
      const bodyFatPercent = Number(inputs.bodyFat || 20) // default 20%
      const leanMass = weight * (1 - bodyFatPercent / 100)
      bmr = 370 + 21.6 * leanMass
      break

    case "schofield": // Schofield (1985)
      if (gender === "male") {
        if (age >= 18 && age <= 30) bmr = 15.057 * weight + 692.2
        else if (age > 30 && age <= 60) bmr = 11.472 * weight + 873.1
        else bmr = 11.711 * weight + 587.7
      } else {
        if (age >= 18 && age <= 30) bmr = 14.818 * weight + 486.6
        else if (age > 30 && age <= 60) bmr = 8.126 * weight + 845.6
        else bmr = 9.082 * weight + 658.5
      }
      break

    default:
      // Default to Mifflin-St Jeor
      bmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161
  }

  // --- Calculate TDEE ---
  const tdee = Math.round(bmr * activity)
  return tdee
},
macros: (inputs: Record<string, number | string>) => {
  const gender = String(inputs.gender)
  const age = Number(inputs.age)
  let height = Number(inputs.height)
  let weight = Number(inputs.weight)
  const activity = Number(inputs.activity)
  const goal = String(inputs.goal)
  const heightUnit = String(inputs.heightUnit || "cm")
  const weightUnit = String(inputs.weightUnit || "kg")

  // Convert to metric if necessary
  if (heightUnit === "inch") height *= 2.54
  if (weightUnit === "pounds") weight *= 0.453592

  // Step 1: BMR (Mifflin–St Jeor Equation)
  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  // Step 2: TDEE = BMR × Activity level
  let calories = bmr * activity

  // Step 3: Adjust for goal
  if (goal === "change") calories += 0 // later you can add ±500 logic

  // Step 4: Balanced macro distribution (40/30/30)
  const carbs = (calories * 0.4) / 4
  const protein = (calories * 0.3) / 4
  const fat = (calories * 0.3) / 9

  return `Calories: ${calories.toFixed(0)} kcal | Carbs: ${carbs.toFixed(0)}g | Protein: ${protein.toFixed(0)}g | Fat: ${fat.toFixed(0)}g`
},
  bfp: (inputs: Record<string, number | string>) => {
    const waist = Number(inputs.waist)
    const hip = Number(inputs.hip)
    const neck = Number(inputs.neck)
    return (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(0) - 78.387).toFixed(1)
  },
}
