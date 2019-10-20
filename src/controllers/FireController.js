const Fire = require("../models/Fire");
const axios = require("axios");

class FireController {
  async store(req, res) {
    const fire = await Fire.create(req.body);
    console.log(fire);
    return res.json(fire);
  }

  async show(req, res) {
    req.headers = {
      Authorization: "Bearier 5E172F90-F2F1-11E9-83D8-84F3207B60E0"
    };

    const fire = await axios.get(
      "https://nrt4.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/South_America/VIIRS_I_South_America_VNP14IMGTDL_NRT_2019233.txt",
      {
        headers: {
          Authorization: "Bearer 5E172F90-F2F1-11E9-83D8-84F3207B60E0"
        }
      }
    );
    console.log(fire);
    return res.send(fire);
  }
}

module.exports = new FireController();
