export type TFile = {
  name:string,
  children?:TFile[]
}

export const File:TFile = {
    name:'file',
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: ".bin",
          },
        ],
      },
      {
        name: "public",
        children: [
          {
            name: "src",
            children: [
              {
                name: "assets",
              },
            ],
          },
        ],
      },
      {
        name: "README.md",
      },
      {
        name: "package-lock.json",
      },
    ],
  };