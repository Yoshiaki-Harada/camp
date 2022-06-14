export type HttpGET = (url: string) => Promise<any>;
export const httpGet: HttpGET = async (url: string) => {
  return [
    { name: "牛", type: "meet" },
    { name: "魚", type: "fish" },
    { name: "焼きそば", type: "noodle" },
  ];
};
