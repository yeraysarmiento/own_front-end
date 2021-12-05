export interface User {
  username: string;
  email: string;
  password: string;
  boards: Array<string>;
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
  images: Array<string>;
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
  papers: Array<string>;
}
export interface State {
  isAuthenticated: boolean | any;
  currentUser: User;
  currentBoard: Board | any;
  boards: Array<Board>;
  isLoading: boolean;
}
export interface Logo extends File {
  srcElement: {
    files: Array<any>;
  };
}
