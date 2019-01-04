import UserModel from "../models/user/UserModel";
import { IRegisterInfomation, AsyncController } from "../interfaces";

/** 회원가입 요청을 위한 컨트롤러. */
export const postRegister: AsyncController = async (req, res) => {
  const { name, id, pw, email, phone } = req.body as IRegisterInfomation;
  const userModel = new UserModel();

  const userInfomations = await userModel.selectUser({ id });

  /** 같은 회원 정보가 없으므로 회원가입 조건 만족할 경우의 응답. */
  const hasNotUserInfomation = userInfomations[0] === undefined;
  if (hasNotUserInfomation) {
    await userModel.insertUser({ name, id, pw, email, phone });

    res.statusCode = 200;
    res.statusMessage =
      "[+] Membership registration has been carried out normally.";
    return res.end();
  }

  /** 이미 해당 아이디가 존재할 경우의 응답. */
  res.statusCode = 412;
  res.statusMessage = "[-] ID already exists.";
  res.end();
};
