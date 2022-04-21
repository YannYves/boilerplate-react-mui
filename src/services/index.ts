// import { MovieData } from "../types";

const apiEndpoint = "http://?";

//TODO : add useSWR
export const Api = {
  async getSomething(title: string): Promise<any> {
    try {
      const data = await fetch(`${apiEndpoint}`);
      const info = await data.json();

      return info;
    } catch (error) {
      console.log(error, "there was an error while fecthing the data ");
    }
    return;
  },
};
