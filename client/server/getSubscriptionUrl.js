const getSubscriptionUrl = async (ctx, accessToken, shop) => {
    const query = JSON.stringify({
      query: `mutation {
        appSubscriptionCreate(
            name: "Super Duper Plan"
            returnUrl: "${process.env.HOST2}"
            test: true
            lineItems: [
            {
              plan: {
                appUsagePricingDetails: {
                    cappedAmount: { amount: 10, currencyCode: USD }
                    terms: "$1 for 1000 emails"
                }
              }
            }
            {
              plan: {
                appRecurringPricingDetails: {
                    price: { amount: 10, currencyCode: USD }
                }
              }
            }
            ]
          ) {
              userErrors {
                field
                message
              }
              confirmationUrl
              appSubscription {
                id
              }
          }
      }`
    });

    console.log("shop is ", shop)
    console.log("accessToken is ", accessToken)

  
    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: query
    })
  
    const responseJson = await response.json();
    const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
    console.log("confirmationUrl is ", confirmationUrl)
    return ctx.redirect(confirmationUrl)
  };
  
  module.exports = getSubscriptionUrl; 