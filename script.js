const armorDataset = [
  // --- HEAD PIECES ---
  {
    "name": "Rathalos Helm",
    "slot": "Helm",
    "defense": 45,
    "skills": { "Attack Boost": 1, "Critical Eye": 1 }
  },
  {
    "name": "Leather Headgear",
    "slot": "Helm",
    "defense": 10,
    "skills": { "Recovery Speed": 1 }
  },

  // --- CHEST PIECES ---
  {
    "name": "Rathalos Mail",
    "slot": "Chest",
    "defense": 45,
    "skills": { "Weakness Exploit": 1 }
  },
  {
    "name": "Leather Vest",
    "slot": "Chest",
    "defense": 10,
    "skills": { "Stamina Surge": 1 }
  },

  // --- ARM PIECES ---
  {
    "name": "Rathalos Braces",
    "slot": "Arms",
    "defense": 45,
    "skills": { "Attack Boost": 1 }
  },
  {
    "name": "Leather Gloves",
    "slot": "Arms",
    "defense": 10,
    "skills": { "Water Resistance": 1 }
  },

  // --- WAIST PIECES ---
  {
    "name": "Rathalos Coil",
    "slot": "Waist",
    "defense": 45,
    "skills": { "Critical Eye": 1 }
  },
  {
    "name": "Leather Belt",
    "slot": "Waist",
    "defense": 10,
    "skills": { "Fire Resistance": 1 }
  },

  // --- LEG PIECES ---
  {
    "name": "Rathalos Greaves",
    "slot": "Legs",
    "defense": 45,
    "skills": { "Attack Boost": 2 }
  },
  {
    "name": "Leather Trousers",
    "slot": "Legs",
    "defense": 10,
    "skills": { "Fire Resistance": 1 }
  }
];

// Grab the general dropdown section
const selectorSection = document.querySelector('.selector-section');

// Grab the dropdown menus
const helmSelect = document.getElementById('helm-select');
const chestSelect = document.getElementById('chest-select');
const armsSelect = document.getElementById('arms-select');
const waistSelect = document.getElementById('waist-select');
const legsSelect = document.getElementById('legs-select');

// Grab the display areas where text will change
const totalDefenseDisplay = document.getElementById('total-defense');
const skillsListDisplay = document.getElementById('skills-list');

function populateDropdowns() {
  // Loop through every piece of armor in the dataset
  for (let i = 0; i < armorDataset.length; i++) {
    const item = armorDataset[i];

    // 1. Create a brand new, empty <option> element
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;

    // 2. Figure out which dropdown this item belongs to based on its slot
    if (item.slot === "Helm") {
      helmSelect.appendChild(option);
    } else if (item.slot === "Chest") {
      chestSelect.appendChild(option);
    } else if (item.slot === "Arms") {
      armsSelect.appendChild(option);
    } else if (item.slot === "Waist") {
      waistSelect.appendChild(option);
    } else if (item.slot === "Legs") {
      legsSelect.appendChild(option);
    }
  }
}

populateDropdowns();

function calculateTotalStats() {
  let totalDefense = 0;
  let activeSkills = {};

  const selectedEquipped = [
    helmSelect.value,
    chestSelect.value,
    armsSelect.value,
    waistSelect.value,
    legsSelect.value
  ]

  for (let i = 0; i < armorDataset.length; i++) {
    const item = armorDataset[i];

    if (selectedEquipped.includes(item.name)) {
      totalDefense += item.defense;

      for (const skillName in item.skills) {
        const skillLevel = item.skills[skillName];

        if (activeSkills[skillName]) {
          activeSkills[skillName] += skillLevel;
        } else {
          activeSkills[skillName] = skillLevel;
        }
      }
    }
  }

  totalDefenseDisplay.textContent = totalDefense;

  renderSkills(activeSkills);
}

function renderSkills(skillsObj) {
  // Clear out the old list completely
  skillsListDisplay.innerHTML = "";

  // Get an array of all the skill names
  const skillNames = Object.keys(skillsObj);

  // If there are no skills active, show the default message
  if (skillNames.length === 0) {
    skillsListDisplay.innerHTML = "<li>No skills active</li>";
    return;
  }

  // Loop through our combined skills and create a new HTML <li> tag for each one
  for (let i = 0; i < skillNames.length; i++) {
    const name = skillNames[i];
    const level = skillsObj[name];

    const li = document.createElement('li');
    li.textContent = `${name} Lv. ${level}`;
    skillsListDisplay.appendChild(li);
  }
}

selectorSection.addEventListener('change', function(event) {
  console.log("Something inside the section changed:", event.target.id);
  calculateTotalStats();
});

