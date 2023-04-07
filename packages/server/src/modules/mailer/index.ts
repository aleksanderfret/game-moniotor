import nodemailer, { Transporter } from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import environment from 'env/environment';
import {
  Mail,
  MessageData,
  ResetPasswordMail,
  Send,
  SignUpMail,
} from './types';
import EmailTemplate from './enums';
import SignUpConfirmation from './templates/SignUpConfirmation';
import RemoveAccountConfirmation from './templates/RemoveAccountConfirmation';
import ResetPasswordConfirmation from './templates/ResetPasswordConfirmation';
import createMessage from './createMessage';

const {
  GOOGLE_API_USER,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  SENDER_EMAIL,
} = environment;
const templates = {
  [EmailTemplate.SignUp]: SignUpConfirmation,
  [EmailTemplate.RemoveAccount]: RemoveAccountConfirmation,
  [EmailTemplate.ResetPassword]: ResetPasswordConfirmation,
};

const { OAuth2 } = google.auth;
const client = new OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

const getMailer = async (): Promise<
  Transporter<SMTPTransport.SentMessageInfo>
> => {
  const { token } = await client.getAccessToken();
  const accessToken = token ? token : '';

  const mailer = nodemailer.createTransport({
    auth: {
      accessToken,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      type: 'OAUTH2',
      user: GOOGLE_API_USER,
    },
    service: 'gmail',
  });

  return mailer;
};

const sendMessage =
  (send: Send) =>
  <T extends Mail>(template: T[0]) =>
  (data: T[1]) => {
    const mailTemplate = templates[template];

    return send(createMessage(mailTemplate(data)));
  };

const send = async (messageData: MessageData) => {
  const { recipient, subject, html } = messageData;
  const mailer = await getMailer();

  return mailer.sendMail({
    from: SENDER_EMAIL,
    html,
    subject,
    to: recipient,
  });
};

const sendMail = sendMessage(send);

export const sendSignUpConfirmation = sendMail<SignUpMail>(
  EmailTemplate.SignUp
);

export const sendResetPasswordConfirmation = sendMail<ResetPasswordMail>(
  EmailTemplate.ResetPassword
);

export const sendRemoveAccountConfirmation = sendMail<ResetPasswordMail>(
  EmailTemplate.ResetPassword
);
