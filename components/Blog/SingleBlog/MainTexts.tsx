import Image from "next/image";
import React from "react";

export default function MainTexts() {
  return (
    <div className="max-w-layout mx-auto mt-[77px] mb-[50px] ">
      <p className="font-semibold text-black/90">4 min read</p>
      <div className="flex flex-col lg:flex-row lg:gap-[50px] gap-4 text-[18px] text-black/70">
        <div className=" prose lg:prose-lg">
          <div className="">
            <p>
              Are you thinking about installing a dishwasher to make everyday
              life easier? Or maybe replace the old one with a newer model?
              Whatever the case - installing a new dishwasher or replacing the
              old one - here we go through some common questions that often come
              up when you want to install a new dishwasher. Is it ok to install
              the new dishwasher myself? What is the cost of installing a new
              dishwasher? Where can I go for help installing my dishwasher? Read
              on and we&apos;ll answer your questions as best we can!
            </p>
            <p>
              The first step when looking at the installation of a new
              dishwasher is often the choice of dishwasher. In today&apos;s
              market, there are hundreds if not thousands of different models to
              choose from - and it&apos;s not always the easiest. Of course, you
              want a dishwasher that meets the needs of the home, and ideally it
              should fit in as well. We at JourElite understand that it can be
              difficult to find the right one in the huge selection and are here
              for consultation and advice when you need help. If desired, we
              will of course help with purchases as well.
            </p>
            <p>
              Installing a new dishwasher can be seen as an investment – ​​it is
              not only more efficient to use a dishwasher but also more
              sustainable than washing dishes by hand! Because it uses less
              water than when you wash dishes by hand, it not only saves on the
              environment but also on the wallet! In short – you save time,
              money and the environment by investing in a dishwasher.
            </p>
          </div>
        </div>
        <div className="w-[310px] h-[450px] md:h-[590px] lg:w-[480px] ml-auto mr-auto lg:mr-0 relative md:mt-9">
          <Image alt="basin" src={"/blog/single/main.png"} fill />
          hello
        </div>
      </div>
    </div>
  );
}
