import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "royktikal.myshopify.com",
  storefrontAccessToken: "9801c4701fb8b23d032cf9bcbe083625"
});

export { client };
