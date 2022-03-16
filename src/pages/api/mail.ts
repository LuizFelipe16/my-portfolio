import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

const MethodsItemLists = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    let transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_USER_EMAIL,
        pass: process.env.NODEMAILER_USER_PASS,
      },
    });

    let infos = {
      from: 'tekoficial@gmail.com', // sender address
      to: "felipefelizatti215@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
    }

    await transporter.sendMail(infos, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado');
      }
    });
  }

  return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
}

export default MethodsItemLists;