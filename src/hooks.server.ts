import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Kakao from "@auth/core/providers/kakao";
import {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  KAKAO_ID,
  KAKAO_SECRET,
  SECRET,
} from "$env/static/private";

export const handle = SvelteKitAuth({
  providers: [
    // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
    Kakao({
      clientId: KAKAO_ID,
      clientSecret: KAKAO_SECRET,
    }),
  ],
  secret: SECRET,
});
