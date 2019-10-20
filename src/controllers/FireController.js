const Fire = require("../models/Fire");
const axios = require("axios");
const csv = require("csvtojson");

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
    try {
      // const fire = await axios.get(
      //   "https://nrt4.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/South_America/VIIRS_I_South_America_VNP14IMGTDL_NRT_2019233.txt",
      //   {
      //     headers: {
      //       Authorization: "Bearer 5E172F90-F2F1-11E9-83D8-84F3207B60E0"
      //     }
      //   }
      // );
      const csvFilePath =
        "/Users/Danilo/dracarys-backend/csv/VIIRS_I_South_America_VNP14IMGTDL_NRT_2019274.txt";
      // csv()
      //   .fromFile(csvFilePath)
      //   .then(jsonObj => {
      //     console.log(jsonObj);
      //     /**
      //      * [
      //      * 	{a:"1", b:"2", c:"3"},
      //      * 	{a:"4", b:"5". c:"6"}
      //      * ]
      //      */
      //   });

      // Async / await usage
      const jsonArray = await csv().fromFile(csvFilePath);
    } catch (err) {
      console.log(err);
    }

    return res.send({ jsonArray });
  }
}

module.exports = new FireController();
