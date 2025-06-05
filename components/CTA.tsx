import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning Your Way</div>
      <h2 className="text-3xl font-bold">
        Build and Personalized your Companion
      </h2>
      <p>
        Pick a name, subject, voice, and personality - and start learning
        through voice conversation that feels natural and fun
      </p>

      <Image src="/images/cta.svg" alt="CTS" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build a new companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
