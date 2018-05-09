const pyReq = require("./python");
const fetch = require("node-fetch");
guardian_path = "https://content.guardianapis.com/";
guardian_key = `?show-fields=bodyText&api-key=${process.env.GUARDIAN_KEY}`;

const dataReq = async (req, res, next) => {
  let articleID = req.body.articleID;
  let result;
  try {
    const g_url = guardian_path + articleID + guardian_key;
    let result = await fetch(g_url);
    let json = await result.json();
    let guardianResponse = json.response.content;
    result = await pyReq("python3", guardianResponse);
    res.send(
      JSON.stringify({
        type: "BACKEND-OUTPUT",
        payload: {
          sectionName: guardianResponse.sectionName,
          webPublicationDate: guardianResponse.webPublicationDate,
          result
        }
      })
    );
  } catch (err) {
    console.log("error", err);
  }

  //res.send(result);
  next();
};

module.exports = dataReq;
