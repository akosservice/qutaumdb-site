import { Router } from "express";
import { addSubscriber, getAllSubscribers } from "../storage/newsletterStorage";

const router = Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  const existing = await getAllSubscribers();
  if (existing.includes(email)) {
    return res.status(400).json({ message: "This email is already subscribed" });
  }

  const added = await addSubscriber(email);
  if (!added) {
    return res.status(500).json({ message: "Failed to save subscriber" });
  }

  return res.status(201).json({
    message: "Successfully subscribed!",
    email,
  });
});

export default router;
