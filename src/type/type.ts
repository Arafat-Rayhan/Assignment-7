




interface market{
        "market": string,
        "division": string, 
        "min":number,
        "max": number
      }




export interface foodData {
    "id": number,
    "slug": string,
    "nameBn":string,
    "category": string,
    "categoryNameBn": string,
    "categoryIcon":string,
    "unit": string,
    "image": string,
    "today":string,
    "yesterday": number,
    "lastWeek": number,
    "lastMonth": number,
    "change": {
      "dir": string,
      "pct":number
    },
    "markets":market[],
  }  

  