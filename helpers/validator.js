const yup = require("yup");

const newUrlValidation = yup.object({
  shortUrl: yup.string().max(50).required(),

  longUrl: yup.string().required(),

  clicks: yup.number().default(0),

  creatorIP: yup.string().required(),
});

module.exports = {
  newUrlValidation,
};
