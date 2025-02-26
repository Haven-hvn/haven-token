import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../lib/anims";
import CommunityBar from "./CommunityBar";
import { Linkedin, Twitter, MessageSquare, MessagesSquare } from "lucide-react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";

function JoinUs() {
  return (
    <div id="join-us">
      <Section className="mt-56">
        <Container>
          <div className="flex gap-4 flex-col mb-12">
            <motion.h2
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl tracking-tight text-center font-semibold  text-white mb-2"
            >
              Get Access to our {""}
              <span className=" bg-gradient-to-t bg-clip-text text-transparent  from-red-400  to-pink-600">
                Exclusive
              </span>{" "}
              {""}
              Community
            </motion.h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
              The HAVEN token ($HVN) powers our ecosystem through sophisticated
              staking and reward mechanisms
            </p>
          </div>

          <div className="flex w-full justify-center flex-wrap mt-16">
            <CommunityBar
              icon={<MessageSquare />}
              title="Discord"
              description="Contribute to wide-ranging discussions"
              link="https://t.me/HavenNetworkCommunity"
            />
            <CommunityBar
              icon={<Twitter />}
              title="Twitter"
              description="Share ideas and participate in discussions"
              link="https://x.com/HavenCryptoNet"
            />
            <CommunityBar
              icon={<MessagesSquare />}
              title="Telegram"
              description="Ask and engage questions"
              link="https://t.me/HavenNetworkCommunity"
            />
            <CommunityBar
              icon={<Linkedin />}
              title="Linkedin"
              description="Stay up to date with news and updates"
              link="https://www.linkedin.com/company/your-linkedin"
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default JoinUs;
