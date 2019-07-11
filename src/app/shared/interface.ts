export interface ILogin {
  username: string;
  password: string;
}
export interface ICategory {
  name: string;
  ballotNumber: number;
  startDate: string;
  endDate: string;
  image: string;
}
export interface IEditCategory {
  categoryId: string;
  name: string;
  ballotNumber: number;
  startDate: string;
  endDate: string;
  image: string;
}
