const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalide Input" });
      return;
    }
    const newComment = {
      id: new Date().toDateString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    console.log("helllo");
    const dummyList = [
      { id: "c1", name: "srikanth", text: "A firts Comment" },
      { id: "c2", name: "Arun", text: "A Second Comment" },
    ];
    res.status(200).json({ comments: dummyList });
  }
 
};
export default handler;
