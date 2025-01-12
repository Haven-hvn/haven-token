import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

interface WhitepaperProps {
  onClose: () => void;
}

const WhitepaperOverlay = styled.div`
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const WhitepaperContainer = styled.div`
  display: flex;
  background-color: white;
  width: 80%;
  height: 90%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const Navigation = styled.nav`
  width: 20%;
  padding-right: 20px;
  border-right: 1px solid #ccc;
  color: black;
  overflow-y: auto;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const NavLink = styled.a<{ distance: number | null; isHovered: boolean }>`
  color: ${({ isHovered }) => (isHovered ? '#f472b6' : '#d8b4fe')}; /* pink-600 : purple-400 */
  text-decoration: none;
  display: block;
  padding: 5px 0;
  font-size: ${({ distance }) => (distance !== null ? `${1 + Math.max(0, 1 - distance / 100) * 0.2}rem` : '1rem')};
  transform: ${({ distance }) => (distance !== null ? `scale(${1 + Math.max(0, 1 - distance / 100) * 0.05})` : 'scale(1)')};
  transition: font-size 0.3s ease, transform 0.3s ease, color 0.3s ease;
`;

const Content = styled.div`
  width: 80%;
  overflow-y: scroll;
  height: 90vh;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 30px;
  color: black;
`;

const SectionTitle = styled.h2`
  color: black;
  margin-top: 0;
`;

const Paragraph = styled.p`
  color: black;
  line-height: 1.6;
`;

const List = styled.ul`
  color: black;
  padding-left: 20px;
`;

const ListItem = styled.li`
  color: black;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  color: black;
