module.exports = {
  siteUrl: process.env.SITE_URL || "https://meta.defichain.com/",
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
