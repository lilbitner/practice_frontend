type MyObject = { 
  descriptorTitle: string;
  value: string
}

export interface AppState { 
  title: string;
  accountTitle: string;
  descriptorObjects: MyObject[];
}