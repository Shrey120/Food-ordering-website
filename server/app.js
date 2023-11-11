const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NdCYxSERmmQORdUKjHq4k27cYpnzQX38SSeJBmkG9V5z2nwL4vvDEErMvxktvzW0u1VdLcmASALye4azznxdQNS00GbZUSMj4"
);

app.use(express.json());
app.use(cors());

//checkout Api
app.post("/api/create-checkout", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("Server Started");
});
