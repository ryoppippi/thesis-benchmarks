import process from 'node:process';

const _successData = {
  id: 252,
  created: new Date(),
  title: "Apple",
  brand: "Sunny Backyard",
  description: "Red apple from Lake Constance",
  price: 89,
  discount: null,
  quantity: 5,
  tags: ["fruit", "red", "round", "sweet", "juicy", "healthy"],
  images: [
    {
      id: 248,
      created: new Date(),
      title: "Close up of an apple on a tree",
      type: "jpg",
      size: 92357232,
      url: "https://www.example.com/images/248",
    },
    {
      id: 295,
      created: new Date(),
      title: "Our apples in the final packaging",
      type: "jpg",
      size: 83247232,
      url: "https://www.example.com/images/295",
    },
    {
      id: 723,
      created: new Date(),
      title: "Our fruit fields at Lake Constance",
      type: "jpg",
      size: 72356345,
      url: "https://www.example.com/images/723",
    },
  ],
  ratings: [
    {
      id: 315,
      stars: 4.5,
      title: "Tastes super delicious",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      images: [
        {
          id: 835,
          created: new Date(),
          title: "The result of our apple pie",
          type: "jpg",
          size: 8247493,
          url: "https://www.example.com/images/835",
        },
      ],
    },
    {
      id: 642,
      stars: 5,
      title: "Very tasty! I will buy them again!",
      text: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
      images: [
        {
          id: 352,
          created: new Date(),
          title: "The fruit salad in a bowl",
          type: "jpg",
          size: 3582543,
          url: "https://www.example.com/images/352",
        },
        {
          id: 465,
          created: new Date(),
          title: "The fruit salad on a plate",
          type: "jpg",
          size: 9824742,
          url: "https://www.example.com/images/465",
        },
      ],
    },
  ],
};

export const successData = process.env.BUNDLE_BENCH === '1' ? {} : _successData;
