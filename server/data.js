const armorDataset = [
  {
    "name": "Conga Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Free Meal": 1,
      "Intimidator": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Burst": 1,
      "Intimidator": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Mushroomancer": 1,
      "Speed Eating": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Mushroomancer": 1,
      "Free Meal": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Mushroomancer": 1,
      "Burst": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Quematrice Helm",
    "slot": "head",
    "defense": 6,
    "skills": {
      "Flinch Free": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Quematrice Mail",
    "slot": "chest",
    "defense": 6,
    "skills": {
      "Fire Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Quematrice Braces",
    "slot": "arms",
    "defense": 6,
    "skills": {
      "Flinch Free": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Quematrice Coil",
    "slot": "waist",
    "defense": 6,
    "skills": {
      "Fire Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Quematrice Greaves",
    "slot": "legs",
    "defense": 6,
    "skills": {
      "Flinch Free": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gore Helm α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Coalescence": 1,
      "Evade Window": 2,
      "Gore Magala's Tyranny": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gore Mail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Antivirus": 1,
      "Evade Window": 2,
      "Gore Magala's Tyranny": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gore Vambraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Constitution": 2,
      "Evade Window": 1,
      "Gore Magala's Tyranny": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gore Coil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Constitution": 2,
      "Antivirus": 1,
      "Gore Magala's Tyranny": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gore Greaves α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Antivirus": 1,
      "Gore Magala's Tyranny": 1,
      "Flinch Free": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Blango Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Blangonga's Spirit": 1,
      "Wide-Range": 2
    }
  },
  {
    "name": "Blango Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Blangonga's Spirit": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Blango Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Counterstrike": 1,
      "Alluring Pelt": 1,
      "Blangonga's Spirit": 1
    }
  },
  {
    "name": "Blango Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Blangonga's Spirit": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Blango Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Blangonga's Spirit": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Guild Ace Earrings α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Foray": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Guild Ace Mail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Foray": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Guild Ace Vambraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Foray": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Guild Ace Coil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Foray": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Guild Ace Boots α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Foray": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Vespoid Helm α",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Mail α",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Evade Window": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Vambraces α",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Ambush": 1,
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Coil α",
    "slot": "waist",
    "defense": 32,
    "skills": {
      "Evade Window": 1,
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Greaves α",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Hirabami Headdress",
    "slot": "head",
    "defense": 22,
    "skills": {
      "Recovery Speed": 1,
      "Evade Window": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Mail",
    "slot": "chest",
    "defense": 22,
    "skills": {
      "Recovery Speed": 1,
      "Evade Window": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Vambraces",
    "slot": "arms",
    "defense": 22,
    "skills": {
      "Evade Window": 1,
      "Ice Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Coil",
    "slot": "waist",
    "defense": 22,
    "skills": {
      "Evade Window": 1,
      "Ice Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Greaves",
    "slot": "legs",
    "defense": 22,
    "skills": {
      "Evade Window": 1,
      "Ice Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Alloy Helm α",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Quick Sheathe": 1
    }
  },
  {
    "name": "Alloy Mail α",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Flinch Free": 2
    }
  },
  {
    "name": "Alloy Vambraces α",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Tremor Resistance": 1
    }
  },
  {
    "name": "Alloy Coil α",
    "slot": "waist",
    "defense": 32,
    "skills": {
      "Quick Sheathe": 1,
      "Tremor Resistance": 1
    }
  },
  {
    "name": "Alloy Greaves α",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Quick Sheathe": 1,
      "Flinch Free": 1
    }
  },
  {
    "name": "Rathalos Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Constitution": 1,
      "Scale Layering": 1,
      "Rathalos's Flare": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Rathalos Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Scale Layering": 1,
      "Rathalos's Flare": 1,
      "Adrenaline Rush": 2
    }
  },
  {
    "name": "Rathalos Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Scale Layering": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "Rathalos Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Scale Layering": 1,
      "Rathalos's Flare": 1,
      "Adrenaline Rush": 2
    }
  },
  {
    "name": "Rathalos Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Scale Layering": 1,
      "Rathalos's Flare": 1,
      "Evade Window": 2
    }
  },
  {
    "name": "Chatacabra Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Chatacabra Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Item Prolonger": 1,
      "Flexible Leathercraft": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Chatacabra Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Item Prolonger": 1,
      "Flexible Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Item Prolonger": 1,
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 1
    }
  },
  {
    "name": "Bone Helm α",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Speed Eating": 1,
      "Stun Resistance": 1
    }
  },
  {
    "name": "Bone Mail α",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Marathon Runner": 1,
      "Stun Resistance": 1
    }
  },
  {
    "name": "Bone Vambraces α",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Marathon Runner": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Bone Coil α",
    "slot": "waist",
    "defense": 32,
    "skills": {
      "Marathon Runner": 1
    }
  },
  {
    "name": "Bone Greaves α",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Vespoid Helm",
    "slot": "head",
    "defense": 4,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Mail",
    "slot": "chest",
    "defense": 4,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Vambraces",
    "slot": "arms",
    "defense": 4,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Coil",
    "slot": "waist",
    "defense": 4,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Greaves",
    "slot": "legs",
    "defense": 4,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Doshaguma Helm",
    "slot": "head",
    "defense": 16,
    "skills": {
      "Doshaguma's Might": 1,
      "Free Meal": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Mail",
    "slot": "chest",
    "defense": 16,
    "skills": {
      "Doshaguma's Might": 1,
      "Free Meal": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Braces",
    "slot": "arms",
    "defense": 16,
    "skills": {
      "Recovery Speed": 1,
      "Doshaguma's Might": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Coil",
    "slot": "waist",
    "defense": 16,
    "skills": {
      "Item Prolonger": 1,
      "Doshaguma's Might": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Greaves",
    "slot": "legs",
    "defense": 16,
    "skills": {
      "Doshaguma's Might": 1,
      "Free Meal": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "G. Rathalos Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "G. Rathalos Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Windproof": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Windproof": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "Kunafa Headgear α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Wide-Range": 2,
      "Palico Rally": 1
    }
  },
  {
    "name": "Kunafa Cloak α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Free Meal": 2,
      "Palico Rally": 1
    }
  },
  {
    "name": "Kunafa Sash α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Speed Eating": 2,
      "Palico Rally": 1
    }
  },
  {
    "name": "Kunafa Chaps α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Wide-Range": 2,
      "Palico Rally": 1
    }
  },
  {
    "name": "Rathian Helm β",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Rathian Mail β",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Foray": 1
    }
  },
  {
    "name": "Rathian Vambraces β",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Foray": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Rathian Coil β",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Foray": 1
    }
  },
  {
    "name": "Rathian Greaves β",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Recovery Speed": 1,
      "Foray": 1
    }
  },
  {
    "name": "Comaqchi Accessory β",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Sleep Resistance": 2,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "G. Seikret Coil",
    "slot": "waist",
    "defense": 22,
    "skills": {
      "Guardian's Pulse": 1,
      "Jump Master": 1
    }
  },
  {
    "name": "Nerscylla Helm β",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Neopteron Camouflage": 1,
      "Bind Resistance": 1
    }
  },
  {
    "name": "Nerscylla Mail β",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Ambush": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Nerscylla Vambraces β",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Ambush": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Nerscylla Coil β",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Neopteron Camouflage": 1,
      "Bind Resistance": 1
    }
  },
  {
    "name": "Nerscylla Greaves β",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Sleep Resistance": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Sild Hood α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Botanist": 3
    }
  },
  {
    "name": "Sild Coat α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Wide-Range": 4
    }
  },
  {
    "name": "Conga Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Alluring Pelt": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "Conga Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Alluring Pelt": 1,
      "Intimidator": 2
    }
  },
  {
    "name": "Conga Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Mushroomancer": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Conga Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Mushroomancer": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Conga Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Burst": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Dober Helm α",
    "slot": "head",
    "defense": 56,
    "skills": {
      "Constitution": 1,
      "Stamina Surge": 1
    }
  },
  {
    "name": "Dober Mail α",
    "slot": "chest",
    "defense": 56,
    "skills": {
      "Constitution": 1,
      "Marathon Runner": 1
    }
  },
  {
    "name": "Dober Vambraces α",
    "slot": "arms",
    "defense": 56,
    "skills": {
      "Constitution": 1,
      "Stamina Surge": 2
    }
  },
  {
    "name": "Dober Coil α",
    "slot": "waist",
    "defense": 56,
    "skills": {
      "Constitution": 1,
      "Marathon Runner": 2
    }
  },
  {
    "name": "Dober Greaves α",
    "slot": "legs",
    "defense": 56,
    "skills": {
      "Constitution": 1,
      "Mushroomancer": 2
    }
  },
  {
    "name": "Gypceros Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1,
      "Blindsider": 1
    }
  },
  {
    "name": "Gypceros Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Gypceros Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Resentment": 2,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Gypceros Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Gypceros Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Marathon Runner": 2,
      "Resentment": 1
    }
  },
  {
    "name": "Rathian Helm α",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Recovery Speed": 1,
      "Divine Blessing": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathian Mail α",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Foray": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathian Vambraces α",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Foray": 1,
      "Divine Blessing": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathian Coil α",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Foray": 1,
      "Tool Specialist": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathian Greaves α",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Recovery Speed": 2,
      "Foray": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "G. Arkveld Helm",
    "slot": "head",
    "defense": 30,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 1
    }
  },
  {
    "name": "G. Arkveld Mail",
    "slot": "chest",
    "defense": 30,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 1,
      "Blight Resistance": 1
    }
  },
  {
    "name": "G. Arkveld Vambraces",
    "slot": "arms",
    "defense": 30,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 1
    }
  },
  {
    "name": "G. Arkveld Coil",
    "slot": "waist",
    "defense": 30,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Blight Resistance": 1
    }
  },
  {
    "name": "G. Arkveld Greaves",
    "slot": "legs",
    "defense": 30,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Blight Resistance": 1
    }
  },
  {
    "name": "Dahaad Shardhelm α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Weakness Exploit": 1,
      "Jin Dahaad's Revolt": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Dahaad Shardmail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Jin Dahaad's Revolt": 1,
      "Adaptability": 1,
      "Bind Resistance": 2
    }
  },
  {
    "name": "Dahaad Shardbraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Jin Dahaad's Revolt": 1,
      "Adaptability": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Dahaad Shardcoil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Tremor Resistance": 2,
      "Weakness Exploit": 1,
      "Jin Dahaad's Revolt": 1
    }
  },
  {
    "name": "Dahaad Shardgreaves α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Tremor Resistance": 1,
      "Jin Dahaad's Revolt": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Duna Wildhelm α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Earplugs": 1,
      "Tool Specialist": 2,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildmail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Tool Specialist": 2,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildbraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Quick Sheathe": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Duna Wildcoil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Duna Wildgreaves α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Tool Specialist": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Rey Sandhelm α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Rey Dau's Voltage": 1,
      "Evade Extender": 1,
      "Latent Power": 2
    }
  },
  {
    "name": "Rey Sandmail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Stamina Surge": 1,
      "Rey Dau's Voltage": 1,
      "Maximum Might": 2
    }
  },
  {
    "name": "Rey Sandbraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Rey Dau's Voltage": 1,
      "Stun Resistance": 1,
      "Latent Power": 2
    }
  },
  {
    "name": "Rey Sandcoil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Stamina Surge": 2,
      "Rey Dau's Voltage": 1,
      "Stun Resistance": 2
    }
  },
  {
    "name": "Rey Sandgreaves α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Rey Dau's Voltage": 1,
      "Maximum Might": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "G. Rathalos Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Survival Expert": 2,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 2
    }
  },
  {
    "name": "G. Rathalos Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Survival Expert": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "G. Rathalos Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Windproof": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Windproof": 2,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "Kranodath Mail α",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Flinch Free": 2,
      "Partbreaker": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Butterfly Vertex α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Constitution": 1,
      "Imparted Wisdom": 1,
      "Evade Window": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "Butterfly Thorax α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Constitution": 1,
      "Imparted Wisdom": 1,
      "Evade Window": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "Butterfly Brachia α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Constitution": 1,
      "Imparted Wisdom": 1,
      "Recovery Speed": 2,
      "Evade Window": 1
    }
  },
  {
    "name": "Butterfly Elytra α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Constitution": 1,
      "Imparted Wisdom": 1,
      "Evade Window": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "Butterfly Crura α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Constitution": 1,
      "Imparted Wisdom": 1,
      "Recovery Up": 2,
      "Evade Window": 1
    }
  },
  {
    "name": "Kranodath Mail",
    "slot": "chest",
    "defense": 16,
    "skills": {
      "Flinch Free": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "G. Doshaguma Helm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "G. Doshaguma Mail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1,
      "Iron Skin": 1
    }
  },
  {
    "name": "G. Doshaguma Braces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Marathon Runner": 1,
      "Doshaguma's Might": 1
    }
  },
  {
    "name": "G. Doshaguma Coil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Marathon Runner": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "G. Doshaguma Greaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Marathon Runner": 1,
      "Doshaguma's Might": 1,
      "Iron Skin": 1
    }
  },
  {
    "name": "Talioth Vambraces α",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Flexible Leathercraft": 1,
      "Leap of Faith": 1,
      "Burst": 1
    }
  },
  {
    "name": "Hirabami Headdress α",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Evade Window": 1,
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Mail α",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Evade Window": 1,
      "Ice Resistance": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Vambraces α",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Evade Window": 1,
      "Scaling Prowess": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Hirabami Coil α",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Evade Window": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Hirabami Greaves α",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Ice Resistance": 1,
      "Scaling Prowess": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Duna Wildhelm β",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Earplugs": 1,
      "Tool Specialist": 1,
      "Uth Duna's Cover": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Duna Wildmail β",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Tool Specialist": 2,
      "Uth Duna's Cover": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Duna Wildbraces β",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Quick Sheathe": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Duna Wildcoil β",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Uth Duna's Cover": 1,
      "Peak Performance": 2,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Duna Wildgreaves β",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Uth Duna's Cover": 1,
      "Peak Performance": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Ingot Helm α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Divine Blessing": 2,
      "Resentment": 1
    }
  },
  {
    "name": "Ingot Mail α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Windproof": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Ingot Vambraces α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Stun Resistance": 2,
      "Resentment": 1
    }
  },
  {
    "name": "Ingot Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Divine Blessing": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Ingot Greaves α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Windproof": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Rey Sandhelm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Rey Dau's Voltage": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Rey Sandmail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Constitution": 1,
      "Rey Dau's Voltage": 1
    }
  },
  {
    "name": "Rey Sandbraces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Rey Dau's Voltage": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Rey Sandcoil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Constitution": 1,
      "Rey Dau's Voltage": 1
    }
  },
  {
    "name": "Rey Sandgreaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Constitution": 1,
      "Rey Dau's Voltage": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Balahara Helm α",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Evade Window": 1,
      "Geologist": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Mail α",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Stamina Surge": 1,
      "Geologist": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Vambraces α",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Stamina Surge": 1,
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Coil α",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Evade Window": 1,
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Greaves α",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Geologist": 1,
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Gajau Boots",
    "slot": "legs",
    "defense": 4,
    "skills": {
      "Flexible Leathercraft": 1,
      "Water Resistance": 1
    }
  },
  {
    "name": "Melahoa Hat α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Survival Expert": 3,
      "Poison Resistance": 2
    }
  },
  {
    "name": "Melahoa Jacket α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Tool Specialist": 3
    }
  },
  {
    "name": "Melahoa Branch α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Recovery Speed": 3,
      "Paralysis Resistance": 2
    }
  },
  {
    "name": "Melahoa Folia α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Recovery Up": 3,
      "Bleeding Resistance": 2
    }
  },
  {
    "name": "Melahoa Roots α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Mushroomancer": 3
    }
  },
  {
    "name": "Gypceros Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Stamina Surge": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Gypceros Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Stamina Surge": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Gypceros Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Resentment": 2
    }
  },
  {
    "name": "Gypceros Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Stamina Surge": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Gypceros Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Marathon Runner": 1,
      "Buttery Leathercraft": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Xu Wu Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Flexible Leathercraft": 1,
      "Xu Wu's Vigor": 1,
      "Ambush": 1,
      "Adrenaline Rush": 2
    }
  },
  {
    "name": "Xu Wu Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Flexible Leathercraft": 1,
      "Xu Wu's Vigor": 1,
      "Ambush": 1,
      "Heroics": 3
    }
  },
  {
    "name": "Xu Wu Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Flexible Leathercraft": 1,
      "Xu Wu's Vigor": 1,
      "Earplugs": 2
    }
  },
  {
    "name": "Xu Wu Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Flexible Leathercraft": 1,
      "Xu Wu's Vigor": 1,
      "Earplugs": 1,
      "Heroics": 2
    }
  },
  {
    "name": "Xu Wu Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Flexible Leathercraft": 1,
      "Xu Wu's Vigor": 1,
      "Ambush": 1,
      "Adrenaline Rush": 1
    }
  },
  {
    "name": "Suja Sash α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Divine Blessing": 3
    }
  },
  {
    "name": "Quematrice Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Quematrice Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Quematrice Braces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Flinch Free": 1
    }
  },
  {
    "name": "Quematrice Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Fire Resistance": 2
    }
  },
  {
    "name": "Quematrice Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Flinch Free": 1
    }
  },
  {
    "name": "Kut-Ku Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Constitution": 2,
      "Fire Resistance": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Kut-Ku Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Fire Resistance": 1,
      "Scaling Prowess": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Kut-Ku Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Constitution": 1,
      "Scaling Prowess": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Kut-Ku Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Recovery Up": 2,
      "Scaling Prowess": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Kut-Ku Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Constitution": 2,
      "Recovery Up": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Barina Headgear β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Foray": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Barina Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Recovery Up": 1,
      "Evade Window": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Barina Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Recovery Up": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Barina Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Barina Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Evade Window": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Arkvulcan Helm α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Arkveld's Hunger": 1,
      "Elemental Absorption": 2,
      "Fortifying Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Arkvulcan Mail α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Arkveld's Hunger": 1,
      "Weakness Exploit": 1,
      "Elemental Absorption": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Arkvulcan Vambraces α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Recovery Speed": 1,
      "Arkveld's Hunger": 1,
      "Fortifying Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Arkvulcan Coil α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Recovery Speed": 2,
      "Arkveld's Hunger": 1,
      "Weakness Exploit": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Arkvulcan Greaves α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Quick Sheathe": 2,
      "Arkveld's Hunger": 1,
      "Fortifying Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Xu Wu Helm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Flexible Leathercraft": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "Xu Wu Mail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1
    }
  },
  {
    "name": "Xu Wu Vambraces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Flexible Leathercraft": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "Xu Wu Coil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "Xu Wu Greaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Flexible Leathercraft": 1,
      "Stamina Surge": 1
    }
  },
  {
    "name": "Gravios Helm β",
    "slot": "head",
    "defense": 52,
    "skills": {
      "Scale Layering": 1,
      "Gravios's Protection": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Mail β",
    "slot": "chest",
    "defense": 52,
    "skills": {
      "Scale Layering": 1,
      "Recovery Speed": 1,
      "Gravios's Protection": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Vambraces β",
    "slot": "arms",
    "defense": 52,
    "skills": {
      "Scale Layering": 1,
      "Gravios's Protection": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Gravios Coil β",
    "slot": "waist",
    "defense": 52,
    "skills": {
      "Scale Layering": 1,
      "Gravios's Protection": 1,
      "Flinch Free": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Greaves β",
    "slot": "legs",
    "defense": 52,
    "skills": {
      "Scale Layering": 1,
      "Recovery Speed": 1,
      "Tremor Resistance": 1,
      "Gravios's Protection": 1
    }
  },
  {
    "name": "Mimiphyta α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Ambush": 1,
      "Entomologist": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "G. Seikret Coil β",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Jump Master": 1,
      "Earplugs": 1
    }
  },
  {
    "name": "G. Rathalos Helm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "G. Rathalos Mail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "G. Rathalos Vambraces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "G. Rathalos Coil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Rathalos's Flare": 1,
      "Intimidator": 1
    }
  },
  {
    "name": "G. Rathalos Greaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Weakness Exploit": 1,
      "Rathalos's Flare": 1
    }
  },
  {
    "name": "Gravios Helm α",
    "slot": "head",
    "defense": 52,
    "skills": {
      "Tremor Resistance": 1,
      "Gravios's Protection": 1,
      "Scaling Prowess": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Mail α",
    "slot": "chest",
    "defense": 52,
    "skills": {
      "Recovery Speed": 2,
      "Gravios's Protection": 1,
      "Scaling Prowess": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Vambraces α",
    "slot": "arms",
    "defense": 52,
    "skills": {
      "Gravios's Protection": 1,
      "Flinch Free": 1,
      "Scaling Prowess": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Gravios Coil α",
    "slot": "waist",
    "defense": 52,
    "skills": {
      "Gravios's Protection": 1,
      "Flinch Free": 2,
      "Scaling Prowess": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gravios Greaves α",
    "slot": "legs",
    "defense": 52,
    "skills": {
      "Recovery Speed": 1,
      "Tremor Resistance": 2,
      "Gravios's Protection": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Duna Wildhelm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Tool Specialist": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Duna Wildmail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Duna Wildbraces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Tool Specialist": 1,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildcoil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Tool Specialist": 1,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildgreaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Gajau Boots α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Flexible Leathercraft": 1,
      "Water Resistance": 1,
      "Outdoorsman": 1
    }
  },
  {
    "name": "Dahaad Shardhelm β",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Agitator": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Dahaad Shardmail β",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Adaptability": 1,
      "Bind Resistance": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Dahaad Shardbraces β",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Adaptability": 1,
      "Agitator": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Dahaad Shardcoil β",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Tremor Resistance": 1,
      "Weakness Exploit": 1,
      "Jin Dahaad's Revolt": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Dahaad Shardgreaves β",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Agitator": 2,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Barina Headgear",
    "slot": "head",
    "defense": 8,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Mail",
    "slot": "chest",
    "defense": 8,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Vambraces",
    "slot": "arms",
    "defense": 8,
    "skills": {
      "Recovery Up": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Coil",
    "slot": "waist",
    "defense": 8,
    "skills": {
      "Recovery Up": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Greaves",
    "slot": "legs",
    "defense": 8,
    "skills": {
      "Recovery Up": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Hope Mask",
    "slot": "head",
    "defense": 2,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Hope Mail",
    "slot": "chest",
    "defense": 2,
    "skills": {
      "Divine Blessing": 1
    }
  },
  {
    "name": "Hope Vambraces",
    "slot": "arms",
    "defense": 2,
    "skills": {
      "Divine Blessing": 1
    }
  },
  {
    "name": "Hope Coil",
    "slot": "waist",
    "defense": 2,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Hope Greaves",
    "slot": "legs",
    "defense": 2,
    "skills": {
      "Divine Blessing": 1
    }
  },
  {
    "name": "Leather Headgear",
    "slot": "head",
    "defense": 2,
    "skills": {
      "Botanist": 1
    }
  },
  {
    "name": "Leather Vest",
    "slot": "chest",
    "defense": 2,
    "skills": {
      "Botanist": 1
    }
  },
  {
    "name": "Leather Gloves",
    "slot": "arms",
    "defense": 2,
    "skills": {
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Leather Belt",
    "slot": "waist",
    "defense": 2,
    "skills": {
      "Botanist": 1
    }
  },
  {
    "name": "Leather Pants",
    "slot": "legs",
    "defense": 2,
    "skills": {
      "Botanist": 1
    }
  },
  {
    "name": "Chainmail Headgear",
    "slot": "head",
    "defense": 2,
    "skills": {
      "Geologist": 1
    }
  },
  {
    "name": "Chainmail Vest",
    "slot": "chest",
    "defense": 2,
    "skills": {
      "Geologist": 1
    }
  },
  {
    "name": "Chainmail Gloves",
    "slot": "arms",
    "defense": 2,
    "skills": {
      "Geologist": 1
    }
  },
  {
    "name": "Chainmail Belt",
    "slot": "waist",
    "defense": 2,
    "skills": {
      "Recovery Speed": 1
    }
  },
  {
    "name": "Chainmail Pants",
    "slot": "legs",
    "defense": 2,
    "skills": {
      "Recovery Speed": 1
    }
  },
  {
    "name": "Bone Helm",
    "slot": "head",
    "defense": 4,
    "skills": {
      "Marathon Runner": 1
    }
  },
  {
    "name": "Bone Mail",
    "slot": "chest",
    "defense": 4,
    "skills": {
      "Marathon Runner": 1
    }
  },
  {
    "name": "Bone Vambraces",
    "slot": "arms",
    "defense": 4,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Bone Coil",
    "slot": "waist",
    "defense": 4,
    "skills": {
      "Marathon Runner": 1
    }
  },
  {
    "name": "Bone Greaves",
    "slot": "legs",
    "defense": 4,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Alloy Helm",
    "slot": "head",
    "defense": 6,
    "skills": {
      "Quick Sheathe": 1
    }
  },
  {
    "name": "Alloy Mail",
    "slot": "chest",
    "defense": 6,
    "skills": {
      "Tremor Resistance": 1
    }
  },
  {
    "name": "Alloy Vambraces",
    "slot": "arms",
    "defense": 6,
    "skills": {
      "Tremor Resistance": 1
    }
  },
  {
    "name": "Alloy Coil",
    "slot": "waist",
    "defense": 6,
    "skills": {
      "Tremor Resistance": 1
    }
  },
  {
    "name": "Alloy Greaves",
    "slot": "legs",
    "defense": 6,
    "skills": {
      "Quick Sheathe": 1
    }
  },
  {
    "name": "Ingot Helm",
    "slot": "head",
    "defense": 16,
    "skills": {
      "Divine Blessing": 1
    }
  },
  {
    "name": "Ingot Mail",
    "slot": "chest",
    "defense": 16,
    "skills": {
      "Windproof": 1
    }
  },
  {
    "name": "Ingot Vambraces",
    "slot": "arms",
    "defense": 16,
    "skills": {
      "Stun Resistance": 1
    }
  },
  {
    "name": "Ingot Coil",
    "slot": "waist",
    "defense": 16,
    "skills": {
      "Divine Blessing": 1
    }
  },
  {
    "name": "Ingot Greaves",
    "slot": "legs",
    "defense": 16,
    "skills": {
      "Windproof": 1
    }
  },
  {
    "name": "Talioth Vambraces",
    "slot": "arms",
    "defense": 4,
    "skills": {
      "Flexible Leathercraft": 1,
      "Leap of Faith": 1
    }
  },
  {
    "name": "Bulaqchi Specs",
    "slot": "head",
    "defense": 4,
    "skills": {
      "Entomologist": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Earrings of Dedication α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Glory's Favor": 1,
      "Wide-Range": 4
    }
  },
  {
    "name": "Guild Cross Circlet α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Glory's Favor": 1,
      "Earplugs": 1,
      "Flinch Free": 1,
      "Bind Resistance": 2
    }
  },
  {
    "name": "Guild Cross Suit α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Tremor Resistance": 1,
      "Glory's Favor": 1,
      "Earplugs": 1
    }
  },
  {
    "name": "Guild Cross Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Tremor Resistance": 1,
      "Glory's Favor": 1,
      "Flinch Free": 2,
      "Bind Resistance": 1
    }
  },
  {
    "name": "Guild Cross Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Windproof": 2,
      "Glory's Favor": 1,
      "Earplugs": 1
    }
  },
  {
    "name": "Guild Cross Boots α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Windproof": 1,
      "Tremor Resistance": 1,
      "Glory's Favor": 1
    }
  },
  {
    "name": "Sealed Eyepatch α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Fire Resistance": 2
    }
  },
  {
    "name": "Square Glasses α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Botanist": 4,
      "Outdoorsman": 1
    }
  },
  {
    "name": "Round Glasses α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Blight Resistance": 3
    }
  },
  {
    "name": "Gourmand's Earring α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Glory's Favor": 1,
      "Speed Eating": 2,
      "Free Meal": 2
    }
  },
  {
    "name": "Mizutsune Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Aquatic/Oilsilt Mobility": 2,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Mizutsune Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Constitution": 1,
      "Mizutsune's Prowess": 1,
      "Burst": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Mizutsune Braces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Evade Window": 2,
      "Alluring Pelt": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "Mizutsune Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Mizutsune's Prowess": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Mizutsune Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Burst": 2,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Sakuratide Headgear α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Blossomdance Prayer": 1,
      "Festival Spirit": 1,
      "Foray": 2,
      "Adaptability": 1
    }
  },
  {
    "name": "Sakuratide Robe α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Quick Sheathe": 1,
      "Blossomdance Prayer": 1,
      "Festival Spirit": 1,
      "Foray": 1
    }
  },
  {
    "name": "Sakuratide Bracers α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Item Prolonger": 1,
      "Blossomdance Prayer": 1,
      "Festival Spirit": 1,
      "Foray": 1
    }
  },
  {
    "name": "Sakuratide Obi α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Quick Sheathe": 2,
      "Blossomdance Prayer": 1,
      "Festival Spirit": 1,
      "Adaptability": 1
    }
  },
  {
    "name": "Sakuratide Hakama α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Item Prolonger": 2,
      "Blossomdance Prayer": 1,
      "Festival Spirit": 1,
      "Foray": 1
    }
  },
  {
    "name": "Strategist Spectacles α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Geologist": 3
    }
  },
  {
    "name": "Amstrigian α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Evade Extender": 1,
      "Wide-Range": 2
    }
  },
  {
    "name": "Clerk Visor α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Recovery Up": 1,
      "Glory's Favor": 1,
      "Divine Blessing": 2,
      "Palico Rally": 2
    }
  },
  {
    "name": "Clerk Suit α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Survival Expert": 2,
      "Glory's Favor": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Clerk Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Survival Expert": 1,
      "Glory's Favor": 1,
      "Tool Specialist": 2,
      "Palico Rally": 1
    }
  },
  {
    "name": "Clerk Belt α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Recovery Up": 2,
      "Glory's Favor": 1,
      "Tool Specialist": 2
    }
  },
  {
    "name": "Clerk Shoes α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Glory's Favor": 1,
      "Tool Specialist": 1,
      "Palico Rally": 2
    }
  },
  {
    "name": "Blossom Headgear α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Paralysis Resistance": 2
    }
  },
  {
    "name": "Blossom Vest α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Paralysis Resistance": 1
    }
  },
  {
    "name": "Blossom Cuffs α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Poison Resistance": 2
    }
  },
  {
    "name": "Blossom Coat α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Recovery Speed": 1,
      "Festival Spirit": 1,
      "Entomologist": 1
    }
  },
  {
    "name": "Blossom Boots α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Recovery Speed": 2,
      "Festival Spirit": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Numinous Crown β",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Guardian's Protection": 1,
      "Recovery Speed": 1,
      "Zoh Shia's Pulse": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Numinous Shroud β",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Guardian's Protection": 1,
      "Zoh Shia's Pulse": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Numinous Vambraces β",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Guardian's Protection": 1,
      "Zoh Shia's Pulse": 1,
      "Elemental Absorption": 2
    }
  },
  {
    "name": "Numinous Overlay β",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Guardian's Protection": 1,
      "Coalescence": 1,
      "Zoh Shia's Pulse": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Numinous Greaves β",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Guardian's Protection": 1,
      "Recovery Speed": 1,
      "Zoh Shia's Pulse": 1,
      "Counterstrike": 1,
      "Elemental Absorption": 1
    }
  },
  {
    "name": "Sealed Dragon Cloth α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Dragon Resistance": 3,
      "Resentment": 2
    }
  },
  {
    "name": "Shadow Shades α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Blindsider": 1,
      "Stun Resistance": 3
    }
  },
  {
    "name": "Mizutsune Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Aquatic/Oilsilt Mobility": 2,
      "Evade Extender": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Mizutsune Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Constitution": 1,
      "Mizutsune's Prowess": 1,
      "Burst": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Mizutsune Braces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Evade Window": 2,
      "Evade Extender": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Mizutsune Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Mizutsune's Prowess": 1,
      "Burst": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Mizutsune Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Burst": 2,
      "Fortifying Pelt": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "Numinous Crown α",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Guardian's Pulse": 1,
      "Recovery Speed": 2,
      "Zoh Shia's Pulse": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Numinous Shroud α",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Guardian's Pulse": 1,
      "Zoh Shia's Pulse": 1,
      "Counterstrike": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Numinous Vambraces α",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Coalescence": 1,
      "Guardian's Pulse": 1,
      "Zoh Shia's Pulse": 1,
      "Elemental Absorption": 2
    }
  },
  {
    "name": "Numinous Overlay α",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Coalescence": 2,
      "Guardian's Pulse": 1,
      "Zoh Shia's Pulse": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Numinous Greaves α",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Guardian's Pulse": 1,
      "Recovery Speed": 1,
      "Zoh Shia's Pulse": 1,
      "Counterstrike": 2,
      "Elemental Absorption": 1
    }
  },
  {
    "name": "Rey Sandhelm γ",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Weakness Exploit": 1,
      "Stamina Surge": 1,
      "Rey Dau's Voltage": 1,
      "Maximum Might": 1,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Rey Sandmail γ",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Lord's Soul": 1,
      "Latent Power": 3
    }
  },
  {
    "name": "Rey Sandbraces γ",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Evade Extender": 2,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Rey Sandcoil γ",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Maximum Might": 2,
      "Lord's Soul": 1,
      "Latent Power": 2
    }
  },
  {
    "name": "Rey Sandgreaves γ",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Stamina Surge": 2,
      "Rey Dau's Voltage": 1,
      "Stun Resistance": 3,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Expedition Headgear α",
    "slot": "head",
    "defense": 40,
    "skills": {
      "Coalescence": 1,
      "Blight Resistance": 1
    }
  },
  {
    "name": "Barina Headgear α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Foray": 1,
      "Paralysis Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Recovery Up": 2,
      "Evade Window": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Recovery Up": 1,
      "Foray": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Paralysis Resistance": 2,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Barina Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Foray": 1,
      "Evade Window": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Balahara Helm β",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Balahara Mail β",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Geologist": 1
    }
  },
  {
    "name": "Balahara Vambraces β",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "Balahara Coil β",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Balahara Greaves β",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Extender": 1
    }
  },
  {
    "name": "G. Doshaguma Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "G. Doshaguma Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Constitution": 2,
      "Doshaguma's Might": 1
    }
  },
  {
    "name": "G. Doshaguma Braces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "G. Doshaguma Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Doshaguma's Might": 1,
      "Heroics": 2
    }
  },
  {
    "name": "G. Doshaguma Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Constitution": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "G. Ebony Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Burst": 2,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Earplugs": 1,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Braces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "G. Ebony Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Earplugs": 1,
      "Ebony Odogaron's Power": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Doshaguma Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Doshaguma's Might": 1,
      "Alluring Pelt": 1,
      "Stun Resistance": 1,
      "Free Meal": 1
    }
  },
  {
    "name": "Doshaguma Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Doshaguma's Might": 1,
      "Alluring Pelt": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Doshaguma Braces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Stamina Surge": 1,
      "Doshaguma's Might": 1,
      "Alluring Pelt": 1,
      "Stun Resistance": 1
    }
  },
  {
    "name": "Doshaguma Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Doshaguma's Might": 1,
      "Alluring Pelt": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Doshaguma Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Recovery Up": 1,
      "Doshaguma's Might": 1,
      "Alluring Pelt": 1,
      "Free Meal": 1
    }
  },
  {
    "name": "Piragill Greaves β",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Aquatic/Oilsilt Mobility": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "G. Arkveld Helm α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 1,
      "Partbreaker": 2
    }
  },
  {
    "name": "G. Arkveld Mail α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 2,
      "Blight Resistance": 2
    }
  },
  {
    "name": "G. Arkveld Vambraces α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Blight Resistance": 1,
      "Weakness Exploit": 2
    }
  },
  {
    "name": "G. Arkveld Coil α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Flayer": 2,
      "Elemental Absorption": 1
    }
  },
  {
    "name": "G. Arkveld Greaves α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Guardian's Pulse": 1,
      "Weakness Exploit": 1,
      "Elemental Absorption": 2
    }
  },
  {
    "name": "G. Seikret Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Guardian's Pulse": 1,
      "Jump Master": 1,
      "Earplugs": 2
    }
  },
  {
    "name": "Chatacabra Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Item Prolonger": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Chatacabra Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Weakness Exploit": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Piragill Greaves α",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Flexible Leathercraft": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Water Resistance": 2
    }
  },
  {
    "name": "Quematrice Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Flinch Free": 1,
      "Scaling Prowess": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Quematrice Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Fire Resistance": 1,
      "Scaling Prowess": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Quematrice Braces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Flinch Free": 1,
      "Fire Resistance": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Quematrice Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Fire Resistance": 1,
      "Scaling Prowess": 1,
      "Latent Power": 1
    }
  },
  {
    "name": "Quematrice Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Evade Extender": 1,
      "Flinch Free": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Commission Helm α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Maximum Might": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Commission Mail α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Divine Blessing": 2,
      "Agitator": 1
    }
  },
  {
    "name": "Commission Vambraces α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Quick Sheathe": 2,
      "Agitator": 1
    }
  },
  {
    "name": "Commission Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Tool Specialist": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Commission Greaves α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Earplugs": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Udra Mirehelm β",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Counterstrike": 1,
      "Resentment": 1,
      "Nu Udra's Mutiny": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Udra Miremail β",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Resentment": 1,
      "Nu Udra's Mutiny": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Udra Mirebraces β",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Counterstrike": 1,
      "Speed Eating": 2,
      "Nu Udra's Mutiny": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Udra Mirecoil β",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Resentment": 2,
      "Nu Udra's Mutiny": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Udra Miregreaves β",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Windproof": 1,
      "Burst": 1,
      "Nu Udra's Mutiny": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Comaqchi Accessory",
    "slot": "head",
    "defense": 16,
    "skills": {
      "Sleep Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Blango Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Counterstrike": 1,
      "Blangonga's Spirit": 1,
      "Wide-Range": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Blango Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Item Prolonger": 2,
      "Blangonga's Spirit": 1,
      "Agitator": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Blango Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Counterstrike": 1,
      "Blangonga's Spirit": 1,
      "Palico Rally": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Blango Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Blangonga's Spirit": 1,
      "Wide-Range": 1,
      "Agitator": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Blango Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Counterstrike": 1,
      "Blangonga's Spirit": 1,
      "Agitator": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Kut-Ku Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Constitution": 2,
      "Scale Layering": 1
    }
  },
  {
    "name": "Kut-Ku Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Kut-Ku Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Constitution": 1,
      "Scale Layering": 1
    }
  },
  {
    "name": "Kut-Ku Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Scale Layering": 1,
      "Recovery Up": 1,
      "Agitator": 1
    }
  },
  {
    "name": "Kut-Ku Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Constitution": 1,
      "Scale Layering": 1,
      "Recovery Up": 1
    }
  },
  {
    "name": "G. Doshaguma Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1,
      "Hunger Resistance": 2
    }
  },
  {
    "name": "G. Doshaguma Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Iron Skin": 1
    }
  },
  {
    "name": "G. Doshaguma Braces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1,
      "Iron Skin": 2
    }
  },
  {
    "name": "G. Doshaguma Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 2,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "G. Doshaguma Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Guardian's Pulse": 1,
      "Doshaguma's Might": 1,
      "Heroics": 1
    }
  },
  {
    "name": "Rey Sandhelm β",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Evade Extender": 1,
      "Latent Power": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Rey Sandmail β",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Stamina Surge": 1,
      "Rey Dau's Voltage": 1,
      "Maximum Might": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Rey Sandbraces β",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Latent Power": 2,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Rey Sandcoil β",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Stamina Surge": 1,
      "Rey Dau's Voltage": 1,
      "Stun Resistance": 2,
      "Lord's Fury": 1
    }
  },
  {
    "name": "Rey Sandgreaves β",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Rey Dau's Voltage": 1,
      "Latent Power": 1,
      "Lord's Fury": 1
    }
  },
  {
    "name": "G. Ebony Helm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Mail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Ebony Odogaron's Power": 1,
      "Bleeding Resistance": 1
    }
  },
  {
    "name": "G. Ebony Braces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Coil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1,
      "Bleeding Resistance": 1
    }
  },
  {
    "name": "G. Ebony Greaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Guardian's Pulse": 1,
      "Ebony Odogaron's Power": 1,
      "Bleeding Resistance": 1
    }
  },
  {
    "name": "High Metal Helm α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Stun Resistance": 3,
      "Partbreaker": 1
    }
  },
  {
    "name": "High Metal Mail α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Partbreaker": 1,
      "Iron Skin": 3
    }
  },
  {
    "name": "High Metal Braces α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Blast Resistance": 3,
      "Partbreaker": 1
    }
  },
  {
    "name": "High Metal Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Bombardier": 3,
      "Aquatic/Oilsilt Mobility": 2
    }
  },
  {
    "name": "High Metal Greaves α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Flinch Free": 3,
      "Bleeding Resistance": 3
    }
  },
  {
    "name": "Hope Mask α",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Divine Blessing": 2
    }
  },
  {
    "name": "Hope Mail α",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Poison Resistance": 1
    }
  },
  {
    "name": "Hope Vambraces α",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Sleep Resistance": 1
    }
  },
  {
    "name": "Hope Coil α",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Stun Resistance": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Hope Greaves α",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Stun Resistance": 2
    }
  },
  {
    "name": "Conga Helm",
    "slot": "head",
    "defense": 8,
    "skills": {
      "Mushroomancer": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Mail",
    "slot": "chest",
    "defense": 8,
    "skills": {
      "Mushroomancer": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Vambraces",
    "slot": "arms",
    "defense": 8,
    "skills": {
      "Stench Resistance": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Coil",
    "slot": "waist",
    "defense": 8,
    "skills": {
      "Stench Resistance": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Conga Greaves",
    "slot": "legs",
    "defense": 8,
    "skills": {
      "Mushroomancer": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Nerscylla Helm",
    "slot": "head",
    "defense": 20,
    "skills": {
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Mail",
    "slot": "chest",
    "defense": 20,
    "skills": {
      "Poison Resistance": 1,
      "Bind Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Vambraces",
    "slot": "arms",
    "defense": 20,
    "skills": {
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Coil",
    "slot": "waist",
    "defense": 20,
    "skills": {
      "Sleep Resistance": 1,
      "Bind Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Greaves",
    "slot": "legs",
    "defense": 20,
    "skills": {
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Vespoid Helm β",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Vespoid Mail β",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Vespoid Vambraces β",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Vespoid Coil β",
    "slot": "waist",
    "defense": 32,
    "skills": {
      "Paralysis Resistance": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Vespoid Greaves β",
    "slot": "legs",
    "defense": 32,
    "skills": {
      "Survival Expert": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Bulaqchi Specs β",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Entomologist": 1,
      "Neopteron Camouflage": 1
    }
  },
  {
    "name": "Death Stench Brain α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Ambush": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Death Stench Muscle α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Ambush": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Death Stench Grip α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Ambush": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Death Stench Bowels α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Resentment": 1,
      "Intimidator": 2
    }
  },
  {
    "name": "Death Stench Heel α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Stun Resistance": 2,
      "Resentment": 1
    }
  },
  {
    "name": "Doshaguma Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Doshaguma's Might": 1,
      "Stun Resistance": 1,
      "Free Meal": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Stamina Surge": 1,
      "Doshaguma's Might": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Braces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Stamina Surge": 1,
      "Doshaguma's Might": 1,
      "Stun Resistance": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Doshaguma's Might": 1,
      "Latent Power": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Doshaguma Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Recovery Up": 2,
      "Doshaguma's Might": 1,
      "Free Meal": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Battle Helm α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Stamina Surge": 2
    }
  },
  {
    "name": "Battle Mail α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Sleep Resistance": 2,
      "Hunger Resistance": 3
    }
  },
  {
    "name": "Battle Vambraces α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Free Meal": 3
    }
  },
  {
    "name": "Battle Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Item Prolonger": 3,
      "Imparted Wisdom": 1,
      "Bind Resistance": 2
    }
  },
  {
    "name": "Battle Greaves α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Constitution": 2,
      "Imparted Wisdom": 1,
      "Marathon Runner": 3
    }
  },
  {
    "name": "King Beetle Vertex α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Sleep Resistance": 1,
      "Foray": 1,
      "Heroics": 1
    }
  },
  {
    "name": "King Beetle Thorax α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Foray": 1,
      "Heroics": 1,
      "Paralysis Resistance": 1
    }
  },
  {
    "name": "King Beetle Brachia α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Foray": 1,
      "Heroics": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "King Beetle Elytra α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Flayer": 1,
      "Heroics": 1,
      "Paralysis Resistance": 1
    }
  },
  {
    "name": "King Beetle Crura α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Flayer": 1,
      "Heroics": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Hirabami Headdress β",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Hirabami Mail β",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1,
      "Ice Resistance": 1
    }
  },
  {
    "name": "Hirabami Vambraces β",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Hirabami Coil β",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1
    }
  },
  {
    "name": "Hirabami Greaves β",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Scale Layering": 1,
      "Peak Performance": 1
    }
  },
  {
    "name": "G. Arkveld Helm β",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Guardian's Protection": 1,
      "Guardian Arkveld's Vitality": 1,
      "Flayer": 1,
      "Partbreaker": 1
    }
  },
  {
    "name": "G. Arkveld Mail β",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Guardian's Protection": 1,
      "Guardian Arkveld's Vitality": 1,
      "Flayer": 1,
      "Blight Resistance": 2
    }
  },
  {
    "name": "G. Arkveld Vambraces β",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Guardian's Protection": 1,
      "Guardian Arkveld's Vitality": 1,
      "Weakness Exploit": 2
    }
  },
  {
    "name": "G. Arkveld Coil β",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Guardian's Protection": 1,
      "Guardian Arkveld's Vitality": 1,
      "Flayer": 2
    }
  },
  {
    "name": "G. Arkveld Greaves β",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Guardian's Protection": 1,
      "Guardian Arkveld's Vitality": 1,
      "Weakness Exploit": 1,
      "Elemental Absorption": 1
    }
  },
  {
    "name": "Udra Mirehelm",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Resentment": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miremail",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Speed Eating": 1,
      "Resentment": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirebraces",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Speed Eating": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirecoil",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Resentment": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miregreaves",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Lord's Favor": 1,
      "Speed Eating": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Rompopolo Helm β",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Rompopolo Mail β",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Poison Resistance": 2
    }
  },
  {
    "name": "Rompopolo Vambraces β",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Earplugs": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Rompopolo Coil β",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Foray": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Rompopolo Greaves β",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Buttery Leathercraft": 1,
      "Wide-Range": 2
    }
  },
  {
    "name": "Nerscylla Helm α",
    "slot": "head",
    "defense": 38,
    "skills": {
      "Poison Resistance": 2,
      "Bind Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Mail α",
    "slot": "chest",
    "defense": 38,
    "skills": {
      "Weakness Exploit": 1,
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Vambraces α",
    "slot": "arms",
    "defense": 38,
    "skills": {
      "Ambush": 1,
      "Poison Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Coil α",
    "slot": "waist",
    "defense": 38,
    "skills": {
      "Sleep Resistance": 2,
      "Bind Resistance": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Nerscylla Greaves α",
    "slot": "legs",
    "defense": 38,
    "skills": {
      "Sleep Resistance": 1,
      "Ambush": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Talioth Vambraces β",
    "slot": "arms",
    "defense": 32,
    "skills": {
      "Leap of Faith": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Udra Mirehelm α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Counterstrike": 1,
      "Resentment": 2,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miremail α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Burst": 1,
      "Resentment": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirebraces α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Counterstrike": 2,
      "Speed Eating": 2,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirecoil α",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Speed Eating": 1,
      "Resentment": 2,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miregreaves α",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Lord's Favor": 1,
      "Windproof": 2,
      "Burst": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Chatacabra Helm",
    "slot": "head",
    "defense": 6,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Mail",
    "slot": "chest",
    "defense": 6,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Vambraces",
    "slot": "arms",
    "defense": 6,
    "skills": {
      "Item Prolonger": 1,
      "Flexible Leathercraft": 1
    }
  },
  {
    "name": "Chatacabra Coil",
    "slot": "waist",
    "defense": 6,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 1
    }
  },
  {
    "name": "Chatacabra Greaves",
    "slot": "legs",
    "defense": 6,
    "skills": {
      "Item Prolonger": 1,
      "Flexible Leathercraft": 1
    }
  },
  {
    "name": "Ajarakan Helm",
    "slot": "head",
    "defense": 24,
    "skills": {
      "Bombardier": 1,
      "Partbreaker": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Mail",
    "slot": "chest",
    "defense": 24,
    "skills": {
      "Partbreaker": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Vambraces",
    "slot": "arms",
    "defense": 24,
    "skills": {
      "Bombardier": 1,
      "Cliffhanger": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Coil",
    "slot": "waist",
    "defense": 24,
    "skills": {
      "Bombardier": 1,
      "Blast Resistance": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Greaves",
    "slot": "legs",
    "defense": 24,
    "skills": {
      "Blast Resistance": 1,
      "Partbreaker": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Kranodath Mail β",
    "slot": "chest",
    "defense": 32,
    "skills": {
      "Scale Layering": 1,
      "Flinch Free": 2
    }
  },
  {
    "name": "Ajarakan Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Bombardier": 1,
      "Alluring Pelt": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Ajarakan Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Resentment": 2
    }
  },
  {
    "name": "Ajarakan Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Bombardier": 1,
      "Alluring Pelt": 1,
      "Partbreaker": 1
    }
  },
  {
    "name": "Ajarakan Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Blast Resistance": 1,
      "Partbreaker": 2
    }
  },
  {
    "name": "Ajarakan Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Alluring Pelt": 1,
      "Partbreaker": 2
    }
  },
  {
    "name": "G. Fulgur Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Coalescence": 1,
      "Guardian's Pulse": 1,
      "Agitator": 2
    }
  },
  {
    "name": "G. Fulgur Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Coalescence": 1,
      "Guardian's Pulse": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "G. Fulgur Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Guardian's Pulse": 1,
      "Maximum Might": 1,
      "Agitator": 1
    }
  },
  {
    "name": "G. Fulgur Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Guardian's Pulse": 1,
      "Stamina Surge": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "G. Fulgur Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Coalescence": 1,
      "Guardian's Pulse": 1,
      "Stamina Surge": 2
    }
  },
  {
    "name": "G. Ebony Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Earplugs": 1,
      "Burst": 2,
      "Ebony Odogaron's Power": 1
    }
  },
  {
    "name": "G. Ebony Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Earplugs": 1,
      "Ebony Odogaron's Power": 1,
      "Bleeding Resistance": 2
    }
  },
  {
    "name": "G. Ebony Braces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Burst": 2,
      "Ebony Odogaron's Power": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "G. Ebony Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Burst": 1,
      "Ebony Odogaron's Power": 1,
      "Bleeding Resistance": 1
    }
  },
  {
    "name": "G. Ebony Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Pulse": 1,
      "Earplugs": 1,
      "Ebony Odogaron's Power": 1,
      "Divine Blessing": 2
    }
  },
  {
    "name": "Artian Helm α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Flayer": 1,
      "Earplugs": 1
    }
  },
  {
    "name": "Artian Mail α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Flayer": 1,
      "Adaptability": 1
    }
  },
  {
    "name": "Artian Vambraces α",
    "slot": "arms",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Flayer": 1,
      "Blight Resistance": 2
    }
  },
  {
    "name": "Artian Coil α",
    "slot": "waist",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Windproof": 2,
      "Flayer": 1
    }
  },
  {
    "name": "Artian Greaves α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Guardian's Protection": 1,
      "Flayer": 1,
      "Tremor Resistance": 2
    }
  },
  {
    "name": "Arkvulcan Helm β",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Arkveld's Hunger": 1,
      "Alluring Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Arkvulcan Mail β",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Arkveld's Hunger": 1,
      "Weakness Exploit": 1,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Arkvulcan Vambraces β",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Arkveld's Hunger": 1,
      "Alluring Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Arkvulcan Coil β",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Recovery Speed": 1,
      "Arkveld's Hunger": 1,
      "Weakness Exploit": 2,
      "Alluring Pelt": 1
    }
  },
  {
    "name": "Arkvulcan Greaves β",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Quick Sheathe": 1,
      "Arkveld's Hunger": 1,
      "Alluring Pelt": 1,
      "Convert Element": 1
    }
  },
  {
    "name": "Balahara Helm",
    "slot": "head",
    "defense": 12,
    "skills": {
      "Scaling Prowess": 1,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Balahara Mail",
    "slot": "chest",
    "defense": 12,
    "skills": {
      "Quick Sheathe": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Vambraces",
    "slot": "arms",
    "defense": 12,
    "skills": {
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Coil",
    "slot": "waist",
    "defense": 12,
    "skills": {
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Balahara Greaves",
    "slot": "legs",
    "defense": 12,
    "skills": {
      "Evade Extender": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Bulaqchi Specs α",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Weakness Exploit": 1,
      "Entomologist": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "G. Fulgur Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Fulgur Anjanath's Will": 1,
      "Agitator": 2
    }
  },
  {
    "name": "G. Fulgur Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Fulgur Anjanath's Will": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "G. Fulgur Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Fulgur Anjanath's Will": 1,
      "Maximum Might": 1
    }
  },
  {
    "name": "G. Fulgur Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Fulgur Anjanath's Will": 1,
      "Stamina Surge": 1
    }
  },
  {
    "name": "G. Fulgur Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Guardian's Protection": 1,
      "Fulgur Anjanath's Will": 1,
      "Coalescence": 1,
      "Stamina Surge": 1
    }
  },
  {
    "name": "Piragill Greaves",
    "slot": "legs",
    "defense": 4,
    "skills": {
      "Flexible Leathercraft": 1,
      "Water Resistance": 1
    }
  },
  {
    "name": "Rathalos Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Constitution": 1,
      "Rathalos's Flare": 1,
      "Evade Window": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathalos Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Constitution": 1,
      "Rathalos's Flare": 1,
      "Adrenaline Rush": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathalos Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Constitution": 2,
      "Rathalos's Flare": 1,
      "Evade Window": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathalos Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Rathalos's Flare": 1,
      "Evade Window": 1,
      "Adrenaline Rush": 2,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Rathalos Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Rathalos's Flare": 1,
      "Evade Window": 2,
      "Adrenaline Rush": 1,
      "Scaling Prowess": 1
    }
  },
  {
    "name": "Xu Wu Helm β",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Buttery Leathercraft": 1,
      "Adrenaline Rush": 2
    }
  },
  {
    "name": "Xu Wu Mail β",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Heroics": 3,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Xu Wu Vambraces β",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Earplugs": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Xu Wu Coil β",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Earplugs": 1,
      "Heroics": 1,
      "Buttery Leathercraft": 1
    }
  },
  {
    "name": "Xu Wu Greaves β",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Buttery Leathercraft": 1,
      "Adrenaline Rush": 1
    }
  },
  {
    "name": "Leather Headgear α",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Botanist": 2
    }
  },
  {
    "name": "Leather Mail α",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Item Prolonger": 1,
      "Botanist": 1
    }
  },
  {
    "name": "Leather Gloves α",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Botanist": 1,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Leather Belt α",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Leather Pants α",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Item Prolonger": 1,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Azuz Headdress α",
    "slot": "head",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Maximum Might": 2
    }
  },
  {
    "name": "Azuz Apron α",
    "slot": "chest",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Heroics": 3
    }
  },
  {
    "name": "Azuz Pants α",
    "slot": "legs",
    "defense": 44,
    "skills": {
      "Imparted Wisdom": 1,
      "Geologist": 3
    }
  },
  {
    "name": "Damascus Helm α",
    "slot": "head",
    "defense": 56,
    "skills": {
      "Wide-Range": 1,
      "Divine Blessing": 2
    }
  },
  {
    "name": "Damascus Mail α",
    "slot": "chest",
    "defense": 56,
    "skills": {
      "Recovery Up": 2,
      "Wide-Range": 1
    }
  },
  {
    "name": "Damascus Vambraces α",
    "slot": "arms",
    "defense": 56,
    "skills": {
      "Wide-Range": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Damascus Coil α",
    "slot": "waist",
    "defense": 56,
    "skills": {
      "Recovery Up": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Damascus Greaves α",
    "slot": "legs",
    "defense": 56,
    "skills": {
      "Item Prolonger": 2,
      "Wide-Range": 1
    }
  },
  {
    "name": "Ajarakan Helm α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Bombardier": 1,
      "Resentment": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Mail α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Blast Resistance": 1,
      "Resentment": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Vambraces α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Bombardier": 2,
      "Partbreaker": 1,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Coil α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Blast Resistance": 2,
      "Partbreaker": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Ajarakan Greaves α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Resentment": 1,
      "Partbreaker": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Gore Helm β",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Coalescence": 1,
      "Scale Layering": 1,
      "Evade Window": 1,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Gore Mail β",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 2,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Gore Vambraces β",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Constitution": 1,
      "Scale Layering": 1,
      "Evade Window": 1,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Gore Coil β",
    "slot": "waist",
    "defense": 60,
    "skills": {
      "Constitution": 2,
      "Scale Layering": 1,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Gore Greaves β",
    "slot": "legs",
    "defense": 60,
    "skills": {
      "Scale Layering": 1,
      "Antivirus": 1,
      "Gore Magala's Tyranny": 1,
      "Flinch Free": 1
    }
  },
  {
    "name": "Chainmail Headgear α",
    "slot": "head",
    "defense": 26,
    "skills": {
      "Geologist": 1
    }
  },
  {
    "name": "Chainmail Armor α",
    "slot": "chest",
    "defense": 26,
    "skills": {
      "Geologist": 1,
      "Ice Resistance": 1
    }
  },
  {
    "name": "Chainmail Gloves α",
    "slot": "arms",
    "defense": 26,
    "skills": {
      "Recovery Speed": 1,
      "Geologist": 1
    }
  },
  {
    "name": "Chainmail Belt α",
    "slot": "waist",
    "defense": 26,
    "skills": {
      "Recovery Speed": 1,
      "Ice Resistance": 1
    }
  },
  {
    "name": "Chainmail Pants α",
    "slot": "legs",
    "defense": 26,
    "skills": {
      "Recovery Speed": 1
    }
  },
  {
    "name": "Rompopolo Helm",
    "slot": "head",
    "defense": 18,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Rompopolo Mail",
    "slot": "chest",
    "defense": 18,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Rompopolo Vambraces",
    "slot": "arms",
    "defense": 18,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Rompopolo Coil",
    "slot": "waist",
    "defense": 18,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Rompopolo Greaves",
    "slot": "legs",
    "defense": 18,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Comaqchi Accessory α",
    "slot": "head",
    "defense": 32,
    "skills": {
      "Sleep Resistance": 2,
      "Foray": 1,
      "Neopteron Alert": 1
    }
  },
  {
    "name": "Dragonking Eyepatch α",
    "slot": "head",
    "defense": 60,
    "skills": {
      "Counterstrike": 3
    }
  },
  {
    "name": "Rompopolo Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 2
    }
  },
  {
    "name": "Rompopolo Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Wide-Range": 1,
      "Poison Resistance": 2
    }
  },
  {
    "name": "Rompopolo Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Earplugs": 1,
      "Poison Resistance": 1
    }
  },
  {
    "name": "Rompopolo Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Foray": 1,
      "Wide-Range": 1
    }
  },
  {
    "name": "Rompopolo Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Flexible Leathercraft": 1,
      "Earplugs": 1,
      "Wide-Range": 2
    }
  },
  {
    "name": "Demon Prayer Beads α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Partbreaker": 1,
      "Master of the Fist": 1
    }
  },
  {
    "name": "Demon Garb α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Heroics": 3,
      "Master of the Fist": 1
    }
  },
  {
    "name": "Demon Arm Wraps α",
    "slot": "arms",
    "defense": 48,
    "skills": {
      "Partbreaker": 1,
      "Master of the Fist": 1
    }
  },
  {
    "name": "Demon Belt α",
    "slot": "waist",
    "defense": 48,
    "skills": {
      "Evade Window": 2,
      "Master of the Fist": 1
    }
  },
  {
    "name": "Demon Pants α",
    "slot": "legs",
    "defense": 48,
    "skills": {
      "Partbreaker": 1,
      "Master of the Fist": 1
    }
  },
  {
    "name": "Faux Felyne α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Palico Rally": 5
    }
  },
  {
    "name": "Regios Helm β",
    "slot": "head",
    "defense": 64,
    "skills": {
      "Scale Layering": 1,
      "Adrenaline Rush": 1,
      "Bleeding Resistance": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Mail β",
    "slot": "chest",
    "defense": 64,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 2,
      "Agitator": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Vambraces β",
    "slot": "arms",
    "defense": 64,
    "skills": {
      "Scale Layering": 1,
      "Adrenaline Rush": 2,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Coil β",
    "slot": "waist",
    "defense": 64,
    "skills": {
      "Scale Layering": 1,
      "Evade Window": 1,
      "Agitator": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Greaves β",
    "slot": "legs",
    "defense": 64,
    "skills": {
      "Scale Layering": 1,
      "Adrenaline Rush": 2,
      "Agitator": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Half Rim Glasses α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Wide-Range": 5
    }
  },
  {
    "name": "Afi Crown α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Bombardier": 2,
      "Festival Spirit": 1,
      "Fire Resistance": 2,
      "Flamefete Prayer": 1
    }
  },
  {
    "name": "Afi Top α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Heroics": 1,
      "Burst": 1,
      "Flamefete Prayer": 1
    }
  },
  {
    "name": "Afi Armguards α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Burst": 2,
      "Flamefete Prayer": 1
    }
  },
  {
    "name": "Afi Wrap α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Burst": 1,
      "Blast Resistance": 2,
      "Fire Resistance": 1,
      "Flamefete Prayer": 1
    }
  },
  {
    "name": "Afi Sandals α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Bombardier": 1,
      "Festival Spirit": 1,
      "Burst": 1,
      "Blast Resistance": 1,
      "Flamefete Prayer": 1
    }
  },
  {
    "name": "Hawkheart Jacket α",
    "slot": "chest",
    "defense": 48,
    "skills": {
      "Constitution": 4,
      "Quick Sheathe": 2
    }
  },
  {
    "name": "Toe Bean Mittens α",
    "slot": "arms",
    "defense": 60,
    "skills": {
      "Item Prolonger": 3,
      "Bombardier": 3
    }
  },
  {
    "name": "Pinion Necklace α",
    "slot": "chest",
    "defense": 60,
    "skills": {
      "Heroics": 2,
      "Agitator": 1
    }
  },
  {
    "name": "Doshagumask α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Recovery Up": 1,
      "Stamina Surge": 1,
      "Doshaguma's Might": 1,
      "Latent Power": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Lagiacrus Helm β",
    "slot": "head",
    "defense": 64,
    "skills": {
      "Buttery Leathercraft": 1,
      "Maximum Might": 2,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Mail β",
    "slot": "chest",
    "defense": 64,
    "skills": {
      "Weakness Exploit": 1,
      "Stamina Surge": 1,
      "Buttery Leathercraft": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Braces β",
    "slot": "arms",
    "defense": 64,
    "skills": {
      "Weakness Exploit": 1,
      "Stamina Surge": 2,
      "Buttery Leathercraft": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Coil β",
    "slot": "waist",
    "defense": 64,
    "skills": {
      "Weakness Exploit": 1,
      "Buttery Leathercraft": 1,
      "Maximum Might": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Greaves β",
    "slot": "legs",
    "defense": 64,
    "skills": {
      "Weakness Exploit": 2,
      "Buttery Leathercraft": 1,
      "Latent Power": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Duna Wildhelm γ",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Earplugs": 1,
      "Lord's Soul": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Duna Wildmail γ",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Earplugs": 2,
      "Lord's Soul": 1,
      "Uth Duna's Cover": 1,
      "Peak Performance": 3
    }
  },
  {
    "name": "Duna Wildbraces γ",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Tool Specialist": 3,
      "Lord's Soul": 1,
      "Agitator": 1,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildcoil γ",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Tool Specialist": 2,
      "Lord's Soul": 1,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Duna Wildgreaves γ",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Quick Sheathe": 3,
      "Lord's Soul": 1,
      "Agitator": 1,
      "Uth Duna's Cover": 1
    }
  },
  {
    "name": "Lovely Shades α",
    "slot": "head",
    "defense": 48,
    "skills": {
      "Mushroomancer": 3
    }
  },
  {
    "name": "Lagiacrus Helm α",
    "slot": "head",
    "defense": 64,
    "skills": {
      "Flexible Leathercraft": 1,
      "Maximum Might": 2,
      "Latent Power": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Mail α",
    "slot": "chest",
    "defense": 64,
    "skills": {
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 1,
      "Stamina Surge": 1,
      "Thunder Resistance": 2,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Braces α",
    "slot": "arms",
    "defense": 64,
    "skills": {
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 1,
      "Stamina Surge": 2,
      "Aquatic/Oilsilt Mobility": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Coil α",
    "slot": "waist",
    "defense": 64,
    "skills": {
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Maximum Might": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Lagiacrus Greaves α",
    "slot": "legs",
    "defense": 64,
    "skills": {
      "Flexible Leathercraft": 1,
      "Weakness Exploit": 2,
      "Latent Power": 1,
      "Thunder Resistance": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Diver's Mask α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Ambush": 2,
      "Festival Spirit": 1
    }
  },
  {
    "name": "Diver's Suit α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Leap of Faith": 1,
      "Festival Spirit": 1,
      "Hunger Resistance": 2
    }
  },
  {
    "name": "Diver's Braces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Marathon Runner": 2,
      "Ambush": 1,
      "Festival Spirit": 1
    }
  },
  {
    "name": "Diver's Belt α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Aquatic/Oilsilt Mobility": 1,
      "Festival Spirit": 1,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Diver's Boots α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Marathon Runner": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Festival Spirit": 1
    }
  },
  {
    "name": "Regios Helm α",
    "slot": "head",
    "defense": 64,
    "skills": {
      "Counterstrike": 1,
      "Adrenaline Rush": 1,
      "Scaling Prowess": 1,
      "Bleeding Resistance": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Mail α",
    "slot": "chest",
    "defense": 64,
    "skills": {
      "Evade Window": 2,
      "Counterstrike": 1,
      "Scaling Prowess": 1,
      "Agitator": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Vambraces α",
    "slot": "arms",
    "defense": 64,
    "skills": {
      "Evade Extender": 1,
      "Adrenaline Rush": 2,
      "Scaling Prowess": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Coil α",
    "slot": "waist",
    "defense": 64,
    "skills": {
      "Evade Window": 2,
      "Scaling Prowess": 1,
      "Agitator": 1,
      "Bleeding Resistance": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Regios Greaves α",
    "slot": "legs",
    "defense": 64,
    "skills": {
      "Adrenaline Rush": 2,
      "Scaling Prowess": 1,
      "Agitator": 1,
      "Bleeding Resistance": 1,
      "Seregios's Tenacity": 1
    }
  },
  {
    "name": "Harvest Flor α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Botanist": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Harvest Tronco α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Mushroomancer": 2,
      "Festival Spirit": 1,
      "Resentment": 1
    }
  },
  {
    "name": "Harvest Trama α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Constitution": 2,
      "Mushroomancer": 1,
      "Festival Spirit": 1,
      "Free Meal": 2
    }
  },
  {
    "name": "Harvest Hoja α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Constitution": 1,
      "Festival Spirit": 1,
      "Free Meal": 1,
      "Botanist": 1
    }
  },
  {
    "name": "Harvest Raiz α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Constitution": 2,
      "Festival Spirit": 1,
      "Botanist": 2
    }
  },
  {
    "name": "Omega Ear Cuffs α",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Weakness Exploit": 1,
      "Divine Blessing": 1,
      "Omega Resonance": 1
    }
  },
  {
    "name": "Omega Suit α",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Partbreaker": 2,
      "Omega Resonance": 1
    }
  },
  {
    "name": "Omega Vambraces α",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Divine Blessing": 1,
      "Agitator": 1,
      "Omega Resonance": 1
    }
  },
  {
    "name": "Omega Accessory α",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Burst": 1,
      "Divine Blessing": 1,
      "Omega Resonance": 1
    }
  },
  {
    "name": "Omega Boots α",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Evade Window": 2,
      "Omega Resonance": 1
    }
  },
  {
    "name": "Skull Mask α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Earplugs": 3,
      "Intimidator": 3
    }
  },
  {
    "name": "Gelidron Mask α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 2,
      "Free Meal": 1,
      "Hunger Resistance": 1
    }
  },
  {
    "name": "Gelidron Backpack α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Flexible Leathercraft": 1,
      "Speed Eating": 1,
      "Free Meal": 2,
      "Hunger Resistance": 2
    }
  },
  {
    "name": "Udra Mirehelm γ",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Burst": 3,
      "Lord's Soul": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miremail γ",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Counterstrike": 2,
      "Lord's Soul": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirebraces γ",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Resentment": 3,
      "Lord's Soul": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Mirecoil γ",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Ambush": 1,
      "Burst": 2,
      "Lord's Soul": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Udra Miregreaves γ",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Counterstrike": 1,
      "Speed Eating": 3,
      "Resentment": 2,
      "Lord's Soul": 1,
      "Nu Udra's Mutiny": 1
    }
  },
  {
    "name": "Bale Burgeonet α",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Maximum Might": 2,
      "Resentment": 2,
      "Soul of the Dark Knight": 1
    }
  },
  {
    "name": "Bale Cuirass α",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Quick Sheathe": 2,
      "Latent Power": 2,
      "Soul of the Dark Knight": 1
    }
  },
  {
    "name": "Bale Gauntlets α",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Maximum Might": 1,
      "Resentment": 1,
      "Latent Power": 1,
      "Soul of the Dark Knight": 1
    }
  },
  {
    "name": "Bale Flanchard α",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Constitution": 2,
      "Resentment": 1,
      "Soul of the Dark Knight": 1
    }
  },
  {
    "name": "Bale Sollerets α",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Resentment": 1,
      "Latent Power": 2,
      "Soul of the Dark Knight": 1
    }
  },
  {
    "name": "Kitten Frames α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Ambush": 3,
      "Jump Master": 1,
      "Evade Extender": 2
    }
  },
  {
    "name": "Dreamwalker Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Flayer": 1,
      "Ambush": 1,
      "Festival Spirit": 1,
      "Wide-Range": 2,
      "Dreamspell Prayer": 1
    }
  },
  {
    "name": "Dreamwalker Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Flayer": 1,
      "Sleep Resistance": 1,
      "Festival Spirit": 1,
      "Wide-Range": 1,
      "Dreamspell Prayer": 1
    }
  },
  {
    "name": "Dreamwalker Braces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Flayer": 1,
      "Sleep Resistance": 1,
      "Festival Spirit": 1,
      "Dreamspell Prayer": 1
    }
  },
  {
    "name": "Dreamwalker Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Flayer": 1,
      "Ambush": 2,
      "Festival Spirit": 1,
      "Dreamspell Prayer": 1
    }
  },
  {
    "name": "Dreamwalker Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Flayer": 1,
      "Festival Spirit": 1,
      "Wide-Range": 2,
      "Dreamspell Prayer": 1
    }
  },
  {
    "name": "Aviator Shades α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Windproof": 3,
      "Tool Specialist": 2
    }
  },
  {
    "name": "Orion Cap α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Festival Spirit": 1,
      "Flinch Free": 2
    }
  },
  {
    "name": "Orion Vest α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Recovery Up": 1,
      "Windproof": 2,
      "Festival Spirit": 1
    }
  },
  {
    "name": "Orion Vambraces α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Recovery Up": 2,
      "Windproof": 1,
      "Festival Spirit": 1
    }
  },
  {
    "name": "Orion Coat α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Cliffhanger": 1,
      "Festival Spirit": 1,
      "Earplugs": 1
    }
  },
  {
    "name": "Orion Boots α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Festival Spirit": 1,
      "Earplugs": 2,
      "Flinch Free": 1
    }
  },
  {
    "name": "Gogmazios Helm α",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Zoh Shia's Pulse": 1,
      "Elemental Absorption": 2,
      "Peak Performance": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Mail α",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Xu Wu's Vigor": 1,
      "Aquatic/Oilsilt Mobility": 1,
      "Speed Eating": 2,
      "Adrenaline Rush": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Vambraces α",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Fulgur Anjanath's Will": 1,
      "Maximum Might": 2,
      "Agitator": 1,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Coil α",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Burst": 2,
      "Ebony Odogaron's Power": 1,
      "Peak Performance": 1,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Greaves α",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Doshaguma's Might": 1,
      "Agitator": 1,
      "Peak Performance": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Helm β",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Guardian Arkveld's Vitality": 1,
      "Elemental Absorption": 2,
      "Peak Performance": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Mail β",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Aquatic/Oilsilt Mobility": 1,
      "Rathalos's Flare": 1,
      "Speed Eating": 2,
      "Adrenaline Rush": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Vambraces β",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Maximum Might": 2,
      "Blangonga's Spirit": 1,
      "Agitator": 1,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Coil β",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Mizutsune's Prowess": 1,
      "Burst": 2,
      "Peak Performance": 1,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Gogmazios Greaves β",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Gravios's Protection": 1,
      "Agitator": 1,
      "Peak Performance": 2,
      "Gogmapocalypse": 1
    }
  },
  {
    "name": "Eager Wudwud α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Survival Expert": 2,
      "Mushroomancer": 3,
      "Earplugs": 2,
      "Fortifying Pelt": 1
    }
  },
  {
    "name": "Blessed Waistchain α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Constitution": 4,
      "Divine Blessing": 3
    }
  },
  {
    "name": "Dahaad Shardhelm γ",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Foray": 2,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Dahaad Shardmail γ",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Lord's Soul": 1,
      "Agitator": 2
    }
  },
  {
    "name": "Dahaad Shardbraces γ",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Coalescence": 3,
      "Weakness Exploit": 1,
      "Jin Dahaad's Revolt": 1,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Dahaad Shardcoil γ",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Jin Dahaad's Revolt": 1,
      "Lord's Soul": 1,
      "Agitator": 3,
      "Bind Resistance": 2
    }
  },
  {
    "name": "Dahaad Shardgreaves γ",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Weakness Exploit": 2,
      "Jin Dahaad's Revolt": 1,
      "Foray": 1,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Analytic E.Y.E. α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Weakness Exploit": 2
    }
  },
  {
    "name": "Mirror Visor α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Evade Window": 4
    }
  },
  {
    "name": "Ceremonial Helm α",
    "slot": "head",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Divine Blessing": 1,
      "Latent Power": 1,
      "Lumenhymn Prayer": 1
    }
  },
  {
    "name": "Ceremonial Mail α",
    "slot": "chest",
    "defense": 36,
    "skills": {
      "Dragon Resistance": 1,
      "Festival Spirit": 1,
      "Agitator": 1,
      "Convert Element": 1,
      "Lumenhymn Prayer": 1
    }
  },
  {
    "name": "Ceremonial Vambraces α",
    "slot": "arms",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Tool Specialist": 1,
      "Latent Power": 1,
      "Lumenhymn Prayer": 1
    }
  },
  {
    "name": "Ceremonial Coil α",
    "slot": "waist",
    "defense": 36,
    "skills": {
      "Dragon Resistance": 1,
      "Festival Spirit": 1,
      "Divine Blessing": 1,
      "Convert Element": 1,
      "Lumenhymn Prayer": 1
    }
  },
  {
    "name": "Ceremonial Greaves α",
    "slot": "legs",
    "defense": 36,
    "skills": {
      "Festival Spirit": 1,
      "Tool Specialist": 1,
      "Agitator": 1,
      "Lumenhymn Prayer": 1
    }
  },
  {
    "name": "Azure Age Hair α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Constitution": 2,
      "Adrenaline Rush": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Azure Age Haori α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Quick Sheathe": 1,
      "Adrenaline Rush": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Azure Age Sleeve α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Constitution": 1,
      "Adrenaline Rush": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Azure Age Obi α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Quick Sheathe": 2,
      "Adrenaline Rush": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Azure Age Geta α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Constitution": 2,
      "Adrenaline Rush": 1,
      "Latent Power": 1,
      "Fortifying Pelt": 1,
      "Leviathan's Fury": 1
    }
  },
  {
    "name": "Rompomask α",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Counterstrike": 2,
      "Buttery Leathercraft": 1,
      "Resentment": 5
    }
  },
  {
    "name": "Sororal Earrings α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Glory's Favor": 1,
      "Burst": 1,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Sororal Coat α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Stamina Surge": 2,
      "Glory's Favor": 1,
      "Burst": 1,
      "Gore Magala's Tyranny": 1,
      "Partbreaker": 1
    }
  },
  {
    "name": "Sororal Vambraces α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Glory's Favor": 1,
      "Burst": 1,
      "Evade Extender": 1,
      "Gore Magala's Tyranny": 1,
      "Partbreaker": 1
    }
  },
  {
    "name": "Sororal Coil α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Glory's Favor": 1,
      "Burst": 2,
      "Evade Extender": 2,
      "Gore Magala's Tyranny": 1
    }
  },
  {
    "name": "Sororal Boots α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Stamina Surge": 1,
      "Glory's Favor": 1,
      "Gore Magala's Tyranny": 1,
      "Partbreaker": 1
    }
  },
  {
    "name": "Arkvulcan Helm γ",
    "slot": "head",
    "defense": 68,
    "skills": {
      "Arkveld's Hunger": 1,
      "Weakness Exploit": 3,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Arkvulcan Mail γ",
    "slot": "chest",
    "defense": 68,
    "skills": {
      "Arkveld's Hunger": 1,
      "Blight Resistance": 1,
      "Lord's Soul": 1,
      "Convert Element": 3
    }
  },
  {
    "name": "Arkvulcan Vambraces γ",
    "slot": "arms",
    "defense": 68,
    "skills": {
      "Arkveld's Hunger": 1,
      "Flayer": 2,
      "Weakness Exploit": 2,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Arkvulcan Coil γ",
    "slot": "waist",
    "defense": 68,
    "skills": {
      "Arkveld's Hunger": 1,
      "Flayer": 1,
      "Lord's Soul": 1,
      "Elemental Absorption": 3
    }
  },
  {
    "name": "Arkvulcan Greaves γ",
    "slot": "legs",
    "defense": 68,
    "skills": {
      "Arkveld's Hunger": 1,
      "Flayer": 2,
      "Blight Resistance": 2,
      "Lord's Soul": 1
    }
  },
  {
    "name": "Gala Suit Top Hat α",
    "slot": "head",
    "defense": 66,
    "skills": {
      "Item Prolonger": 3,
      "Festival Spirit": 1,
      "Divine Blessing": 2
    }
  },
  {
    "name": "Gala Suit Jacket α",
    "slot": "chest",
    "defense": 66,
    "skills": {
      "Coalescence": 2,
      "Festival Spirit": 1,
      "Divine Blessing": 1
    }
  },
  {
    "name": "Gala Suit Cuffs α",
    "slot": "arms",
    "defense": 66,
    "skills": {
      "Festival Spirit": 1,
      "Maximum Might": 2,
      "Peak Performance": 2
    }
  },
  {
    "name": "Gala Suit Tail α",
    "slot": "waist",
    "defense": 66,
    "skills": {
      "Coalescence": 1,
      "Festival Spirit": 1,
      "Peak Performance": 2
    }
  },
  {
    "name": "Gala Suit Slacks α",
    "slot": "legs",
    "defense": 66,
    "skills": {
      "Festival Spirit": 1,
      "Maximum Might": 1,
      "Peak Performance": 1
    }
  }
];

module.exports = { armorDataset };
