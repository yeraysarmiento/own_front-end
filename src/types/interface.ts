export interface User {
  username: string;
  email: string;
  password: string;
  boards: string[];
}

export interface UserRegister {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Paper {
  title: string;
  author: string;
  year: number;
  published: boolean;
  type: string;
  location: string;
  photograph: string;
  text: string;
  images: string[];
  deleted: boolean;
}

export interface Social {
  instagram: string;
  twitter: string;
  facebook: string;
}

export interface Board {
  name: string;
  about: string;
  email: string;
  logo: string;
  category: string;
  social: Social;
  papers: string[];
}
// export interface State {
//   currentUser: User;
//   boards: Board;
//   papers: Paper;
// }
