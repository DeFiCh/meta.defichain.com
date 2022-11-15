module.exports = {
  siteUrl: process.env.SITE_URL || "https://defimetachain.org",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
