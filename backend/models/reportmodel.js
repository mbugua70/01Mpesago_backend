const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining out Schema structure.

const GeneralreportsSchema = new Schema(
  {
    name: {
      type: String,

    },
    phone: {
      type: Number,
    },
    second_name: {
      type: String,
    },
    third_name: {
      type: String
    }
  },
  { timestamps: true }
);

const GeneralReportsSchemaModel = mongoose.model(
  "Report",
  GeneralreportsSchema
);
module.exports = GeneralReportsSchemaModel;
