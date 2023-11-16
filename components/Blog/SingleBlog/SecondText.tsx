import SecondTitle from "@/components/Shared/SecondTitle";
import TextTitle from "@/components/Shared/TextTitle";
import Image from "next/image";
import React from "react";

export default function SecondText() {
  return (
    <div className="flex flex-col gap-[50px] max-w-layout mx-auto">
      <div className="w-full text-[18px] text-black/70 flex flex-col gap-8 ">
        {/* <div className="prose md:prose-lg"> */}
        <p>
          After you have followed all these steps, you are done with the
          installation of your new dishwasher.
        </p>
        <p>
          If something should go wrong during the installation, we recommend
          that you contact a certified plumber to avoid further costs. Since a
          dishwasher has both electrical and water connections close to each
          other, it is extra important to get it right because it can be
          dangerous if something goes wrong.
        </p>
        {/* </div> */}
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:gap-[50px] gap-4 text-[18px] text-black/70">
          <div className="w-[310px] h-[450px] md:h-[590px] lg:w-[480px] ml-auto mr-auto lg:mr-0 relative md:mt-9">
            <Image alt="basin" src={"/blog/single/second.png"} fill />
            hello
          </div>
          <div className=" prose md:prose-lg">
            <div className="">
              <p>
                If you don&apos;t already have a dishwasher installed, you most
                likely haven&apos;t prepared for electricity and water
                connections either. In this case, it is required that a plumber
                with a Safe Water certificate and an electrician who is approved
                by the Swedish Electrical Safety Authority. This is because
                faulty installations where both electricity and water are
                involved can lead to both danger for the individual and damage
                to the home. Examples of damage risks are both water damage and
                fire hazard
              </p>
              <p>
                Many new properties have prepared for a dishwasher, while it is
                not as common in older properties. Regardless of the type of
                property you live in, at JourElite we can help you prepare for
                the installation of a dishwasher, regardless of whether it is a
                change of location or a completely new facility. If you are not
                sure what is needed, you can always contact us for a
                consultation. Of course, you are also entitled to a tax
                deduction on the labor cost, which corresponds to 30% in cases
                where you own the home. You can read more about root deductions
                on the Swedish Tax Agency&apos;s website .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------third section----------- */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full prose-lg">
          <TextTitle
            className="h-20"
            title="So when can you install a dishwasher yourself?"
          />
          <div className="text-black/70">
            <p>
              Before you decide whether you can install the dishwasher yourself,
              it may be good to check what applies in your particular home.
            </p>
            <p>
              This is because some condominium associations and also most
              landlords require that the job be done by a certified plumber to
              ensure that it is done in a professional manner. This is even if
              you have already prepared with electricity and water connections
              for a dishwasher. If you live in a rental property, you must also
              get approval from the landlord to install a dishwasher.
            </p>
            <p>
              This is because the damage that can occur as a result of an
              incorrectly installed dishwasher can affect several homes in the
              property and not just your individual home.
            </p>
            <p>
              It also facilitates insurance matters as insurance companies can
              require that there be a certificate that it was done by a plumber
              certified with safe water for insurance to apply.
            </p>
          </div>
        </div>
        <div className="w-full prose-lg">
          <TextTitle className="h-20" title="Summary" />
          <div className="text-black/70">
            <p>
              In summary, we hope that this review can give you answers to what
              to think about when installing a dishwasher. It may sound simple,
              but there is still something to think about before getting
              started.
            </p>
            <p>
              Of course, we at JourElite are available for consultation and
              advice if you want help with the installation of a dishwasher. We
              can help with everything from purchase to complete installation.
            </p>
            <p className="text-secondary">
              Contact us today to find out how we can help you and for a quote!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
