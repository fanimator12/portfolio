const categories = [
  { title: ".software( )", url: "software-projects" },
  { title: ".photography( )", url: "photography" },
];

export type Category = {
  title: string;
  url: string;
};
export function getCategories() {
  return categories;
}
