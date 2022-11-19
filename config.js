{

  "host": "localhost",
    "port": 9007,

      "keyLength": 5,

        "maxLength": 400000,

          "staticMaxAge": 9999999999999999999999999,

            "recompressStaticAssets": true,

              "logging": [
                {
                  "level": "verbose",
                  "type": "Console",
                  "colorize": true
                }
              ],

                "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
          "every": 60000
      }
    }
  },

  "storage": {
    "type": "file"
  },

  "documents": {
    "about": "./about.md"
  }

}
