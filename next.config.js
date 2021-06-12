const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        BACKEND_URL: process.env.BACKEND_URL,
        USERNAME: process.env.USERNAME_DB,
        PASSWORD: process.env.PASSWORD_DB,
        CLUSTERNAME: process.env.CLUSTERNAME,
        DATABASE: process.env.DATABASE,
      },
    };
  }

  return {
    env: {
      BACKEND_URL: process.env.BACKEND_URL,
      USERNAME: process.env.USERNAME_DB,
      PASSWORD: process.env.PASSWORD_DB,
      CLUSTERNAME: process.env.CLUSTERNAME,
      DATABASE: process.env.DATABASE,
    },
  };
};
