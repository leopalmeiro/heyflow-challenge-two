export type Data = {
    date: string;
    hasError: boolean;
    fields: Field[];
  };
  
  export type Field = {
    id: string;
    prop: string;
    value: string;
    hasError: boolean;
    fields?: Field;
  };
  
  export const data: Data = {
    date: "2021-10-27T07:49:14.896Z",
    hasError: false,
    fields: [
      {
        id: "4c212130",
        prop: "iban",
        value: "DE81200505501265402568",
        hasError: false,
        fields: {
          id: "4c212130",
          prop: "iban",
          value: "DE81200505501265402568",
          hasError: false,
        },
      },
    ],
  };
  