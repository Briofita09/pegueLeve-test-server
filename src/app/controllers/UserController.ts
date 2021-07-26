import { Request, Response } from "express";

class UserController {
  store(req: Request, res: Response) {
    return res.send("ok").json();
  }
}

export default new UserController();
