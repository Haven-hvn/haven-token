import CommunityBar from "./CommunityBar";
import { Linkedin, Twitter, MessageSquare, MessagesSquare } from "lucide-react";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Section } from "./ui/section";
import { Container } from "./ui/container";

function JoinUs() {
  return (
    <div id="join-us">
      <Section className="">
        <Container>
          <div className="flex gap-4 flex-col mb-16">
            <div className="text-center">
              <Heading className="tracking-tight text-center mb-4">
                Get Access to our {""}
                <span className=" bg-gradient-to-t bg-clip-text text-transparent  from-red-400  to-pink-600">
                  Exclusive
                </span>{" "}
                {""}
                Community
              </Heading>
              <Text className="text-lg md:text-xl  font-mono text-center text-gray-400 max-w-2xl  mx-auto">
                Transforming multiple industries through advanced AI dataset
                generation
              </Text>
            </div>
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
