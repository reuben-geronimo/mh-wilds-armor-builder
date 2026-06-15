const SKILL_CAPS = {
  "Weakness Exploit": 3,
  "Attack Boost": 5,
  "Critical Eye": 5,
  "Divine Blessing": 3,
  "Stamina Surge": 3,
  "Hunger Resistance": 3,
  "Item Prolonger": 3
};

const armorDataset = [
  // --- HEAD PIECES ---
  {
    "name": "G. Rathalos Helm",
    "slot": "Helm",
    "defense": 26,
    "skills": { "Weakness Exploit": 1 }
  },
  {
    "name": "Leather Headgear α",
    "slot": "Helm",
    "defense": 26,
    "skills": { "Item Prolonger": 1 }
  },

  // --- CHEST PIECES ---
  {
    "name": "G. Rathalos Mail",
    "slot": "Chest",
    "defense": 26,
    "skills": { "Attack Boost": 1 }
  },
  {
    "name": "Leather Mail α",
    "slot": "Chest",
    "defense": 26,
    "skills": { "Item Prolonger": 1 }
  },

  // --- ARM PIECES ---
  {
    "name": "G. Rathalos Vambraces",
    "slot": "Arms",
    "defense": 26,
    "skills": { "Weakness Exploit": 1 }
  },
  {
    "name": "Leather Gloves α",
    "slot": "Arms",
    "defense": 26,
    "skills": { "Hunger Resistance": 1 }
  },

  // --- WAIST PIECES ---
  {
    "name": "G. Rathalos Coil",
    "slot": "Waist",
    "defense": 26,
    "skills": { "Attack Boost": 2 }
  },
  {
    "name": "Leather Belt α",
    "slot": "Waist",
    "defense": 26,
    "skills": { "Hunger Resistance": 1 }
  },

  // --- LEG PIECES ---
  {
    "name": "G. Rathalos Greaves",
    "slot": "Legs",
    "defense": 26,
    "skills": { "Weakness Exploit": 1 }
  },
  {
    "name": "Leather Pants α",
    "slot": "Legs",
    "defense": 26,
    "skills": { "Hunger Resistance": 1 }
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
  // A clean dictionary mapping data slots directly to HTML elements
  const slotToDropdownMap = {
    "Helm": helmSelect,
    "Chest": chestSelect,
    "Arms": armsSelect,
    "Waist": waistSelect,
    "Legs": legsSelect
  };

  // Loop through every piece of armor in the dataset
  for (let i = 0; i < armorDataset.length; i++) {
    const item = armorDataset[i];

    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;

    // 1. Dynamic lookup: find the correct select element using the item's slot name
    const targetDropdown = slotToDropdownMap[item.slot];

    // 2. Safety check: If the slot exists in our map, append the option
    if (targetDropdown) {
      targetDropdown.appendChild(option);
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
  // Clear the previous visual state
  skillsListDisplay.innerHTML = "";
  const skillNames = Object.keys(skillsObj);

  // Safety net for empty builds
  if (skillNames.length === 0) {
    skillsListDisplay.innerHTML = "<li>No skills active</li>";
    return;
  }

  // Iterate through accumulated skills
  for (let i = 0; i < skillNames.length; i++) {
    const name = skillNames[i];
    const level = skillsObj[name];

    // Lookup cap from configuration; default to 3 if not specified
    const maxLimit = SKILL_CAPS[name] || 3;

    const li = document.createElement('li');

    if (level === maxLimit) {
      // Scenario A: Skill is perfectly maxxed out
      li.classList.add('skill-maxed');
      li.innerHTML = `
      <span class="skill-name">${name}</span>
      <span class="skill-level">MAX Lv. ${maxLimit}</span>
      `;
    } else if (level > maxLimit) {
      // Scenario B: Skill is overcapped
      li.classList.add('skill-overcapped');
      const wastedPoints = level - maxLimit;
      li.innerHTML = `
      <span class="skill-name">${name}</span>
      <div>
        <span class="wasted-badge">${wastedPoints} Over</span>
        <span class="skill-level">Lv. ${maxLimit}</span>
      </div>
      `;
    } else {
      // Scenario C: Normal skill progression
      li.innerHTML = `
      <span class="skill-name">${name}</span>
      <span class="skill-level">Lv. ${level} / ${maxLimit}</span>
      `;
    }
    skillsListDisplay.appendChild(li); // Append the list item to the display after setting its content
  }
}

selectorSection.addEventListener('change', function(event) {
  console.log("Something inside the section changed:", event.target.id);
  calculateTotalStats();
});

