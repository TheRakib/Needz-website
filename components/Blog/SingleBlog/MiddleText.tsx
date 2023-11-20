import TextTitle from "@/components/Shared/TextTitle";
import React from "react";

export default function MiddleText() {
  return (
    <div className="max-w-layout mx-auto my-10">
      <TextTitle
        className="h-10"
        title="So when can you install a dishwasher yourself?"
      />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full prose-lg">
          <div className="text-black/70">
            <p>
              Depending on whether you have a dishwasher installed today or not,
              the process may look different.
            </p>
            <p>
              If you have a dishwasher that you want to replace, you already
              have water and electricity prepared for the new machine - provided
              you want it in the same place. If you would like to change the
              location of the dishwasher, it may be good to contact a plumber to
              review the conditions for rewiring electricity and water to the
              new location. We at JourElite also work with renovations and
              planning and therefore have a number of experienced plumbers who
              can help you plan for the change.
            </p>
            <p>
              If the dishwasher is to be in the same place, it is a relatively
              simpler process. You can contact us to get the help of a plumber
              to quickly and easily install the dishwasher. It is also okay to
              install the dishwasher yourself, but for this we recommend that
              you have basic knowledge and know what you are doing. This is
              because an incorrectly installed dishwasher can lead to
              unnecessary water damage which can be much more expensive than
              hiring a plumber in the long run.
            </p>
            <p>
              If you choose to install the dishwasher yourself, we make this
              easier for you with a basic guide on how to install a dishwasher
              yourself. This guide assumes that you have already prepared for
              electricity and water.
            </p>
          </div>
        </div>
        <div className="w-full prose-lg">
          <div className="text-black/70">
            <ol type="1">
              <li>Turn off the water before starting.</li>
              <li>Unplug out of the way of the old dishwasher.</li>
              <li>Disconnect the connected water lines.</li>
              <li>Remove the old dishwasher and make room for the new one.</li>
              <li>
                Make sure there is a drip guard under the new dishwasher. This
                is a requirement and must be present. Drip protection can also
                be called leakage protection.
              </li>
              <li>
                On the back of the new dishwasher, there is an inlet hose and a
                drain hose connected to the dishwasher.
              </li>
              <li>
                Under the sink there is a spout - you now connect the new drain
                hose to this. This should be the same spout you just removed the
                old drain hose from.
              </li>
              <li>
                When you have installed the new hose, you should think that it
                should look like a "U" fixed upside down. This is to prevent
                waste water from running down the sink into the dishwasher.
              </li>
              <li>Secure the new drain hose with a hose clamp.</li>
              <li>
                Connect the inlet hose from the dishwasher to the water
                connection located under the sink. Make sure it is tight so that
                it does not start leaking when the dishwasher is put into use.
              </li>
              <li>
                Plug in the electricity by connecting the dishwasher to the wall
                outlet.
              </li>
              <li>
                Slide the machine in and mount it the way you want it, you can
                find how to do this in the instruction manual for your
                dishwasher as this differs between models.
              </li>
              <li>
                After the installation of the dishwasher is complete, it is good
                to test a program to make sure it is not leaking anywhere.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
