import { csv } from 'd3';
const csvURL = "https://gist.githubusercontent.com/sk-upadhyay/c5dc6a8591f9f935e4c7655653df9e68/raw/gistfile1.csv"
export const getData = async () => {

  const data = await csv(csvURL);
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};