`;

const Whitepaper: React.FC<WhitepaperProps> = ({ onClose }) => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const navItemsRef = useRef<{[key: string]: HTMLLIElement | null}>({});
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });

    let closestItemId: string | null = null;
    let minDistance = Infinity;

    Object.entries(navItemsRef.current).forEach(([id, element]) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mousePos.x - centerX) ** 2 + (mousePos.y - centerY) ** 2);

        if (distance < minDistance) {
          minDistance = distance;
          closestItemId = id;
        }
      }
    });

    setHoveredItemId(closestItemId);
  };

  const getItemDistance = (itemId: string): number | null => {
    const element = navItemsRef.current[itemId];
    if (element) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      return Math.sqrt((mousePos.x - centerX) ** 2 + (mousePos.y - centerY) ** 2);
    }
    return null;
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <WhitepaperOverlay>
      <WhitepaperContainer>
        <CloseButton onClick={onClose}>
          <X />
        </CloseButton>
        <Navigation>
          <NavList>
            <NavItem ref={(el) => (navItemsRef.current['abstract'] = el)}>
              <NavLink
                href="#abstract"
                distance={getItemDistance('abstract')}
                isHovered={hoveredItemId === 'abstract'}
              >
                Abstract
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['introduction'] = el)}>
              <NavLink
                href="#introduction"
                distance={getItemDistance('introduction')}
                isHovered={hoveredItemId === 'introduction'}
              >
                Introduction
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['preliminary-use-cases'] = el)}>
              <NavLink
                href="#preliminary-use-cases"
                distance={getItemDistance('preliminary-use-cases')}
                isHovered={hoveredItemId === 'preliminary-use-cases'}
              >
                Preliminary Use Cases
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['technological-architecture'] = el)}>
              <NavLink
                href="#technological-architecture"
                distance={getItemDistance('technological-architecture')}
                isHovered={hoveredItemId === 'technological-architecture'}
              >
                Technological Architecture and Computational Framework
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['machine-learning-infrastructure'] = el)}>
              <NavLink
                href="#machine-learning-infrastructure"
                distance={getItemDistance('machine-learning-infrastructure')}
                isHovered={hoveredItemId === 'machine-learning-infrastructure'}
              >
                Machine Learning Model Training Infrastructure
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['blockchain-infrastructure'] = el)}>
              <NavLink
                href="#blockchain-infrastructure"
                distance={getItemDistance('blockchain-infrastructure')}
                isHovered={hoveredItemId === 'blockchain-infrastructure'}
              >
                Blockchain Infrastructure and Cryptographic Security
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['economic-model'] = el)}>
              <NavLink
                href="#economic-model"
                distance={getItemDistance('economic-model')}
                isHovered={hoveredItemId === 'economic-model'}
              >
                Economic Model and Incentive Mechanisms
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['ethical-considerations'] = el)}>
              <NavLink
                href="#ethical-considerations"
                distance={getItemDistance('ethical-considerations')}
                isHovered={hoveredItemId === 'ethical-considerations'}
              >
                Ethical Considerations and Responsible Innovation
              </NavLink>
            </NavItem>
            <NavItem ref={(el) => (navItemsRef.current['conclusion'] = el)}>
              <NavLink
                href="#conclusion"
                distance={getItemDistance('conclusion')}
                isHovered={hoveredItemId === 'conclusion'}
              >
                Conclusion and Future Research Vectors
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>

        <Content>
          <Title>
            HAVEN: Human Activity Valuation and Exploration Network Technical Whitepaper v1.0
          </Title>

          <Section id="abstract">
            <SectionTitle>Abstract</SectionTitle>
            <Paragraph>
              Technological innovation in artificial intelligence demands increasingly sophisticated approaches to dataset generation, particularly in domains requiring nuanced human understanding. The intersection of machine learning, blockchain technology, and specialized content domains presents unprecedented opportunities for advanced data annotation methodologies. 
            </Paragraph>
            <Paragraph>
              HAVEN introduces a <strong>decentralized network</strong> built on a <strong>framework</strong> for creating and managing information markets, enabling cryptographically secured, ethically managed participatory mechanisms for generating high-quality datasets. This <strong>network</strong> leverages a <strong>protocol</strong> for governance, data validation, and participant compensation, creating a robust ecosystem for collaborative knowledge generation.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="introduction">
            <SectionTitle>Introduction</SectionTitle>
            <Paragraph>
              The contemporary landscape of artificial intelligence training faces significant challenges in acquiring high-quality, contextually rich datasets. Traditional data collection paradigms suffer from inherent limitations: centralized control, opaque participant compensation, limited diversity, and constrained representational depth.
            </Paragraph>
            <Paragraph>
              These systemic constraints fundamentally restrict the potential sophistication of machine learning models, particularly in domains requiring intricate semantic understanding and granular action recognition.
            </Paragraph>
            <Paragraph>
              Modern vision-language models demand increasingly complex training datasets that capture subtle human interactions, contextual nuances, and domain-specific behavioral patterns. Existing methodologies predominantly rely on limited, often biased dataset generation techniques that fail to capture the multidimensional complexity of human activity.
            </Paragraph>
            <Paragraph>
              HAVEN addresses these challenges through a <strong>decentralized network</strong> that integrates a <strong>framework</strong> for information markets and a <strong>protocol</strong> for governance and data validation. This ecosystem enables participants to contribute high-quality, contextually rich data while maintaining stringent ethical standards and providing transparent, performance-based compensation.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="preliminary-use-cases">
            <SectionTitle>Preliminary Use Cases</SectionTitle>
            <List>
              <ListItem>
                <strong>Responsibly Generating AI Porn:</strong> As leading AI companies, such as OpenAI, explore the responsible generation of explicit content, HAVEN provides a <strong>framework</strong> for creating meticulously curated datasets that capture the nuances of adult media. The <strong>network</strong> ensures robust governance and ethical standards, enabling the development of visual language models that accurately understand and interpret complex interactions within NSFW content. This capability is crucial for platforms focusing on adult entertainment, facilitating features such as detailed content categorization, age verification, and safety monitoring.
              </ListItem>
              <ListItem>
                <strong>Enhanced Video Understanding (TikTok-style applications):</strong> HAVEN’s <strong>framework</strong> supports platforms similar to TikTok, where visual models automatically generate initial labeling for short-form videos. Users can then refine these labels, fine-tuning the AI's understanding and creating rich, searchable metadata. This leads to improved content discovery, personalized recommendations, and more sophisticated video editing tools.
              </ListItem>
              <ListItem>
                <strong>Next-Generation Visual Language Models (AI Agent Cam Girls):</strong> HAVEN’s <strong>network</strong> enables the creation of datasets for AI agent cam girls, which provide personalized and interactive experiences for users. By leveraging diverse and appropriately labeled datasets, these AI agents can accurately perceive, interpret, and respond to user actions, voice, and visual cues in real-time.
              </ListItem>
              <ListItem>
                <strong>Content Moderation:</strong> HAVEN’s <strong>framework</strong> supports the training of AI models to understand the context and nuances of online content, leading to more effective and fair moderation practices.
              </ListItem>
            </List>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="technological-architecture">
            <SectionTitle>Technological Architecture and Computational Framework</SectionTitle>
            <Paragraph>
              The architectural design of HAVEN emerges from a sophisticated integration of multiple advanced technological domains. At its core, the system leverages a distributed computational infrastructure built upon the Solana blockchain, providing unprecedented transaction throughput and cryptographic security.
            </Paragraph>
            <Paragraph>
              The platform's technical architecture encompasses multiple sophisticated components designed to facilitate seamless, secure, and ethically managed data generation.
            </Paragraph>
            <Paragraph>
              The primary computational workflow initiates with advanced video segmentation algorithms capable of granular action recognition and semantic parsing. Each submitted video undergoes a complex transformation process wherein machine vision techniques deconstruct the visual signal into discrete, semantically meaningful clips.
            </Paragraph>
            <Paragraph>
              These segmented components are then subjected to a multilayered human annotation process, wherein trained operators provide precise, contextually informed labels that capture the nuanced characteristics of observed human activities.
            </Paragraph>
            <Paragraph>
              Our segmentation methodology implements advanced computer vision techniques that extend beyond traditional frame-by-frame analysis. The algorithm employs a combination of convolutional neural networks, temporal coherence modeling, and semantic action recognition to identify meaningful video segments.
            </Paragraph>
            <Paragraph>
              This approach enables the extraction of intricate behavioral patterns that transcend simple visual classification, capturing the underlying contextual dynamics of human interaction.
            </Paragraph>
            <Paragraph>
              The human annotation stage represents a critical juncture in dataset generation, wherein domain experts provide sophisticated semantic interpretations of the segmented video content. Unlike conventional crowdsourcing platforms, HAVEN implements a reputation-based system that dynamically evaluates annotator performance, ensuring consistently high-quality dataset curation.
            </Paragraph>
            <Paragraph>
              Annotators receive cryptographically verifiable credentials that reflect their historical performance, creating a meritocratic ecosystem that incentivizes precision and domain expertise.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="machine-learning-infrastructure">
            <SectionTitle>Machine Learning Model Training Infrastructure</SectionTitle>
            <Paragraph>
              The training of vision-language models (VLMs) demands sophisticated computational approaches that extend traditional machine learning paradigms. Our proposed <strong>framework</strong> introduces an innovative training methodology that integrates advanced representation learning techniques with cryptographically secured dataset management. The core machine learning infrastructure is designed to leverage the high-quality, semantically rich datasets generated through our decentralized annotation ecosystem.
            </Paragraph>
            <Paragraph>
              Mapping vision to language remains an active research area, with various techniques—from contrastive to generative methods—being explored to train VLMs. However, the high compute and data costs often pose significant barriers for researchers, motivating the use of pre-trained large language models (LLMs) or image encoders to learn only a mapping between modalities. Regardless of the training technique, several general considerations must be addressed. Large-scale, high-quality images and captions are essential ingredients to push model performance. Additionally, improving model grounding and aligning models with human preferences are critical steps to enhance reliability.
            </Paragraph>
            <Paragraph>
              To assess performance, several benchmarks have been introduced to measure vision-linguistic and reasoning abilities. However, many of these benchmarks have limitations, such as being solvable primarily through language priors. Binding images to text is not the sole objective of VLMs; video is another important modality that can be leveraged to learn representations. Yet, significant challenges remain in learning robust video representations. Research into VLMs continues to be highly active, as many components are still missing to make these models more reliable and effective.
            </Paragraph>
            <Paragraph className="whitepaper-equation">
              L(θ)=∑[Li(θi)]+R(θ)
            </Paragraph>
            <Paragraph>
              Where: L represents the comprehensive loss function, θ represents the model's parametric space, Li denotes individual layer-specific loss computations, and R represents the regularization term constraining model complexity.
            </Paragraph>
            <Paragraph>
              This formulation enables a dynamic, adaptive learning process that simultaneously minimizes prediction error while preventing overfitting through sophisticated regularization mechanisms. The approach allows for nuanced representation learning that captures the intricate semantic relationships present within the training dataset.
            </Paragraph>
            <Paragraph>
              Our training <strong>protocol</strong> implements a novel federated learning approach that distributes computational workload across multiple nodes while maintaining strict privacy preservation. Each computational node contributes to the collective model training through encrypted gradient aggregation, ensuring that individual participant data remains completely anonymized. The distributed training <strong>framework</strong> enables unprecedented scaling of machine learning capabilities while maintaining rigorous ethical standards.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="blockchain-infrastructure">
            <SectionTitle>Blockchain Infrastructure and Cryptographic Security</SectionTitle>
            <Paragraph>
              The Solana blockchain provides the foundational infrastructure for HAVEN's <strong>network</strong>, offering exceptional computational performance and cryptographic integrity. With a transaction throughput exceeding 65,000 transactions per second and sub-second finality, the platform enables real-time, secure participant interactions. The blockchain layer implements advanced zero-knowledge proof mechanisms that guarantee participant privacy while maintaining transparent, auditable contribution records.
            </Paragraph>
            <Paragraph className="whitepaper-equation">
              C=f(S,A,R)
            </Paragraph>
            <Paragraph>
              Where: C represents consensus validation, S represents stake weight, A represents authority ranking, and R represents reputation score.
            </Paragraph>
            <Paragraph>
              This cryptographic <strong>protocol</strong> ensures a dynamically weighted validation process that adapts to participant performance and stake contributions. The result is a robust, self-regulating system that maintains high security standards while providing flexible, merit-based governance.
            </Paragraph>
            <Paragraph>
              Smart contract implementations utilize the Rust programming language, providing enhanced memory safety and computational efficiency. Each contract undergoes rigorous formal verification processes to eliminate potential vulnerabilities and ensure predictable, deterministic execution. The contract architecture enables complex, multi-stage interactions that govern dataset generation, participant compensation, and model training workflows.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="economic-model">
            <SectionTitle>Economic Model and Incentive Mechanisms</SectionTitle>
            <Paragraph>
              The HAVEN token ($HVN) serves as the primary mechanism for economic coordination within the ecosystem. The token's value is dynamically determined through a sophisticated computational model that considers multiple interdependent variables:
            </Paragraph>
            <Paragraph className="whitepaper-equation">
              V(t)=f(S,D,P,R)
            </Paragraph>
            <Paragraph>
              Where: V represents token valuation, S represents circulating supply, D represents network demand, P represents protocol performance, and R represents reputation metrics.
            </Paragraph>
            <Paragraph>
              This approach creates a flexible economic <strong>framework</strong> that adapts to changing ecosystem dynamics, providing stable yet responsive participant incentives. Token distribution follows a carefully calibrated mechanism that prioritizes long-term platform sustainability and participant engagement.
            </Paragraph>
            <Paragraph>
              The staking mechanism implements a tiered reward structure that encourages sustained, high-quality contributions. Participants can stake $HVN tokens to unlock progressively sophisticated platform capabilities, with reward calculations following a nuanced performance-based algorithm:
            </Paragraph>
            <Paragraph className="whitepaper-equation">
              R=B∗(C/T)∗(Q/M)
            </Paragraph>
            <Paragraph>
              Where: R represents participant reward, B represents base reward coefficient, C represents contribution quality, T represents total network contributions, Q represents quality score, and M represents maximum potential score.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="ethical-considerations">
            <SectionTitle>Ethical Considerations and Responsible Innovation</SectionTitle>
            <Paragraph>
              Recognizing the sensitive nature of dataset generation, particularly in domains involving human activity representation, HAVEN implements comprehensive ethical frameworks that prioritize participant consent, data privacy, and responsible technological development. The platform's design incorporates multiple layers of protection against potential misuse, including advanced anonymization techniques, granular consent management, and ongoing algorithmic bias detection.
            </Paragraph>
            <Paragraph>
              The ethical <strong>protocol</strong> extends beyond traditional compliance frameworks, implementing a proactive approach to responsible innovation. Machine learning models are continuously evaluated for potential representational biases, with automated detection mechanisms that identify and mitigate problematic patterns. This approach ensures that generated datasets and trained models maintain high standards of fairness, accuracy, and cultural sensitivity.
            </Paragraph>
          </Section>
          <hr style={{ borderWidth: '3px', borderColor: 'black' }} />

          <Section id="conclusion">
            <SectionTitle>Conclusion and Future Research Vectors</SectionTitle>
            <Paragraph>
              HAVEN represents a fundamental reimagining of dataset generation methodologies, introducing a sophisticated, ethically managed ecosystem for collaborative knowledge creation. By integrating advanced blockchain technology, distributed machine learning infrastructure, and comprehensive governance frameworks, we provide a transformative platform that addresses critical limitations in contemporary artificial intelligence training approaches.
            </Paragraph>
            <Paragraph>
              Future research directions will focus on expanding the platform's computational capabilities, exploring advanced federated learning techniques, and developing more nuanced approaches to semantic representation learning. The ongoing evolution of the HAVEN ecosystem will continue to push the boundaries of decentralized, ethically managed technological innovation.
            </Paragraph>
          </Section>
        </Content>
      </WhitepaperContainer>
    </WhitepaperOverlay>
  );
};

export default Whitepaper;
