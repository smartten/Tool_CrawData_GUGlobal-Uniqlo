
import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const ObjectSchemeMatsukiyo = {
  img: {
    type: String,
  },
  productName: {
    type: String,
  },
  price: [
    {
      type: String,
    },
  ],
  priceInTax: [
    {
      type: String,
    },
  ],
  productDetail: [
    {
      type: String,
    },
  ],
}

export const ObjectScheme = {
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    stateFlags: [
      {
        type: String,
      },
    ],
    name: [
      {
        type: String,
      },
    ],
    price: [
      {
        type: String,
      },
    ],
    priceWithVND: [
      {
        type: String,
      },
    ],
    breadcrumbs: Schema.Types.Mixed,
    careInstruction: {
      type: String
    },
    colors: Schema.Types.Mixed,
    composition: {
      type: String
    },
    designDetail: {
      type: String
    },
    freeInformation: {
      type: String
    },
    genderName: {
      type: String
    },
    genderCategory: {
      type: String
    },
    topCategories: Schema.Types.Mixed,
    images: Schema.Types.Mixed,
    l1Ids: Schema.Types.Mixed,
    longDescription: {
      type: String
    },
    name: {
      type: String
    },
    priceGroup: {
      type: String
    },
    productId: {
      type: String
    },
    productType: {
      type: String
    },
    plds: Schema.Types.Mixed,
    rating: Schema.Types.Mixed,
    representative: Schema.Types.Mixed,
    prices: Schema.Types.Mixed,
    taxPolicy: [
      {
        type: String
      }
    ],
    shortDescription: [
      {
        type: String
      }
    ],
    sizeChartUrl: [
      {
        type: String
      }
    ],
    sizeInformation: [
      {
        type: String
      }
    ],
    sizes : Schema.Types.Mixed,
    washingInformation : {
      type : String
    },
    writeReviewAvailable : {
      type : Boolean
    },
    nextModelProducts : Schema.Types.Mixed,
    tags : Schema.Types.Mixed,
    productType : {
      mainCategory : {
        type : String
      },
      subCategory : {
        type : String
      },
      product : {
        type : String
      }
    }
  }