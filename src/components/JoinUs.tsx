import { memo } from "react";
import { Linkedin, Twitter, MessageSquare, MessagesSquare } from "lucide-react";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import CommunityBar from "./CommunityBar";

const socialLinks = [
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Join our video classification community",
    link: "https://discord.com/invite/57mPMDfQew",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Stay updated on AI training progress",
    link: "https://x.com/Sinboxfun",
  },
  {
    icon: MessagesSquare,
    title: "Telegram",
    description: "Get help with video classification",
    link: "https://t.me/sinboxcommunity",
  },
  {
    icon: Linkedin,
    title: "Linkedin",
    description: "Connect with AI researchers and developers",
    link: "https://www.linkedin.com/company/sinbox",
  },
];

const JoinUs = () => {
  return (
    <div id="join-us">
      <Section>
        <Container>
          <div className="flex gap-4 flex-col mb-16">
            <div className="text-center">
              <Heading className="tracking-tight text-center mb-4">
                Join the{" "}
                <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600">
                  Video Classification
                </span>{" "}
                Community
              </Heading>
              <Text className="text-lg md:text-xl font-mono text-center text-gray-400 max-w-2xl mx-auto">
                Connect with fellow classifiers and contribute to the future 
                of AI-powered video understanding
              </Text>
            </div>
          </div>

          <div className="flex w-full justify-center flex-wrap mt-16">
            {socialLinks.map((social) => (
              <CommunityBar
                key={social.title}
                icon={<social.icon />}
                title={social.title}
                description={social.description}
                link={social.link}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default memo(JoinUs);
