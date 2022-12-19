
const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const months = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decemnbre",
];

const usersRoles = [
  {
    code: "ADMIN",
    label: "Administrateur",
    access: ["all modules", "back office"],
  },
  {
    code: "PROV",
    label: "Proviseur",
    access: ["all modules", "back office"],
  },
  {
    code: "PA",
    label: "Proviseur-Adjoint",
    access: ["all modules", "back office"],
  },
  {
    code: "DIR",
    label: "Directeur",
    access: ["all modules", "back office"],
  },
  {
    code: "DIRC",
    label: "Directrice",
    access: ["all modules", "back office"],
  },
  { code: "SURV", label: "Survaillant", access: ["all modules"] },
  { code: "SURVE", label: "Survaillante", access: ["all modules"] },
  // {
  //   code: "ACC",
  //   label: "Accueil",
  //   access: [
  //     "Vehicle planning",
  //     "Clients",
  //     "Drivers",
  //     "Vehicles",
  //     "Booking",
  //     "Command",
  //     "Contract",
  //     "Insurance",
  //     "States",
  //   ],
  // },
  // {
  //   code: "COM",
  //   label: "Commercial",
  //   access: [
  //     "Vehicle planning",
  //     "Clients",
  //     "Drivers",
  //     "Vehicles",
  //     "Booking",
  //     "Contract",
  //     "Command",
  //     "Contract",
  //     "Insurance",
  //     "Statistics",
  //   ],
  // },
  // {
  //   code: "CONTRAV",
  //   label: "Contravention",
  //   access: [
  //     "Vehicle planning",
  //     "Clients",
  //     "Drivers",
  //     "Vehicles",
  //     "Contravention",
  //     "Location",
  //     "Contract",
  //   ],
  // },
  // {
  //   code: "FACT",
  //   label: "Facturation",
  //   access: [
  //     "Vehicle planning",
  //     "Clients",
  //     "Vehicles",
  //     "Billing",
  //     "Statistics",
  //   ],
  // },
  // {
  //   code: "COMPT",
  //   label: "Comptable",
  //   access: [
  //     "Vehicle planning",
  //     "Clients",
  //     "Vehicles",
  //     "Billing",
  //     "Statistics",
  //     "Contract",
  //     "Booking",
  //   ],
  // },
  // {
  //   code : "FLOTTE",
  //   label: "Flotte",
  //   access: [
  //     "Vehicles",
  //     "Sinistre",
  //     "Billing",
  //     "Localisation",
  //   ]
  // },
  // {
  //   code : "CONT",
  //   label: "Contentieux",
  //   access:[
  //     "Vehicle planning",
  //     "Clients",
  //     "Vehicles",
  //     "Billing",
  //     "Statistics",
  //   ]
  // },
  // {
  //   code : "STAT",
  //   label: "Statistique",
  //   access:[
  //     "Statistics",
  //     "Vehicles",
  //   ]
  // }
];

const profRoles = [
  {
    code: "PROF",
    label: "Professeur",
  },
  {
    code: "INST",
    label: "Instituteur",
  },
  {
    code: "INST",
    label: "Institutrice",
  },
  {
    code: "MAIT",
    label: "Maître",
  },
  {
    code: "MAIT",
    label: "Maîtresse",
  },
]
const matieres = ["Malagasy", "Philosophie", "Français", "Anglais", "Science-Eco-Social", "Mathématiques", "PC", "SVT", "Histo-Géo"];

const allUsers = ["ADMIN", "DIR", "PROV", "SURV", "ELEV", "PROF"];

const admins = ["ADMIN", "DIR", "PROV", "PA", "SURV"];

const utilisateurPermission = ["ADMIN", "DIR", "PROV", "PA", "SURV"];

export {
  admins,
  usersRoles,
};

export {
  profRoles,
};

export {
  allUsers,
};

export {
  months,
};

export {
  days,
};

export {
  utilisateurPermission,
};

export {
  matieres,
};