const { response, request } = require("express");
const axios = require("axios");

const getListComics = (req = request, res = response) => {
  const config = {
    method: "get",
    url: "https://comicvine.gamespot.com/api/issues/?api_key=a443db649cece4dd67595f60829804b81e57e75f&format=json",
    headers: {
      Cookie: "device_view=full; satcv=c2b086b0c2d692bede4a6d46ed3071d5",
    },
  };
  axios(config)
    .then((response) => {
      const { data } = response;
      res.json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
};

const getComicDetail = (req = request, res = response) => {
  const { api } = req.body;
  const config = {
    method: "get",
    url: api + "?api_key=a443db649cece4dd67595f60829804b81e57e75f&format=json",
    headers: {
      Cookie: "device_view=full; satcv=c2b086b0c2d692bede4a6d46ed3071d5",
    },
  };
  axios(config)
    .then((response) => {
      const { data } = response;
      res.json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
};

module.exports = {
  getListComics,
  getComicDetail,
};
