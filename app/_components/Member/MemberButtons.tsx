'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MemberButtons = () => {
  const AUTHORIZE_URL = process.env.NEXT_PUBLIC_OAUTH_KAKAO_AUTHORIZE_URL;
  const REST_API_KEY = process.env.NEXT_PUBLIC_OAUTH_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_OAUTH_KAKAO_REDIRECT_URI;

  function handleKakaoLogin() {
    const kakaoUrl = `${AUTHORIZE_URL}?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    location.href = kakaoUrl;
  }
  return (
    <div className="flex flex-col gap-[1rem]">
      <button
        type="submit"
        className="rounded-lg border border-grey-100 p-[1rem] text-[2rem] font-bold text-grey-100"
      >
        로그인
      </button>
      <div>
        <Link href="/join" className="mr-[0.5rem]">
          <button
            type="button"
            className="rounded-lg border border-grey-100 p-[1rem] text-[2rem] font-bold text-grey-100"
          >
            회원가입
          </button>
        </Link>
        <button
          type="button"
          className="rounded-lg border border-grey-100 p-[1rem] text-[2rem] font-bold text-grey-100"
        >
          아이디찾기/비밀번호찾기
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="relative h-[5rem] w-[90%]"
          onClick={() => handleKakaoLogin()}
        >
          <Image src="/member/kakao/kakao_login.png" fill alt="kakao_login" />
          카카오로그인
        </button>
        <button type="button">구글로그인</button>
        <button type="button">네이버로그인</button>
      </div>
    </div>
  );
};
export default MemberButtons;
