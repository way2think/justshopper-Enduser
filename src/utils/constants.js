const shipping_charges = {
  countries: {
    India: {
      states: {
        "Tamil Nadu": {
          cities: {
            Chennai: {
              "250g": {
                standard_delivery_charge: 30,
                one_day_delivery_charge: 180,
              },
              "500g": {
                standard_delivery_charge: 35,
                one_day_delivery_charge: 220,
              },
              "1kg": {
                standard_delivery_charge: 40,
                one_day_delivery_charge: "NA",
              },
            },
            others: {
              "250g": {
                standard_delivery_charge: 50,
                one_day_delivery_charge: 180,
              },
              "500g": {
                standard_delivery_charge: 60,
                one_day_delivery_charge: 220,
              },
              "1kg": {
                standard_delivery_charge: 60,
                one_day_delivery_charge: "NA",
              },
            },
          },
        },
        Karnataka: {
          cities: {
            others: {
              "250g": {
                standard_delivery_charge: 90,
                one_day_delivery_charge: "NA",
              },
              "500g": {
                standard_delivery_charge: 110,
                one_day_delivery_charge: "NA",
              },
              "1kg": {
                standard_delivery_charge: 165,
                one_day_delivery_charge: "NA",
              },
            },
          },
        },
        "Andhra Pradesh": {
          cities: {
            others: {
              "250g": {
                standard_delivery_charge: 90,
                one_day_delivery_charge: "NA",
              },
              "500g": {
                standard_delivery_charge: 110,
                one_day_delivery_charge: "NA",
              },
              "1kg": {
                standard_delivery_charge: 165,
                one_day_delivery_charge: "NA",
              },
            },
          },
        },
        Telangana: {
          cities: {
            others: {
              "250g": {
                standard_delivery_charge: 90,
                one_day_delivery_charge: "NA",
              },
              "500g": {
                standard_delivery_charge: 110,
                one_day_delivery_charge: "NA",
              },
              "1kg": {
                standard_delivery_charge: 165,
                one_day_delivery_charge: "NA",
              },
            },
          },
        },
        Kerala: {
          cities: {
            others: {
              "250g": {
                standard_delivery_charge: 90,
                one_day_delivery_charge: "NA",
              },
              "500g": {
                standard_delivery_charge: 110,
                one_day_delivery_charge: "NA",
              },
              "1kg": {
                standard_delivery_charge: 165,
                one_day_delivery_charge: "NA",
              },
            },
          },
        },
        others: {
          "250g": {
            standard_delivery_charge: 120,
            one_day_delivery_charge: "NA",
          },
          "500g": {
            standard_delivery_charge: 150,
            one_day_delivery_charge: "NA",
          },
          "1kg": {
            standard_delivery_charge: 230,
            one_day_delivery_charge: "NA",
          },
        },
      },
    },
  },
};

export { shipping_charges };
