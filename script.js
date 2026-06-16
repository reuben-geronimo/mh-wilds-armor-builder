const SKILL_CAPS = {
  "Weakness Exploit": 3,
  "Attack Boost": 5,
  "Critical Eye": 5,
  "Divine Blessing": 3,
  "Stamina Surge": 3,
  "Hunger Resistance": 3,
  "Item Prolonger": 3
};

const API_URL = 'http://localhost:3000/api/armor';
let armorDataset = [];

// Asynchronous engine to pull data from our API on page load
async function initializeApp() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Network response error: ${response.status}`);
    }

    // Store the values from the data stream onto our global variable
    armorDataset = await response.json();

    populateDropdowns()

  } catch (error) {
    console.error("❌ Failed to fetch armor data from backend:", error);
    alert("Unable to load armor data. Please ensure your Node.js server is running on Port 3000.")
  }
}

initializeApp();

const selectorSection = document.querySelector('.selector-section');

const headSelect = document.getElementById('head-select');
const chestSelect = document.getElementById('chest-select');
const armsSelect = document.getElementById('arms-select');
const waistSelect = document.getElementById('waist-select');
const legsSelect = document.getElementById('legs-select');

const totalDefenseDisplay = document.getElementById('total-defense');
const skillsListDisplay = document.getElementById('skills-list');

function populateDropdowns() {

  const slotToDropdownMap = {
    "head": headSelect,
    "chest": chestSelect,
    "arms": armsSelect,
    "waist": waistSelect,
    "legs": legsSelect
  };

  // Clear previous options to prevent duplicating sets on reload
  Object.values(slotToDropdownMap).forEach(select => {
    if (select) select.innerHTML = `<option value="">Select Gear</option>`;
  });

  armorDataset.forEach(piece => {
    const option = document.createElement('option');
    option.value = piece.name;
    option.textContent = piece.name;

    const targetDropdown = slotToDropdownMap[piece.slot];

    if (targetDropdown) {
      targetDropdown.appendChild(option);
    }
  });
}

function calculateTotalStats() {
  let totalDefense = 0;
  let activeSkills = {};

  const selectedEquipped = [
    headSelect.value,
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

