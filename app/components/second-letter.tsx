import love from "@/assets/100.gif";
import heart from "@/assets/heart.svg";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface LastLetterProps {
  setIsOpenSecondLetter: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenLastLetter: React.Dispatch<React.SetStateAction<boolean>>;
}
const SecondLetter = ({
  setIsOpenSecondLetter,
  setIsOpenLastLetter,
}: LastLetterProps) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "sine.out" }
    );
  }, []);

  const handleNext = () => {
    setIsOpenSecondLetter(false);
    setIsOpenLastLetter(true);
  };
  return (
    <div
      ref={ref}
      className="h-full px-4 py-10 w-full flex flex-col items-center bg-[#ecebeb]"
    >
      <div className="flex flex-col items-center gap-4 max-w-[400px] sm:max-w-[1200px]">
        <div className=" flex items-center gap-3">
          <Image src={love} alt="???" className="h-20 w-20"></Image>
          <h1 className="font-semibold font text-2xl">chút lời gởi tới emm</h1>
        </div>
        <div className="mt-5 w-full max-w-[400px] sm:max-w-[1200px] flex flex-col gap-5 ">
          <div className="bg-white flex flex-col gap-2 w-full  px-4 py-8 rounded-md relative">
            <Image
              src={heart}
              alt="heart beat"
              className="h-10 w-10 absolute left-[-15px] top-[-15px]"
            ></Image>
            <div className="text-sm font-medium text-red-400 font">Tiêu đề</div>
            <div className="font text-base text-justify">
              Gửi phu quân , người mà thiếp thầm thương trộm nhớ . Hôm này là
              ngày valentine .. à ko.. nếu thiếp code web này chậm quá thì chắc
              hông phải valentine đâu ..Nói chung là ngày đặc biệt đi .. chàng
              mở được cái này thì đối với thiếp là đặc biệt ròi
            </div>
            <div className="font text-base text-justify">
              Chúc con heo của anh.. có được 1 ngày valentine thật là trọn vẹn
              nhé .. Anh biết là quãng thời gian chúng ta chưa bên nhau được lâu
              .. nên có lẽ khi em nhận được bức thư tình củm này của anh thì có
              lẽ tình cảm của em đối với anh chưa nhiều đâu .. hoặc là thậm chí
              chúng ta chưa thành đôi cơ ...Nhưng anh mong cô bé của anh khi đọc
              được những dòng chữ này thì sẽ thật là hạnh phúc em nhé, để em có
              1 ngày valentine thật là ý nghĩa và .. có thể nói anh muốn cho em
              thấy .. người anh yêu thì anh rất muốn được nhìn thấy em hạnh phúc
              dù chỉ là những ngày tình nhân bình thường và hầu như năm nào em
              cũng trải qua..Dù chỉ là thời gian bên nhau ngắn ngủi .. và có lẽ
              sẽ khó đơm hoa kết trái như người ta .. dẫu biết là thiệt thòi ,
              là yêu anh em sẽ thấy không an toàn và thậm chí em còn lo lắng
              nhiều về cái gọi là tương lai của 2 đứa .. Nhưng em vẫn mạnh dạng
              bày tỏ hạnh phúc .. vẫn nói thích anh, vẫn chọn anh ... vẫn tiếp
              tục cái thứ gọi là tình cảm không chắc chắn này ... Điều đó làm
              anh hạnh phúc lắm em biết không. Nên bản thân anh .. dù có thể
              đang cho em thấy thứ gọi là không chắn chắn .. Nhưng a vẫn sẽ nói
              yêu em hằng ngày ..Và khoảng thời gian bên nhau sẽ không bao giờ
              làm cho em thiệt thòi cả...Sẽ có gắng khiến em hạnh phúc mỗi ngày
              dù cho có về Việt Nam đi chăng nữa ... Có thể về Việt Nam anh sẽ
              phải xa em .. sẽ khiến em chịu những cảm giác mà bản thân tụi mình
              không muốn trải qua chút nào.. Nhưng bản thân anh vẫn sẽ cố làm
              những gì mình có thể .. dù là sẽ cô đơn 1 chút.. không quen 1 chút
              ..những cái mà chúng ta đánh đổi để có thể ở bên nhau .. nhưng mà
              em à..Không biết sao nhưng anh cảm thấy có niềm tin ở chúng ta..
              Nên là ...dựa vào anh 1 chút nhé..Cho anh cơ hội nhé . Yêu em !!!{" "}
            </div>
            <div className="font text-base text-justify">
              P/s: Nhanh đưa toy đi gặp chính thất lẹ lẹ để hạ bệ bã coi nà !!!!
              gái này hong đẹp nhưng mà được cái thông minh á :3
            </div>
            <div className="text-sm flex justify-end w-full font-medium text-red-400 font">
              By your destiny : カット　ラム
            </div>
            <Image
              src={heart}
              alt="heart beat"
              className="h-10 w-10 absolute bottom-[-15px] right-[-15px]"
            ></Image>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={handleNext}
              className=" px-4 py-2 bg-red-500 rounded-md font-medium text-white"
            >
              hếttttt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLetter;
