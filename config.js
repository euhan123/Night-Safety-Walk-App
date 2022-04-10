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
      USER_POOL_ID: "us-west-2_M45VizOoN",
      APP_CLIENT_ID: "278q1ffb213ui3f9ip8idlvdp1",
      IDENTITY_POOL_ID: "us-west-2:7053fdd5-6cc4-4251-a2f5-2a8801c338e9",
    },
  };
  
  export default config;