const config = {
    // Backend config
    s3: {
      REGION: "us-west-2",
      BUCKET: "calmemaybe",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "process.env.REACT_APP_API_URL",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_uBfWCPA8l",
      APP_CLIENT_ID: "1ma6032lii3is7bc4k9egdguig",
      IDENTITY_POOL_ID: "us-west-2:adfe12fc-fbaa-4a8b-87a9-015590bfd183",
    },
  };
  
  export default config;