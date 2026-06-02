export default async function handler(req, res) {
  const FINNHUB_KEY = "d8f5up1r01qub7kg1990d8f5up1r01qub7kg199g";
  const symbol = req.query.symbol || "AMZN";

  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`
  );
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
