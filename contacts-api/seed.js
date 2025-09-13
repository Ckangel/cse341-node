require("dotenv").config();
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const contactsData = [
  {
    firstName: "Alice",
    email: "alice@example.com",
    favoriteColor: "blue",
    birthday: new Date("1990-01-01"),
  },
  {
    firstName: "Bob",
    email: "bob@example.com",
    favoriteColor: "green",
    birthday: new Date("1985-05-15"),
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding");

    await Contact.deleteMany({});
    await Contact.insertMany(contactsData);

    console.log("Seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
