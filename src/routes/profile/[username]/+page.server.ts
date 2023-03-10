import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, fetch }) => {
  // 몽고에서 params.username 으로 데이터 fetch 할 예정
  return {
    username: params.username,
  };
};
