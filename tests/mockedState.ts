import { Paper, State } from "@/types/interface";

const mockedState: State = {
  currentUser: {
    username: "loling",
    password: "loling",
    email: "loling@gmail.com",
    boards: [],
  },
  boards: [
    {
      name: "Amallective",
      about: "About me",
      email: "amallective@gmail.com",
      logo: "urlImage",
      category: "Architecture",
      social: {
        instagram: "instagram",
        twitter: "twitter",
        facebook: "facebook",
      },
      papers: ["1", "2"],
    },
    {
      name: "Web2",
      about: "About me",
      email: "web2@gmail.com",
      logo: "urlImage",
      category: "Design",
      social: {
        instagram: "instagram",
        twitter: "twitter",
        facebook: "facebook",
      },
      papers: ["3", "4"],
    },
  ],
  currentBoard: {
    id: 3,
    name: "Amallective",
    about: "About me",
    email: "amallective@gmail.com",
    logo: "urlImage",
    category: "Architecture",
    social: {
      instagram: "instagram",
      twitter: "twitter",
      facebook: "facebook",
    },
    papers: [
      {
        id: "61a28e71454f1d8b8fc54b64",
        title: "Multi-Family building",
        author: "datAE",
        year: 2021,
        published: false,
        type: "Architecture",
        location: "Sant Pere de Ribes, Spain",
        photograph: "Adrià Goula",
        text: "How to integrate a 20-dwelling multi-family building within the old town of Sant Pere de Ribes?\n\nThe project establishes a structural strategy based on load-bearing walls, achieving the integration of the building within the traditional architectures of the historic centre. The structure sets the spatial conditions of the project generating an interior space based on room sequences and defining the shape of the façade. In this sense, orthogonal lintelled windows are used for rooms and arches working under compression for exterior porches, as in the intermediate spaces that characterize the old town.\n\nOn the ground floor, porches allow privacy control between the living rooms and the street, granting direct access to the dwellings without using the staircase. Inside, a naturalized patio creates a collective space achieving quality ground floor dwellings. The finishing of the building is an uncoloured lime mortar where white provides urban mimesis without giving up the depth and chromatic variations of a traditional material, with a slow and 100% manual execution.\n\nIt is a sincere and affordable construction (less than €1,000/m2) that solves the corner through two separate volumes, linked by a connecting walkway. The project organises 20 private rental dwellings of 60m2 around two staircases, combining three typologies: a three-room cross-ventilated house, a one-room house and a two-room duplex on the roof.",
        images: [
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043231890.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233243.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233473.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043234351.png",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043241837.png",
        ],
        deleted: false,
      },
      {
        id: "61a371ffe0abb2828c0bd395",
        title: "Casa Ter",
        author: "MESURA",
        year: 2021,
        published: false,
        type: "Architecture",
        location: "Baix Empordà, Spain",
        photograph: "Salva Lopez",
        text: 'Casa Ter is located in Baix Empordà, an area that functions as an intersection between three natural landscapes: sea, mountain, and field. In order to make this context tangible to its users, the home is made out of two volumes which create three different spaces, each branching out towards one of the surrounding landscapes, touching as little of the natural surroundings as possible.\n\nFollowing the local construction traditions of the region, the walls of Casa Ter are composed of KM0 materials, using a mix of concrete and stones from the local river Ter with ceramics, a material with a long cultural tradition in the neighbouring La Bisbal, where the material makes for one of the main economic activities.\n\nA Mediterranean way of living means living outdoors a lot, due to the pleasant climate throughout the year. In Spain, it’s not uncommon to have an outdoor kitchen or living area, where people spend most of their days together. Ideally, these areas are very connected to the inside of the home, extending the living space, and creating ambiguous spaces, in between indoor and outdoor."',
        images: [
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502602.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502737.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502745.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502781.png",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502882.png",
        ],
        deleted: false,
      },
    ],
  },
  isAuthenticated: true,
  isLoading: false,
  isEditing: false,
  currentPaper: {} as Paper,
};

export default mockedState;
