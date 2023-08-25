export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Acceuil",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Rechercher",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activité",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Creer un BMT",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communauté",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profil",
  },
];

export const profileTabs = [
  { value: "threads", label: "TWT", icon: "/assets/reply.svg" },
  { value: "replies", label: "Commentaires", icon: "/assets/members.svg" },
  { value: "tagged", label: "Identifications", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "TWT", icon: "/assets/reply.svg" },
  { value: "members", label: "Membres", icon: "/assets/members.svg" },
  { value: "requests", label: "Requetes", icon: "/assets/request.svg" },
];
