const available_monday_to_saturday = {
  monday: {
    from: `9am`,
    to: `6pm`,
  },
  tuesday: {
    from: `9am`,
    to: `6pm`,
  },
  wednesday: {
    from: `9am`,
    to: `6pm`,
  },
  thursday: {
    from: `9am`,
    to: `6pm`,
  },
  friday: {
    from: `9am`,
    to: `6pm`,
  },
  saturday: {
    from: `9am`,
    to: `12pm`,
  },
};

export const business_example = {
  client_id: 1,
  name: `Baboom Life`,
  slug: "baboom-life",
  address: "Residencial cumbres de santa tecla casa #20, pasaje 10, pol i-2",
  additional_comments: "frente a parque san jose",
  description: "Somos una empresa de decoracion de interiores",
  date_created: "2020-06-08 20:02:32",
  date_modified: null,
  categories: [
    {
      product_category_id: 1,
      name: "adornos",
      description: "adornos para el hogar",
      products_count: 2,
    },
  ],
  products: [
    {
      product_name: "botella decorada",
      price: 7.0,
      stock: 8,
      description: "una botella de vidrio con decoracion naumTil",
      product_category_id: 1,
      images: [
        {
          product_image_id: 1,
          url:
            "https://cdn-3.expansion.mx/dims4/default/0961ae8/2147483647/strip/true/crop/1244x660+0+0/resize/800x424!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fda%2Fe1%2F204261f7479581c4e8d6c9eedd7e%2Fwhdqw.JPG",
        },
        {
          product_image_id: 2,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwOoYzAuhLlbL1CRpbwlmP4ytpDNocF-Ky54OTeUHoiHCSQ8QY&usqp=CAU",
        },
        {
          product_image_id: 3,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBWhKDvocL7ynJ1FwF8_KBW-P4et1PIr6GOfe6lj58nFjbS5k&s",
        },
        {
          product_image_id: 4,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2boDEbL9Ig2ACah6BSdCiMoIS06apBPAY3Ph_oeubTOHLr9CH&s",
        },
        {
          product_image_id: 5,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EZsRIl2WyOfo2P3fWZ94hcd33zfBnVfXSoaoWgCmj8VoZymi&s",
        },
        {
          product_image_id: 6,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPElIh4TGFjsT8T62EAplYhjpRCot3ERushIOoQZZ2Z2lx3Fi&}s",
        },
      ],
    },
    {
      product_name: "almoadas decoradas",
      price: 4.0,
      stock: 8,
      description: "una decorada con decoracion naumTil",
      product_cateory_id: 1,
      images: [
        {
          product_image_id: 7,
          url:
            "https://www.adetexfoamgroup.com/galeria/productos/almohadas-viscoel%C3%A1sticas_1_1.jpg",
        },
        {
          product_image_id: 8,
          url:
            "https://i.pinimg.com/236x/4a/6f/6c/4a6f6c817a8501de100046aa73519a49.jpg",
        },
        {
          product_image_id: 9,
          url:
            "https://i.pinimg.com/236x/52/93/dd/5293ddc97c1f5fc628c091d54072a31f.jpg",
        },
        {
          product_image_id: 10,
          url: "https://www.orliman.com/wp-content/uploads/OSL3100.jpg",
        },
        {
          product_image_id: 11,
          url:
            "https://cdn.manomano.com/almohada-de-viscoelastica-universal-medidas-almohadas-talla-unica-P-8310440-15371926_1.jpg",
        },
      ],
    },
  ],
  business_settings: {
    delivery_zones: {
      santa_tecla: available_monday_to_saturday,
      merliot: available_monday_to_saturday,
    },
    payment_option: "cash",
    logo:
      "https://s3-us-west-2.amazonaws.com/analytico-prod/client_logos/Kleen-King-logo.jpg",
    pickup_settings: [
      {
        santa_tecla: {
          pickup_id: 1,
          address: "Centro comercial Merliot",
          additional_comment: "porton 8",
          pickup_availability: available_monday_to_saturday,
        },
      },
    ],
  },
};

const aceites = [
  "https://cdn-3.expansion.mx/dims4/default/0961ae8/2147483647/strip/true/crop/1244x660+0+0/resize/800x424!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fda%2Fe1%2F204261f7479581c4e8d6c9eedd7e%2Fwhdqw.JPG",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwOoYzAuhLlbL1CRpbwlmP4ytpDNocF-Ky54OTeUHoiHCSQ8QY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBWhKDvocL7ynJ1FwF8_KBW-P4et1PIr6GOfe6lj58nFjbS5k&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2boDEbL9Ig2ACah6BSdCiMoIS06apBPAY3Ph_oeubTOHLr9CH&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EZsRIl2WyOfo2P3fWZ94hcd33zfBnVfXSoaoWgCmj8VoZymi&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPElIh4TGFjsT8T62EAplYhjpRCot3ERushIOoQZZ2Z2lx3Fi&s",
];

export const almohadas = [
  "https://www.adetexfoamgroup.com/galeria/productos/almohadas-viscoel%C3%A1sticas_1_1.jpg",
  "https://i.pinimg.com/236x/4a/6f/6c/4a6f6c817a8501de100046aa73519a49.jpg",
  "https://i.pinimg.com/236x/52/93/dd/5293ddc97c1f5fc628c091d54072a31f.jpg",
  "https://www.orliman.com/wp-content/uploads/OSL3100.jpg",
  "https://cdn.manomano.com/almohada-de-viscoelastica-universal-medidas-almohadas-talla-unica-P-8310440-15371926_1.jpg",
];
