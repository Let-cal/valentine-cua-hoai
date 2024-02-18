"use client";
import { useState } from "react";
import Greeting from "./components/greeting";
import LastLetter from "./components/last-letter";
import SecondLetter from "./components/second-letter";
import "./main.scss";

const incorrectPhrases = [
  "là số á nhaaa",
  "=)) thật là bé này , nói số là gợi ý lớn lắm ròi á",
  "thôi được rồi !! để thiếp nói cho nghe :3 dỏng tai mà nghe nè : là 1 ngày",
  "tất nhiên là hong chỉ có ngày rồi =)) baka, có cả tháng năm nữa",
  ":)) còn chưa đoán ra nữa hẻ...trùi ui ,hong phải mật khẩu điện thoại anh đâu",
  "ngoài ngày đó ra còn ngày nào nữa nè :)) ngày nào mà tình yêu ngập tràn á",
  "nói đến thớ lun ròi á :)) ngày mà... tiếng sét ái tình và viên kẹo bất ngờ mà tui còn giữ trong tủ lạnh đó :)",
  "chịu bé lun á :3 ngày anh và em gặp nhau á ",
  "hong biết nữa thì đưa đáp án lun cho nhập nè :) mà thấy được dòng chữ này rồi thì coi chừng tui á :) 26012024 ",
];

export default function Home() {
  const defaultPassword = "26012024";
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inCorrectCount, setInCorrectCount] = useState<number>(0);
  const [isOpenGreeting, setIsOpenGreeting] = useState<boolean>(true);
  const [isOpenSecondLetter, setIsOpenSecondLetter] = useState<boolean>(false);
  const [isOpenLastLetter, setIsOpenLastLetter] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");
  console.log(inputPassword);

  const getIncorrectText = () => {
    return incorrectPhrases[
      Math.min(inCorrectCount, incorrectPhrases.length - 1)
    ];
  };
  const handleSubmit = () => {
    if (inputPassword === defaultPassword) {
      setIsOpenGreeting(false);
      setIsOpenSecondLetter(true);
      setInputError("");
    } else {
      setInputPassword("");
      setInCorrectCount(inCorrectCount + 1);
      setInputError(getIncorrectText());
    }
  };

  return (
    <>
      {isOpenGreeting && (
        <Greeting
          inputError={inputError}
          setInputPassword={setInputPassword}
          inputPassword={inputPassword}
          handleSubmit={handleSubmit}
        />
      )}
      {isOpenSecondLetter && (
        <SecondLetter
          setIsOpenSecondLetter={setIsOpenSecondLetter}
          setIsOpenLastLetter={setIsOpenLastLetter}
        ></SecondLetter>
      )}
      {isOpenLastLetter && <LastLetter></LastLetter>}
    </>
  );
}
