import express, { Request, Response, Express } from "express";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookieParser from "cookie-parser";

const Secret_Key: string = "myhashedpassword";

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.post("/sigin", (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    throw new Error("Enter the correct fields");
  }

  const payload = {
    user_id: 1,
  };
  const token = jwt.sign({ payload }, Secret_Key, { expiresIn: "1h" });
  console.log("token", token);
  const sessionStorage = res.cookie("_sec_user_auth0", token, {
    httpOnly: true,
  });
  if (sessionStorage) {
    res.status(200).json({
      msg: "sigin sucessfully!",
    });
  }
});

app.get("/user", (req: Request, res: Response) => {
  const token = req.cookies._sec_user_auth0;
  if (!token) {
    throw new Error("Token is empty!");
  }
  const decode = jwt.verify(token, Secret_Key) as JwtPayload;
  res.status(200).json({
    user_id: decode.payload.user_id,
  });
});

app.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("_sec_user_auth0", {
    httpOnly: true,
    secure: false,
  });

  res.status(200).send("Logout sucessfully!");
});
const port: number = 3000;

app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
