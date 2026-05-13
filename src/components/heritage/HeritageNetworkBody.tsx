"use client";

import { EditorialBand } from "@/components/layout/PageIntro";
import { LuxuryMediaReveal } from "@/components/ui/LuxuryMediaReveal";
import { LuxuryWordReveal } from "@/components/ui/LuxuryWordReveal";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { HERITAGE_IMAGES } from "@/lib/site-images";
import { motion } from "framer-motion";
import Image from "next/image";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

type Props = {
  imageSrc: string;
  imagePriority?: boolean;
  imageLeft?: boolean;
  revealDirection?: "left" | "up";
  children: React.ReactNode;
};

function HeritageSplitAnimated({
  imageSrc,
  imagePriority,
  imageLeft,
  revealDirection = "left",
  children,
}: Props) {
  const textFromX = imageLeft ? 28 : -28;

  const imageBlock = (
    <LuxuryMediaReveal
      direction={revealDirection}
      className="relative min-h-[280px] md:min-h-[380px]"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width:768px)100vw,50vw"
        priority={imagePriority}
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/25 via-transparent to-transparent md:bg-gradient-to-r" />
    </LuxuryMediaReveal>
  );

  const textBlock = (
    <motion.div
      className="flex flex-col justify-center p-8 md:p-12 lg:p-14"
      initial={{ opacity: 0, x: textFromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px 22% 0px" }}
      transition={{ duration: 0.88, ease: easeLuxury }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="grid gap-0 overflow-hidden border border-[#1A1A1A]/8 bg-[#FFFFFF] md:grid-cols-2">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 font-sans text-sm leading-[1.9] text-[#1A1A1A]/68">{children}</div>
  );
}

export function HeritageNetworkBody() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <SectionReveal>
          <HeritageSplitAnimated
            imageSrc={HERITAGE_IMAGES.intro}
            imagePriority
            imageLeft
            revealDirection="left"
          >
            <Prose>
              <p>
                The maison was formally established five years ago following a series of private
                sourcing assignments that began in secondary sorting rooms rather than retail
                showcases. Early work focused on verification, treatment literacy, and discreet
                acquisition support for collectors navigating increasingly opaque gemstone markets.
              </p>
              <p>
                Beverly Hills remains the visible coordinate. The operational reality is quieter:
                late-night calls across trading zones, sealed laboratory packets, dealer
                relationships measured in decades, and stones that move through private hands before
                they ever reach public catalogs.
              </p>
            </Prose>
          </HeritageSplitAnimated>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <div className="mt-10 md:mt-14">
            <HeritageSplitAnimated imageSrc={HERITAGE_IMAGES.founder} revealDirection="up">
              <div>
                <LuxuryWordReveal
                  text="Founder · Selena Taylor"
                  as="div"
                  className="font-serif text-3xl text-[#1A1A1A] md:text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  stagger={0.06}
                  delayChildren={0.02}
                />
                <Prose>
                  <p className="mt-5">
                    Selena Taylor entered the trade through logistical and verification environments
                    where valuation errors carried immediate financial consequence. Before
                    establishing the maison, she worked alongside secondary-market gemstone handlers
                    and private sourcing intermediaries responsible for reviewing stones outside
                    conventional showroom structures.
                  </p>
                  <p>
                    Her philosophy developed from this environment: every gemstone is approached
                    first as a liability, then as a historical object, and only finally as jewelry.
                  </p>
                  <p>
                    Over the past five years, Selena has overseen private placements involving
                    collector-grade sapphires, Colombian emeralds, fancy color diamonds, and
                    untreated Burmese rubies, with emphasis placed on documentation continuity and
                    long-horizon custodianship rather than transactional turnover.
                  </p>
                  <p>
                    Her work today centers on collector advisory, acquisition strategy, and
                    archive-oriented curation for private clients across North America, Europe, and
                    selected Asian markets.
                  </p>
                </Prose>
              </div>
            </HeritageSplitAnimated>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mt-10 md:mt-14">
            <HeritageSplitAnimated
              imageSrc={HERITAGE_IMAGES.atelier}
              imageLeft
              revealDirection="left"
            >
              <div>
                <LuxuryWordReveal
                  text="Creative & atelier direction"
                  as="div"
                  className="font-serif text-3xl text-[#1A1A1A] md:text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  stagger={0.05}
                  delayChildren={0.02}
                />
                <Prose>
                  <p className="mt-5">
                    The maison&apos;s visual language was shaped in collaboration with independent
                    European jewelry designer Lucien Vale, whose atelier experience spans more than
                    two decades across private high-jewelry commissions and restoration projects.
                  </p>
                  <p>
                    Rather than pursuing visible signatures, the design philosophy emphasizes
                    proportion discipline, optical balance, and gemstone priority. Settings are
                    constructed to support the crystal&apos;s natural behavior under changing light
                    environments rather than overpower it through excessive architecture.
                  </p>
                  <p>
                    Bench collaborations remain intentionally limited. Production is handled through
                    a rotating network of master setters, polishers, and platinum specialists
                    selected for technical tolerance, discretion, and consistency under magnification.
                  </p>
                  <p>
                    Jewelry here is not &ldquo;manufactured.&rdquo; It is negotiated — between thermal
                    history, metal tension, structural longevity, and collector intention.
                  </p>
                </Prose>
              </div>
            </HeritageSplitAnimated>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-10 md:mt-14">
            <HeritageSplitAnimated imageSrc={HERITAGE_IMAGES.gemology} revealDirection="up">
              <div>
                <LuxuryWordReveal
                  text="Gemological practice"
                  as="div"
                  className="font-serif text-3xl text-[#1A1A1A] md:text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  stagger={0.055}
                  delayChildren={0.02}
                />
                <Prose>
                  <p className="mt-5">
                    Reports are examined across varied light temperatures and contextualized against
                    market behavior, treatment prevalence, and laboratory language evolution.
                  </p>
                  <p>
                    Inclusions are not interpreted solely as imperfections, but as geological
                    timestamps carrying evidence of formation history, intervention, and origin
                    probability.
                  </p>
                  <p>
                    The gemologist&apos;s role within the maison is editorial as much as technical:
                    determining which details deserve permanent inclusion within a collector&apos;s
                    archival file.
                  </p>
                </Prose>
              </div>
            </HeritageSplitAnimated>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <div className="mt-10 md:mt-14">
            <HeritageSplitAnimated
              imageSrc={HERITAGE_IMAGES.network}
              imageLeft
              revealDirection="left"
            >
              <div>
                <LuxuryWordReveal
                  text="Sourcing network"
                  as="div"
                  className="font-serif text-3xl text-[#1A1A1A] md:text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  stagger={0.055}
                  delayChildren={0.02}
                />
                <Prose>
                  <p className="mt-5">
                    The sourcing structure spans specialist dealers, estate channels, ethical auction
                    pipelines, and invitation-only viewings operating across multiple trading regions.
                  </p>
                  <p>
                    Geography functions here as a verification variable rather than a marketing
                    narrative. Origin claims, treatment disclosures, and rarity positioning are
                    expected to withstand institutional cross-examination.
                  </p>
                  <p>
                    Relationships within the network are maintained through repetition, discretion,
                    and long-cycle trust rather than visibility.
                  </p>
                </Prose>
              </div>
            </HeritageSplitAnimated>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.14}>
          <div className="mt-10 md:mt-14">
            <HeritageSplitAnimated imageSrc={HERITAGE_IMAGES.concierge} revealDirection="up">
              <div>
                <LuxuryWordReveal
                  text="Concierge & collector services"
                  as="div"
                  className="font-serif text-3xl text-[#1A1A1A] md:text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  stagger={0.045}
                  delayChildren={0.02}
                />
                <Prose>
                  <p className="mt-5">
                    Appointments are paced with the atmosphere of private exhibitions rather than
                    conventional retail consultations.
                  </p>
                  <p>
                    Viewing sessions are prepared in advance with calibrated lighting environments,
                    laboratory documentation binders, comparative stones, and acquisition notes
                    assembled prior to arrival.
                  </p>
                  <p>
                    WhatsApp operates as a discreet routing channel for initial introductions,
                    collector logistics, sourcing updates, and post-placement continuity.
                  </p>
                </Prose>
              </div>
            </HeritageSplitAnimated>
          </div>
        </SectionReveal>
      </div>

      <EditorialBand dark>
        <div className="mx-auto max-w-[900px] px-6 md:px-0">
          <LuxuryWordReveal
            text="Every gemstone is approached first as a liability, then as a historical object, and only finally as jewelry."
            as="div"
            className="font-serif text-2xl leading-snug text-[#F4F4F4]"
            stagger={0.04}
            delayChildren={0.1}
          />
          <motion.p
            className="mt-4 font-sans text-xs uppercase tracking-[0.28em] text-[#D6D6D6]/55"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.35, ease: easeLuxury }}
          >
            — Selena Taylor
          </motion.p>
        </div>
      </EditorialBand>
    </>
  );
}
