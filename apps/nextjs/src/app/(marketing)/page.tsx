// export const runtime = "edge";

import { Meteors } from "@/components/meteor";
import { WaitlistForm } from "./waitlist-form";

const Page = async () => {
  return (
    <>
      <section>
        <div className="relative mx-auto max-w-7xl border-x border-b border-border p-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="font-light text-muted-foreground">
              Productised Web Development Studio
            </span>
            <h1 className="mt-6 text-2xl font-light text-secondary-foreground">
              Maximize your online presence with a unique and engaging one-page
              website that delivers outstanding results.
            </h1>
            <WaitlistForm />
          </div>
          <div
            className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
            style={{ transform: `rotateY(180deg)` }}
          >
            <Meteors number={15} />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl border-x border-b border-border">
          <div className="divide-gray grid grid-cols-1 text-secondary-foreground md:grid-cols-3 lg:divide-x">
            <div className="flex h-full flex-col gap-6 p-8">
              <div>Great Foundations</div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore autem alias doloribus quod consequuntur hic, dolorum
                at itaque iusto porro minima quia nemo reiciendis natus, dolores
                quam, voluptatum est explicabo?
              </p>
            </div>
            <div className="flex h-full flex-col gap-6 p-8">
              <div>Feature Rich</div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore autem alias doloribus quod consequuntur hic, dolorum
                at itaque iusto porro minima quia nemo reiciendis natus, dolores
                quam, voluptatum est explicabo
              </p>
            </div>
            <div className="flex h-full flex-col gap-6 p-8">
              <div>Open Source</div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore autem alias doloribus quod consequuntur hic, dolorum
                at itaque iusto porro minima quia nemo reiciendis natus
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
