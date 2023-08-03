const handler = (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ messsage: "Invalide Email Address" });
      return;
    }
    console.log("userEmail", userEmail);
    res.status(200).json({ message: "signed up" });
  }
};
export default handler;
