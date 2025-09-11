const express = require("express");
const cors = require("cors");
const app = express();
const mongodb = require("./db/connect");
const PORT = 8080;
// const port = process.env.PORT || 3000;

app.use(cors());

app.get('/professional', (req, res) => {
  res.json({
    professionalName: "Charles Ajeigbe",
base64Image: "PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEyMCc+Cgk8ZGVmcz4KCQk8cGF0dGVybiBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBpZD0nYycgd2lkdGg9JzYwJyBoZWlnaHQ9JzEyMCcgeD0nMCcgeT0nMCcgdmlld0JveD0nMCAwIDUgMTAnPgoJCQk8cGF0aCBmaWxsLW9wYWNpdHk9JzAnIHN0cm9rZT0nIzI5MjkyOScgc3Ryb2tlLXdpZHRoPScwLjA5JyBkPSdNLTIsMUw3LDEwTS0yLDZMNywxNU0tMiwtNEw3LDUnLz4KCQk8L3BhdHRlcm4+CgkJPHBhdHRlcm4gcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgaWQ9J2MyJyB3aWR0aD0nNjAnIGhlaWdodD0nMTIwJyB4PScxMDAlJyB5PScwJyB2aWV3Qm94PScwIDAgNSAxMCc+CgkJCTxwYXRoIGZpbGwtb3BhY2l0eT0nMCcgc3Ryb2tlPScjMjkyOTI5JyBzdHJva2Utd2lkdGg9JzAuMDknIGQ9J003LDFMLTIsMTBNNyw2TC0yLDE1TTcsLTRMLTIsNScvPgoJCTwvcGF0dGVybj4KCTwvZGVmcz4KCTxyZWN0IHdpZHRoPSc1MCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNjKScvPgoJPHJlY3QgeD0nNTAlJyB3aWR0aD0nNTAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjYzIpJy8+Cjwvc3ZnPg==",
    nameLink: {
      firstName: "Charles",
      url: "https://your-portfolio.com"
    },
    primaryDescription: "Full-stack developer passionate about legacy-minded systems.",
    workDescription1: "Building scalable APIs with MongoDB and secure environment configs.",
    workDescription2: "Crafting emotionally resonant frontend experiences with semantic HTML.",
    linkTitleText: "Connect with me:",
    linkedInLink: {
      text: "LinkedIn",
      link: "http://linkedin.com/in/charles-ajeigbe-0a41b43/"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/ckangel"
    },
    contactText: "Reach out for collaboration or mentorship opportunities."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// app.use("/", require("./routes"));

// mongodb.initDb((err, mongodb) => {
//  if (err) {
//    console.log(err);
//  } else {
//    app.listen(port);
//    console.log(`Connected to DB and listening on ${port}`);
//  }
// });
